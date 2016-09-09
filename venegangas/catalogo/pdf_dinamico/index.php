<?php ob_start();
	require_once("dompdf/dompdf_config.inc.php");
	$link = mysql_connect('localhost', 'venegang_api', '1990102055a+') or die('No se pudo conectar: ' . mysql_error());
	mysql_select_db('venegang_uvprestashop') or die('No se pudo seleccionar la base de datos');
	$query = "SELECT ps_product.id_product,description,reference,name
	FROM ps_product_lang
	LEFT JOIN ps_product
	ON ps_product_lang.id_product=ps_product.id_product 
	WHERE ps_product.active=1";

	$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
	?>
	<!DOCTYPE html>
	<html>
	<head>
		<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);
			*{
				margin: 0px;
				padding: 0px;
				color: rgb(42, 56, 131);
				font-family: 'Raleway', Arial, sans-serif;
			}
			body{
				margin: 0px auto!important;
				padding: 0px auto!important;
			}
			table > img {
				height: 200px;
				width: 200px;
			}
			table {
				background-color: #fff;
				width: 90%;
				overflow: hidden;
			 	margin: 0px auto!important;
				padding: 0px auto!important;
			}
			h1,h2,h4,h5,p,ul,li{
				text-decoration: none !important;
				/*list-style:none !important;*/
				font-size: 1em !important;
				margin: 0px !important;
				padding: 0px !important;
			}
			h3{
				-webkit-box-shadow: 0px 10px 0px 0px rgb(42, 56, 131);
				-moz-box-shadow: 0px 10px 0px 0px rgb(42, 56, 131);
				box-shadow: 0px 10px 0px 0px rgb(42, 56, 131);
			}
			th{
				border-bottom: solid;
				border-color: blue;

			}
			.description{
				font-size: 0.5em !important;
			}
			.td-bot{
				max-height: 25px; 
				min-height: 25px; 
				overflow: hidden;
				font-size: 1em;
			}
		</style>
	</head>
	<body>
		<img src="portada.png" width="100%" height="100%">
		<TABLE>
		<?php 
			while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
				$id_product=$line['id_product'];
				$reference=$line['reference'];
				$name=$line['name'];
				$description=$line['description'];
				$query= "SELECT id_image FROM ps_image WHERE id_product=".$id_product;
				$result_image = mysql_query($query) or die('Consulta fallida: '. mysql_error());
				$id_url_img = mysql_fetch_array($result_image, MYSQL_ASSOC)['id_image'];
				$url_img="/".$id_url_img."-small_default.jpg";

				while($id_url_img != 0){ //Ahora vemos por que usamos el while.
					$aux= $id_url_img % 10;
					$url_img='/'.$aux.$url_img;
					$id_url_img = intval($id_url_img/10); 
				}
 
			echo '
			  <tr>
			    <th colspan="2"><h3 class="td-bot"  style="text-align: center; background-color: #FFDD18; color: blue">'.$name.' ('.$reference.') - </h3>	</th>
			  </tr>
			  <tr style="max-height: 100px;overflow: hidden;">
			    <td><img src="http://venegangas.com/venegangas/img/p'.$url_img.'" width="200px" height="200px"></td>
			    <td ><h3 style="text-align: center; max-height: 200px;overflow: hidden;">'.$description.'</h3>	</td>
			  </tr>
				';
			}
		 ?>
			</TABLE>
		<img src="final.png" width="100%" height="100%">
	</body>
	</html>
<?php  
# Instanciamos un objeto de la clase DOMPDF.
	spl_autoload_register('DOMPDF_autoload');
	$dompdf = new DOMPDF();
	$paper_size = array(0,0,701,541);
	$dompdf->set_paper($paper_size);
	$dompdf ->load_html(ob_get_clean());
	$dompdf ->render();
	$pdf =$dompdf->output();
	$filename = "index.pdf";
# Enviamos el fichero PDF al navegador.
	$dompdf ->stream($filename, array("Attacment"=>0));
?>