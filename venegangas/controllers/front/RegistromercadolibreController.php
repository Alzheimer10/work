<?php
class RegistromercadolibreController extends FrontController
{
    public $php_self = 'registromercadolibre';    
    public $authRedirection = 'registromercadolibre';
    public $auth = true;    
    public $ssl = false;    

    /**
     * Initialize auth controller
     * @see FrontController::init()
     */
    public function init()
    {
        parent::init();
        $sql = 'SELECT * FROM ps_cliente_ml WHERE id_customer="'.$this->context->cookie->id_customer.'"';
        $sql=Db::getInstance(_PS_USE_SQL_SLAVE_)->getRow($sql);
           //$this->context->smarty->assign('customer_new','Se A«Ðadio Correctamente Su Pedido');
        if ($sql){ 
            $_POST['customer_new'] = 1;
            $_POST['email'] = $this->context->cookie->email;
/* 
            $_POST['nombre'] =  $sql['nombre'];
            $_POST['seudonimo_ml'] =  $sql['seudonimo_ml'];
            $_POST['apellido'] =  $sql['apellido'];
            $_POST['CI'] =  $sql['CI'];
            $_POST['RIF'] =  $sql['RIF'];
            $_POST['direccion'] =  $sql['direccion'];
            $_POST['telefono'] =  $sql['telefono'];
            $_POST['telefonoA'] =  $sql['telefonoA'];
            $_POST['Nombre'] =  $sql['nombre'];
            $_POST['Apellido'] =  $sql['apellido'];*/
            $sql = 'SELECT count(*) FROM ps_pedidos_ml WHERE id_customer="'.$this->context->cookie->id_customer.'"';
            if (Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue($sql)>0) {
                $_POST['poseePedidos'] = '0';
                $this->context->smarty->assign('customer',1);
                $sql = 'SELECT item_title,id_pedido,monto,cantidad_pedidos,thumbnail,estado FROM ps_pedidos_ml INNER JOIN ventas_ml ON ps_pedidos_ml.id_pedido = ventas_ml.id_orden WHERE ps_pedidos_ml.id_customer="'.$this->context->cookie->id_customer.'"  order by updated_at desc';
                $sql=Db::getInstance(_PS_USE_SQL_SLAVE_)->ExecuteS($sql);
                $this->context->smarty->assign('TodosPedidos', $sql);
            }
        }else{
            $_POST['poseePedidos'] = $this->context->cookie->email;
        }
/*        
        Mail::Send(
            $this->context->language->id,
            'account',
            Mail::l('Welcome!'),
            array(
                '{firstname}' => $this->context->cookie->firstname,
                '{lastname}' => $this->context->cookie->lastname,
                '{email}' => $this->context->cookie->email,
                '{active_url}' => 'http://venegangas.com/venegangas/autenticacion?email='.$this->context->cookie->email,
                //'{active_url}' => 'https://venegangas.com/venegangas/autenticacion?email=',
                '{id_customer}' => (int)$this->context->cookie->id_customer,
                '{passwd}' => Tools::getValue('passwd')),
            $this->context->cookie->email,
            $this->context->cookie->firstname.' '.$this->context->cookie->lastname
        );
*/
    }

    public function setMedia(){
        parent::setMedia();
        $this->addCSS(_THEME_CSS_DIR_.'registromercadolibre.css');
        $this->addJS(array(
            _THEME_JS_DIR_.'direccion.js',
            _THEME_JS_DIR_.'authentication.js',
            _THEME_JS_DIR_.'jquery.number.js',
            _PS_JS_DIR_.'validate.js'
        ));        
    }

    public function process(){
        parent::process();
    }

    /**
     * Start forms process
     * @see FrontController::postProcess()
    **/
    public function postProcess(){
        if (Tools::isSubmit('SubmitPago'))
            $this->processSubmitPago();
        if (Tools::isSubmit('SubmitPedido'))
            $this->processSubmitPedido();
    }


    /**
     * Process submit Pago
     * Agrega los datos faltantes en latabla pedidos_ml, esos datos son los del pago, y aparte, sube el comprobante, si y solo si existe!
     */
    protected function processSubmitPago(){
        if (Tools::getValue('selectPago') != 3) {
        	if(!Validate::isNTransferencia(Tools::getValue('NTransferencia')))
        	    $this->errors[] = Tools::displayError('El numero de la transferencia es incorrecta!');
        }
        if (!count($this->errors)){
            $sql = 'UPDATE '._DB_PREFIX_.'pedidos_ml SET estado=2, tipo_envio='.(int)Tools::getValue('selectEnvio').',serial="'.Tools::getValue('NTransferencia').'" WHERE id_pedido='.Tools::getValue('Npedido');
            if (Db::getInstance()->execute($sql)){
                if (isset($_FILES['ArchivoAdjunto'])){
                    $type="";
                    if( $_FILES['ArchivoAdjunto']['type'] == "image/jpeg" )
                        $type=".jpeg";
                    if( $_FILES['ArchivoAdjunto']['type'] == "image/gif" )
                        $type=".gif";
                    if( $_FILES['ArchivoAdjunto']['type'] == "image/png" )
                        $type=".png";
                    move_uploaded_file($_FILES['ArchivoAdjunto']['tmp_name'],_PS_ROOT_DIR_."/comprobantes/".Tools::getValue('Npedido').$type);
                }
                $data = array('mprs_lu'=>'crcaicedo@gmail.com','mprs_lp'=>'OrionCorp34','tipo_envio' =>(int)Tools::getValue('selectEnvio'), 'NTransferencia' => Tools::getValue('NTransferencia'), 'id_pedido' => Tools::getValue('Npedido'), 'metodo_pago' => Tools::getValue('selectPago'), 'imagen' => '@' . $_FILES['ArchivoAdjunto']['tmp_name']);

                $url = 'http://venegangas.com/webservicePrestashop/recibir.php';
                //$url = 'http://172.16.2.127/mprs/ml_crearpedido.php';
                $ch = curl_init($url );
                curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
                //curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:multipart/form-data','Expect:'));
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
                curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($data));
                $result = curl_exec($ch);
                curl_close($ch);
                Tools::redirect('index.php?controller=registromercadolibre?success=pago'.$result);
            }else
                $this->errors[] = Tools::displayError('Ocurrio un error al anadir su pago!');
        }
    }

    /**
     * Process submit Pedido
    **/
    protected function processSubmitPedido(){
        $Npedido = Tools::getValue('Npedido');
        $sql = 'SELECT count(*) FROM ps_pedidos_ml WHERE id_pedido='.$Npedido;
        $sql = Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue($sql);
        if ($sql==0){
            $sql = 'SELECT id_customer FROM ps_cliente_ml WHERE id_customer="'.$this->context->cookie->id_customer.'"';
            if (!Db::getInstance(_PS_USE_SQL_SLAVE_)->getRow($sql)){
                $email = Tools::getValue('email');
                $CI = trim(Tools::getValue('CI'));
                $RIF = trim(Tools::getValue('RIF'));
                $telefono = Tools::getValue('TelefonoContacto');
                $telefonoA =  Tools::getValue('TelefonoAdicional');
                if (empty($Npedido)){
                    $this->errors[] = Tools::displayError('El numero del pedido se requiere.');
                }elseif (!Validate::isNumero($CantidadProductos)) {
                    $this->errors[] = Tools::displayError('La cantidad de productos es incorrecto.');
                }elseif(empty($email)) {
                    $this->errors[] = Tools::displayError('Se requiere el email.');
                }elseif (!Validate::isEmail($email)) {
                    $this->errors[] = Tools::displayError('Emeil invalido.');
                }elseif (!Validate::isNumero($CI)) {
                    $this->errors[] = Tools::displayError('Cedula incorrecta.');
                }elseif (!empty($RIF)){
                    if(!Validate::isNumero($RIF))
                    $this->errors[] = Tools::displayError('RIF incorrecta.');
                }else{
                    $estado = Tools::getValue('estados');
                    $estado = substr( $estado,strpos($estado,'_')+1);
                    $municipio = Tools::getValue('municipios');
                    $municipio = substr( $municipio,strpos($municipio,'_')+1);
                    $direccion = $estado.', '.$municipio.', '.Tools::getValue('Direccion');
                    $apellido = Tools::getValue('Apellido');
                    $nombre =  Tools::getValue('Nombre');
                    Db::getInstance()->autoExecute(_DB_PREFIX_.'cliente_ml', array(
                        'id_customer' =>    $this->context->cookie->id_customer,
                        'CI' =>    $CI,
                        'RIF' =>    $RIF,
                        'nombre' =>    $nombre,
                        'apellido' =>    $apellido,
                        'email' =>    $email,
                        'telefono' =>    $telefono,
                        'telefonoA' =>    $telefonoA,
                        'direccion' =>    $direccion
                    ), 'INSERT');
                }
            }
            if (!count($this->errors)){
                if (Tools::getValue('envio')){
                    $tipo_envio = 2;
                    if (Tools::getValue('info_direccion_check')){
                        $tipo_envio = 3;
                    }else{
                        $estado = Tools::getValue('estadosEnvio');
                        $estado = substr( $estado,strpos($estado,'_')+1);
                        $municipio = Tools::getValue('municipiosEnvio');
                        $municipio = substr( $municipio,strpos($municipio,'_')+1);
                        $direccion = $estado.', '.$municipio.', '.Tools::getValue('direccionEnvio');
                    }
                }else{
                    if (Tools::getValue('tienda')){
                        $tipo_envio = 1;
                        $direccion = NULL;
                    }
                }
                $CantidadProductos = Tools::getValue('CantidadProductos');
                $MontoTotal = Tools::getValue('MontoTotal');
                Db::getInstance()->autoExecute(_DB_PREFIX_.'pedidos_ml', array(
                    'id_pedido' =>    $Npedido,
                    'id_customer' =>    $this->context->cookie->id_customer,
                    'monto_total' =>    $MontoTotal,
                    'cantidad_pedidos' =>    $CantidadProductos,
                    'tipo_envio' =>   $tipo_envio,
                    'direccion' =>    $direccion,
                    'estado' =>   1,
                    'created_at' => date('d-m-y H:i:s')
                ), 'INSERT');
                Tools::redirect('index.php?controller=registromercadolibre?success=pedido');
                //$_POST['success'] = 'Se A«Ðadio Correctamente Su Pedido';
                //$this->context->smarty->assign('success','Se A«Ðadio Correctamente Su Pedido');
            }
        }else
            $this->errors[] = Tools::displayError('El pedido ya esta apartado!');
    }

    public function initContent(){
        parent::initContent();
        $this->setTemplate(_PS_THEME_DIR_.'registromercadolibre.tpl');
    }

}