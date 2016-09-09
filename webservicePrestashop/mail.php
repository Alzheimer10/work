<?php 
$para      = 'carlosanselmi2@gmail.com';
$titulo    = 'El título';
$mensaje   = 'Hola';
$cabeceras = 'From: carlosanselmi2@gmail.com' . "\r\n" .
    'Reply-To: mail.php' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);
 ?>