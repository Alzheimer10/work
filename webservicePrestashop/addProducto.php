<?php 
require_once('api/webserviceKey.php');

parse_str(file_get_contents('php://input'), $post_vars); 

$name_reference =$post_vars["reference"];
$name=$post_vars["name"];
$description=$post_vars["description"];
$price=$post_vars["price"];
$wholesale_price=$post_vars["wholesale_price"];
$reference=$post_vars["reference"];
$quantity=$post_vars["quantity"];
$category=$post_vars["category"];
$active=$post_vars["active"];
$bandera=$post_vars["bandera"];
$description_html=$post_vars["description_html"];
//echo $name.'= $name<p>'.$description.'=description<p>-'.$price.'=price<p>'.$wholesale_price.'=wholesale_price<p>'.$reference.'=reference<p>'.$quantity.'=quantity<p>'.$category.'<p>'.$active.'<p>'.$bandera;
addProducto($name,$description,$price,$wholesale_price,$reference,1,$category,$active,1,$description_html);
//addProducto($name,$price.'',2,1,$reference,1,$category,$active,$bandera);
//addProducto('21313','dfsdfsfs',211545,156454,'13131313'.time(),1,15,1,1);
/** 
  * Funcion para crear un producto.
  * @author Carlos Anselmi <carlosanselmi2@gmail.com>
  * @version 4.1
  * @param $name: (string)
  * @param $description: (string)
  * @param $price: (float)
  * @param $wholesale_price: (float)
  * @param $reference: (string)
  * @param $quantity: (int)
  * @param $category: (int)
  * @param $bandera: (int)
  * @param $description_html: (html)
**/
function addProducto($name,$description,$price,$wholesale_price,$reference,$quantity,$category,$active,$bandera,$description_html){
  /*  verifica si no existe un producto con la misma $reference(codigco del producto)! */
  if ( ltrim(file_get_contents("http://venegangas.com/webservicePrestashop/consulta_producto.php?reference=".$reference))== "si" ) {
    /* incluyendo librerias del webservices de prestashop (api) */ 
      
      $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY,DEBUG);
      $xml = $webService ->get(array('url' => PS_SHOP_PATH . '/api/products?schema=synopsis'));
      $resources = $xml ->children() ->children(); 
    /* Campos del productos */
      unset($resources->manufacturer_name);
      unset($resources->quantity);

      for($i = 0; $i < count($resources->name->language); $i++){
          $resources->name->language[$i] = $name;
          $resources->link_rewrite->language[$i] = $name;
      }
      $resources->active = $active;
      $resources->id_supplier=1;
      $resources->id_manufacturer=1;
      $resources->position_in_category=0;
    /* Valores requeridos obligatoriamente */ 
      $resources->id_tax_rules_group=1;
      $resources->minimal_quantity=1;
      $resources->redirect_type=404;
      $resources->available_for_order=1;
      $resources->show_price=1;
      $resources->ean13=1;
      $resources->position_in_category=0;
      $resources->id_category_default=$category;
    /* Valores del productos */
      $resources->price = $price;
      $resources->reference=$reference;
      $resources->description_short = $description;
      $resources->description = $description_html;
      $resources->wholesale_price=$wholesale_price;
      $resources->associations->categories->category->id=$category;
    /* Añadir el productos */
      try {
        $opt = array('resource' => 'products'); 
        $opt['postXml'] = $xml->asXML(); 
        $xml = $webService->add($opt);
        $xml = $xml->children()->children();
      }catch (PrestaShopWebserviceException $e){ 
        $trace = $e->getTrace();
        if($trace[0]['args'][0] == 404) echo 'Bad ID';
        else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
        else echo 'Other error <br />'.$e->getMessage();
      }
    /* Libreria para añadir cantidad */
    /*  
    */
    set_product_quantity($xml->id,$xml->associations->stock_availables->stock_available->id,0,$quantity);
    /* Añadir las imagenes del producto */
    if ($bandera==1)
	    addImage( $xml->id, $reference );
   echo '1';
  }else
   echo '2';
}

/**
  * A単adir imagenes al producto.
  * @author Carlos Anselmi <carlosanselmi2@gmail.com>
  * @version 4.1
  * @param $xml->id:(int)
  * @param $arrayImages:(ArrayString)
**/
function addImage( $product_id,  $reference ) {
  try {
    $url = PS_SHOP_PATH . '/api/images/products/' . $product_id;
    $key = PS_WS_AUTH_KEY;
    /* Inicializar el Curl */
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:multipart/form-data','Expect:'));
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_POST, true);
      curl_setopt($ch, CURLOPT_USERPWD, $key.':');
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      for ($i=1; $i < 5; $i++) { 
      	$dir='../ml/images/img_'. $reference .'_'.$i.'.jpg';
      	if (file_exists($dir)) {
        	curl_setopt($ch, CURLOPT_POSTFIELDS, array('image' => '@'.$dir));
        	$result = curl_exec($ch);
        }
      }
      for ($i=1; $i < 5; $i++) { 
      	$dir='../ml/images/p_img_'. $reference .'_'.$i.'.jpg';
      	if (file_exists($dir)) {
        	curl_setopt($ch, CURLOPT_POSTFIELDS, array('image' => '@'.$dir));
        	$result = curl_exec($ch);
        }
      }
    /* Cierro el curl */
      curl_close($ch);
  } catch (PrestaShopWebserviceException $e){
    echo 'add_image: Something went wrong: '.$e->getMessage();
  }
}

/**
  * A単adir imagenes al producto.
  * @author Carlos Anselmi <carlosanselmi2@gmail.com>
  * @version 1.5
  * @param $ProductId(int)
  * @param $StokId(int)
  * @param $AttributeId(int)
  * @param $quantity:(int)
**/
function set_product_quantity($ProductId, $StokId, $AttributeId, $quantity){
    $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY,DEBUG);
    $xml = $webService -> get(array('url' => PS_SHOP_PATH . '/api/stock_availables?schema=blank'));
    $resources = $xml -> children() -> children();
    $resources->id = $StokId;
    $resources->id_product = $ProductId;
    $resources->id_product_attribute = 0;
    $resources->id_shop  = 1;
    $resources->id_shop_group  = 0;
    $resources->out_of_stock = 2;
    $resources->quantity=$quantity;
    $resources->depends_on_stock=0;
    try {
      $opt = array('resource' => 'stock_availables');
      $opt['putXml'] = $xml->asXML();
      $opt['id'] = $StokId ;
      $xml = $webService->edit($opt);
    }catch (PrestaShopWebserviceException $ex) {
      echo "<b>Error al setear la cantidad  ->Error : </b>".$ex->getMessage().'<br>';
    }
}
?>