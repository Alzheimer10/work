<?php 
	parse_str(file_get_contents('php://input'), $post_vars); 
	//echo $post_vars["tipo_envio"].'-'.$post_vars["id_pedido"].'-'.$post_vars["metodo_pago"].'<p> NTransferencia -'.$post_vars["NTransferencia"];
	//echo $post_vars["tipo_envio"].'-'.$post_vars["id_pedido"].'-'.$post_vars["metodo_pago"].'<p> NTransferencia -'.$post_vars["NTransferencia"];
 	print_r($post_vars['imagen']);
 ?>