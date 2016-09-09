
<?php 
    $reference=$_GET["reference"];
    $link = mysql_connect('localhost', 'venegang_api', '1990102055a+') or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('venegang_uvprestashop') or die('No se pudo seleccionar la base de datos');
    $result = mysql_query('SELECT * FROM ps_product WHERE reference="'.$reference.'"') or die('Consulta fallida:' . mysql_error());
   if ($rows=mysql_fetch_array($result)){
    echo "no";
   }else{
      echo "si";
   }
?>