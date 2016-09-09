<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
{capture name=path}Mis pedidos{/capture}
<!-- {$cliente['email']|replace:"@":""}
{$cliente['email']|substr:1} -->
<!-- {1212111|number_format:2:",":"."} -->
{$smarty.post.archivo}
	<div class="col-xs-12 col-sm-12 col-lg-12 registromercadolibre">
	<div class="container">
		<h1 class="page-heading" style="background: none!important; margin: 0px!important; margin-bottom: 5px!important; padding: 0px!important;">Pedidos de Mercadolibre</h1>
		<p class="info-account">Bienvenido a su cuenta. Aquí puede gestionar toda su información de sus pedidos de Mercadolibre</p>
	</div>
		<div class="box">
			{if isset($smarty.get.success) }<div class="alert alert-success"><b>El {$smarty.get.success} se añadio correctamente.</b></div>{/if}
			{if isset($smarty.post.success) }<div class="alert alert-success"><b>{$smarty.post.success}</b></div>{/if}
			{if isset($back) && preg_match("/^http/", $back)}{assign var='current_step' value='login'}{include file="$tpl_dir./order-steps.tpl"}{/if}
			{include file="$tpl_dir./errors.tpl"}
					<div class="row">
				<!-- START-ADD-PEDIDO -->
					<h1 class="add_pedido_title list-group-item active" id="add_pedido_title" style="cursor: pointer;"> <i class="icon-plus"></i> Añadir Mi Nuevo Pedido</h1>
					<form action="{$link->getPageLink('registromercadolibre', true)|escape:'html':'UTF-8'}" method="post" id="add_pedido_form" class="add_pedido_form std clearfix {if isset($customer)} none{/if}">
						<!-- START-INFO-PEDIDO -->
							<div class="col-xs-12 col-sm-12 col-lg-12 ">
								<div class="box">
									<div class="row">
											<h3 id="info_pedido_title">INFORMACION DEL PEDIDO</h3>
										<!-- START-CODIGO_DEL_PEDIDO -->
											<div class="col-xs-12 col-md-2 col-lg-1">
												<div class="form-group">
													<img src="" id="imagenProducto">
												</div>
											</div>
										<!-- START-CODIGO_DEL_PEDIDO -->
											<div class="col-xs-12 col-md-4 col-lg-3">
												<div class="form-group">
													<label for="Npedido">Nro.Pedido<sup> (*)</sup></label>
													<input type="text" maxlength="10"  placeholder="Numero del Pedido" class="Npedido is_required validate form-control" data-validate="isNpedido" id="Npedido" name="Npedido"  value="{if isset($smarty.post.Npedido)}{$smarty.post.Npedido|stripslashes}{/if}" title="Codigo del pedido del producto de MercadoLibre" />
												</div>
											</div>
										<!-- START-CODIGO_DEL_PRODUCTO -->
											<div class="col-xs-12 col-md-6 col-lg-3">
												<div class="form-group">
													<label for="CodigoProducto">Producto<sup> (*)</sup></label>
													<input type="text" maxlength="" disabled="false"  class="CodigoProducto is_required form-control cursor-help vaciar" data-validate="" id="CodigoProducto" name="CodigoProducto"  value="{if isset($smarty.post.CodigoProducto)}{$smarty.post.CodigoProducto|stripslashes}{/if}" title="Codigo del producto de MercadoLibre" />
												</div>
											</div>
											<input type="text"  class="none" id="cantidadNone" value="" />
										<!-- START-CANTIDAD-DE-PRODUCTOS -->
											<div class="col-xs-12 col-md-4 col-lg-3">
												<div class="form-group">
													<label for="CantidadProductos">Cantidad de Producto<sup> (*)</sup></label>
													<input type="number" maxlength="10"  placeholder="Numero del Pedido" class="isNumero is_required validate form-control vaciar" data-validate="isNumero" id="CantidadProductos" name="CantidadProductos"  value="{if isset($smarty.post.CantidadProductos)}{$smarty.post.CantidadProductos|stripslashes}{else}1{/if}" title="Cantidad de productos a pagar" />
												</div>
											</div>
										<!-- START-CANTIDAD-A-PAGAR -->
											<div class="col-xs-12 col-md-6 col-lg-2">
												<div class="form-group">
													<label for="MontoTotal">Monto a Pagar</label>
													<input type="text"  readonly="readonly"  placeholder="Canditad a Pagar" class="MontoTotal is_required validate form-control cursor-help vaciar" data-validate="isNumero" id="MontoTotal" name="MontoTotal" />
													<!-- <span class="input-group-addon">.00 Bsf</span> -->
												</div>
											</div>
										<!-- END-CANTIDAD-A-PAGAR -->
									</div>
								</div>
							</div>
						<!-- START-INFO-PERSONAL -->
							<div class="datosInformacion none">
							{if !isset($smarty.post.customer_new)}
								<!-- START-CONTACTO -->
									<div class="col-xs-12 col-sm-12 col-lg-12 ">
										<div class="box">
											<div class="row">
												<h3 id="info_pedido_title">INFORMACION DE CONTACTO</h3>
												<div class="col-xs-12 col-sm-12 col-lg-8">
													<div class="row">
														<div class="col-xs-12 col-sm-12 col-lg-12">
															<!-- START-APELLIDO -->
																<div class="col-xs-12 col-sm-4 col-lg-3">
																	<div class="form-group">
																		<label for="Apellido">Apellido<sup> (*)</sup></label>
																		<input type="text" maxlength="10"  placeholder="Numero del Pedido" class="Apellido is_required validate form-control vaciar" data-validate="isString" id="Apellido" name="Apellido"  value="{if isset($smarty.post.Apellido)}{$smarty.post.Apellido|stripslashes}{/if}" title="Apellido del cliente" />
																	</div>
																</div>
															<!-- END-APELLIDO -->
															<!-- END-NOMBRE -->
																<div class="col-xs-12 col-sm-4 col-lg-3">
																	<div class="form-group">
																		<label for="Nombre">Nombre<sup> (*)</sup></label>
																		<input type="text" maxlength="10"  placeholder="Numero del Pedido" class="Nombre is_required validate form-control vaciar" data-validate="isString" id="Nombre" name="Nombre"  value="{if isset($smarty.post.Nombre)}{$smarty.post.Nombre|stripslashes}{/if}" title="Nombre del cliente" />
																	</div>
																</div>
															<!-- END-NOMBRE -->
															<!-- END-SEUDONIMO-ML -->
																<div class="col-xs-12 col-sm-4 col-lg-3">
																	<div class="form-group">
																		<label for="seudonimo_ml">Seudonimo de Mercadolibre<sup> (*)</sup></label>
																		<input type="text" placeholder="" disabled="false"  class="seudonimo_ml is_required form-control vaciar" id="seudonimo_ml" name="seudonimo_ml"  value="{if isset($smarty.post.seudonimo_ml)}{$smarty.post.seudonimo_ml|stripslashes}{/if}" title="Seudonimo del Mercadolibre" />
																	</div>
																</div>
															<!-- END-SEUDONIMO-ML -->
															<!-- END-EMAIL -->
																<div class="col-xs-12 col-sm-4 col-lg-3">
																	<div class="form-group">
																		<label for="Nombre">Correo Electronico<sup> (*)</sup></label>
																		<input type="text" required="required" placeholder="Correo Electronico" class="email is_required validate form-control vaciar" id="email" name="email" data-validate="isEmail" value="{if isset($smarty.post.email)}{$smarty.post.email|stripslashes}{/if}" title="Correo electronico " />
																	</div>
																</div>
															<!-- END-EMAIL -->
														</div>
														<!-- START-CI-RIF -->
															<div class="col-xs-12 col-sm-12 col-lg-12">
																<!-- END-C.I -->
																	<div class="col-xs-12 col-sm-4 col-lg-6">
																		<div class="form-group">
																			<label for="cedula">C.I<sup></sup></label>
																			<input type="text"  maxlength="8" placeholder="Cedula de Identidad" data-validate="isCI"  required="required" class="CI form-control is_required validate vaciar" id="CI" name="CI"  value="{if isset($smarty.post.CI)}{$smarty.post.CI|stripslashes}{/if}" title="Cedula de Identidad" />
																		</div>
																	</div>
																	<!-- 
																		
																	-->
																<!-- END-C.I -->
																<!-- END-RIF -->
																	<div class="col-xs-12 col-sm-4 col-lg-6">
																		<div class="form-group">
																			<label for="RIF">RIF<sup></sup></label>
																			<input type="text"  maxlength="9" placeholder="RIF" data-validate="isRIF" class="RIF form-control validate vaciar" id="RIF" name="RIF"  value="{if isset($smarty.post.RIF)}{$smarty.post.RIF|stripslashes}{/if}" title="RIF" />
																		</div>
																	</div>
																<!-- END-RIF -->
															</div>
														<!-- END-CI-RIF -->
													</div>
												</div>
												<div class="col-xs-12 col-sm-12 col-lg-4">
													<!-- START-INFO-PEDIDO -->
														<div class="row" style="margin-left: 15px; margin-right: 15px;">
														<!-- START-INFO-DIRECCION -->
															<div class="col-xs-8 col-sm-8 col-lg-8 none-pm">
																	<label>Estado <sup> (*)</sup></label>
																       <select id="estados" name="estados" required="true" class="form-control" >
																           <option value="0">--</option>
																       </select>
																	<label>Ciudad <sup> (*)</sup></label>
																        <select id="municipios" name="municipios" required="true" class="form-control">
																            <option value="0">--</option>
																        </select>
															</div>
														<!-- START-INFO-TELEFONO -->
															<div class="col-xs-4 col-sm-4 col-lg-4" style="padding-right:0px !important">
																<div class="form-group">
																	<label for="TelefonoContacto">Telefono(1)<sup> (*)</sup></label>
																	<input type="text" maxlength="12" placeholder="Telefono" data-validate="isTelefono" class="is_required validate  form-control none-p vaciar" required="true" id="TelefonoContacto" name="TelefonoContacto"  value="{if isset($smarty.post.telefono)}{$smarty.post.telefono|stripslashes}{/if}"  />
																</div>
																<div class="form-group">
																	<label for="TelefonoAdicional">Telefono(2)</label>
																	<input type="text" maxlength="12" placeholder="Telefono" data-validate="isTelefono" class="is_required validate account_input form-control none-p vaciar" id="TelefonoAdicional" name="TelefonoAdicional"  value="{if isset($smarty.post.telefonoA)}{$smarty.post.telefonoA|stripslashes}{/if}"  />
																</div>
															</div>
														</div>
													<!-- STAR-INFO-DIRECCION -->
														<div class="row" style="margin-left: 15px; margin-right: 15px;">
															<div class="col-xs-12 col-sm-12 col-lg-12 none-pm">
																<div class="form-group">
																	<label for="Direccion">Direccion Completa<sup> (*)</sup></label>
																	<textarea  type="text" rows="1" class="is_required validate account_input form-control vaciar" data-validate="isDireccion" required="true" id="Direccion" name="Direccion">{if isset($smarty.post.direccion)}{$smarty.post.direccion|stripslashes}{/if}</textarea>
																</div>
															</div>
														</div>
												</div>
											</div>
										</div>
									</div>
								<!-- END-CONTACTO -->
							{/if}
								<!-- START-ENVIO -->
									<div class="col-xs-12 col-sm-12 col-lg-12 ">
										<div class="box">
											<div class="row">
												<div class="col-xs-12 col-sm-12 col-lg-6">
													<div class="">
														<div class="row">
															<h3 id="info_pedido_title">INFORMACION DE ENVIO/RETIRO</h3>
															<div class="col-xs-12 col-sm-12 col-lg-12">
																<div class="col-xs-12 col-sm-12 col-lg-12">
																	<div class="">
																		<div class="row">
																			<div class="col-xs-12 col-sm-12 col-lg-12">
																				<label><input type="checkbox" required="true" name="tienda"  id="tienda" >Retiro en Tienda</label>
																				<label><input type="checkbox"  name="envio"  id="envio" >Direccion de Envio</label>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-xs-12 col-sm-12 col-lg-12">
																	<div class="tienda_form none" id="tienda_form">
																		<div class="">
																		<div class="row">
																			<section id="block_contact_infos" class="col-lg-12 col-xs-12 col-sm-12">
																				<div>
																					<h3>Información sobre la tienda</h3>
																					<ul class="">
																						<li> <label><i class="icon-map-marker"></i> Venegangas.com, Centro Comercial FreeMarket Valencia, Edo. Carabobo</li>
																						<li> <label><i class="icon-phone"></i> Telefono: <span>0241-5154101</span></label></li>
																						</ul>
																				</div> 
																				</section>
																		</div>
																		</div>
																	</div>
																	<div class="envio_form none" id="envio_form">
																		<div class="box">
																			<div class="col-xs-12 col-sm-12 col-lg-12">
																			    <label>
																					<input type="checkbox" id="info_direccion_check"  name="info_direccion_check">
																			    	¿Desea que se le envie en la misma direccion de contacto?
																			    </label>
																			</div>
																			<div class="col-xs-12 col-sm-12 col-lg-12">
																				<div class="direccionEnvio">
																					<!-- START-INFO-PEDIDO -->
																					<div class="">
																						<div class="row">
																							<div class="col-xs-12 col-sm-12 col-lg-12">
																								<div class="col-xs-6 col-sm-13 col-lg-6">
																									<div class="form-group">
																										<label>Ciudad <sup> (*)</sup></label>
																										<select id="estadosEnvio" name="estadosEnvio" class="form-control">
																										   <option value="0">--</option>
																										</select>
																									</div>
																								</div>
																								<div class="col-xs-6 col-sm-13 col-lg-6">
																									<div class="form-group">
																										<label>Estado <sup> (*)</sup></label>
																										<select id="municipiosEnvio" name="municipiosEnvio" class="form-control">
																											<option value="0">--</option>
																										</select>
																									</div>
																								</div>
																							</div>
																						</div>
																						<div class="row">	
																							<div class="col-xs-12 col-sm-12 col-lg-12">
																								<div class="form-group">
																									<label for="direccionEnvio">Direccion Completa<sup> (*)</sup></label>
																									<textarea  data-validate="isDireccion" type="text" rows="1" class="is_required validate account_input form-control vaciar" id="direccionEnvio" name="direccionEnvio"  value="">  </textarea>
																								</div>
																							</div>
																						</div>
																					</div>
																					<!-- END-INFO-DIRECCION -->
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="col-xs-12 col-sm-12 col-lg-6">
													<div class="row">
														<h3 id="info_pedido_title">METODO DE PAGO</h3>
														<div class="col-xs-12 col-sm-6 col-lg-6">
															<label>Forma de Pago</label>
															<select id="metodoPago" name="metodoPago"  class="form-control" >
															    <option value="0">--</option>
															    <option value="1">Transferencia</option>
															    <option value="2">Deposito</option>
															    <option value="3">Por Tienda</option>
															    <option value="4">Tarjeta de Credito</option>
															</select>
														</div>
														<div class="col-xs-12 col-sm-6 col-lg-6 Bancos none">
															<label>Bancos </label>
															<select id="Bancos" name="Bancos"  class="form-control">
															    <option value="0">--</option>
															    <option value="1">Fondo común</option>
															    <option value="2">Banesco</option>
															    <option value="3">Mercantil</option>
																<option value="4">Venezuela</option>
															</select>
														</div>
													</div>
													<div class="row">
														<div class="col-xs-12 col-sm-12 col-lg-12">
															<label id="aNombre" class="metodoBanco"></label>
															<label id="metodoBanco" class="metodoBanco"></label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								<!-- END-ENVIO -->
								<!-- START-BUTTON-SUBMIT -->
									<div class="col-xs-12 col-sm-12 col-lg-12 ">
										<div class="box">
											<div class="row">
												<div class="col-xs-12 col-sm-12 col-lg-12 ">
													<div class="submit clearfix">
														<button type="submit" name="SubmitPedido" id="SubmitPedido" class="SubmitPedido btn btn-default button button-medium">
														<span>Agregar Pedido</span></button>
													</div>
												</div>
											</div>
										</div>
									</div>
								<!-- END-BUTTON-SUBMIT -->
							</div>
					</form>
			</div>
			<div class="row">
				<!-- START-ADD-PEDIDO -->
					<div class="col-xs-12 col-sm-12 col-lg-12 " ><div class="box" style="border: none"></div></div></div>
					<!-- START-MY-PEDIDOS -->
						<div class="row">
							<h1 class="my_pedidos_title list-group-item active" id="my_pedidos_title" style=" {if !isset($smarty.post.poseePedidos)}background: #777777 !important;cursor: no-drop{else}cursor: pointer;{/if}"><i class="icon-shopping-cart"></i> Mis Pedidos	
							</h1>
							<div class="mis_pedidos_div">
								{foreach $TodosPedidos as $row}
									<div class="box my_pedidos_form ">
										{if !isset($customer)}<div class="alert alert-danger"><p>No posee pedidos</p></div>{/if}
										<form action="{$link->getPageLink('registromercadolibre', true, NULL, "back=$back")|escape:'html':'UTF-8'}" method="post" id="my_pedidos_form" enctype="multipart/form-data" class="std clearfix {if !isset($customer)}none{/if}">
											<!-- START-PEDIDO -->
												<div class="row">
													<div class="col-lg-8 col-sm-12 col-xs-12">
														<!-- START-IMAGEN_DEL_PEDIDO_A_PAGAR -->
															<div class="col-xs-2 col-sm-2 col-lg-1">
																<div class="form-group">
																	<img src="{$row['thumbnail']}">
																</div>
															</div>
														<!-- START-CODIGO_DEL_PEDIDO_A_PAGAR -->
															<div class="col-lg-2  col-md-4 col-xs-10">
																<label for="Npedido">Nro. Pedido<sup>*</sup></label>
																<input type="text" class="is_required validate form-control"  style="cursor:copy; margin-bottom: 4px" readonly="readonly" id="NpedidoPagar" name="Npedido"  value="{$row['id_pedido']}" />
															</div>
														<!-- START-CANTIDAD_A_PAGAR -->
															<div class="col-lg-1  col-md-3 col-xs-10">
																<label for="CantidadProductoPagar">Cantidad</label>
																<input type="text"  class="is_required validate form-control" style="cursor:copy; margin-bottom: 4px" readonly="readonly" id="CantidadProductoPagar" name="CantidadProductoPagar"  value="{$row['cantidad_pedidos']}"  />
															</div>
														<!-- START-MONTO_A_PAGAR -->
															<div class="col-lg-2 col-md-3 col-xs-6">
																<label for="MontoTransaccioon">Monto Total</label>
																<input type="text" class="is_required validate form-control" style="cursor:copy; margin-bottom: 4px" id="MontoTransaccion" name="MontoTransaccion" disabled="none" value="{$row['monto']*$row['cantidad_pedidos']}.Bsf"  />
															</div>
														<!-- START-DESCRIPCION-DEL-PRODUCTO -->
																	<div class="col-lg-4 col-md-12 col-xs-6">
																		<label for="descripcionProductoPagar">Descripcion Del Producto</label>
																		<input type="text" class="is_required validate form-control" style="cursor:copy; margin-bottom: 4px" id="descripcionProductoPagar" name="descripcionProductoPagar" disabled="none" value="{$row['item_title']}"  />
																	</div>
														<!-- START-BOTONES-ADD-SER-PAGO -->
																{if $row['estado']!=3}
																	<div class="col-lg-2 col-xs-6" style="	padding: 0px !important; margin: 0px auto!important;">
																		{if $row['estado']==1}
																		<!-- START-PAGO -->
																			<ul class="step clearfix AddPago cursor-pointer">
																		   		<li class="step_current first" style="text-align: center; width: 100%!important;"><span style='font-size: 100%!important'>Agregar Pago</span></li>
																			</ul>
																		<!-- END-PAGO -->
																		 {else}
																		<!-- START-MODIFICAR-PAGO -->
																			<ul class="step clearfix AddPago cursor-pointer">
																		   		<li class="step_current first" style="text-align: center; width: 100%!important;"><span style='font-size: 100%!important'>Modificar Pago</span></li>
																			</ul>
																		<!-- END-MODIFICAR-PAGO -->
																		 {/if}
																	</div>

																{else}
																	<div class="col-lg-2 col-xs-6" style="	padding: 0px !important; margin: 0px auto!important;">
																		<h4 style="text-align: center; background: #FFDD18">Compra finalizada</h4>
																	</div>
																{/if}
													</div>
													<!-- START-ESTADOS-PEDIDO -->
														<div class="col-lg-4 col-xs-6">
															<style type="text/css">
																.step  li  span{
																	padding-left: 0px !important;
																	font-size: 120% !important;
																}
															</style>
															<ul class="step clearfix " id="order_step">
															   	{if $row['estado']==1}	
															   		<li class="step_current first" style="text-align: center; width: 30%!important;"><span style='font-size: 100%!important'>Pedido</span></li>
															   		<li id="step_end" class="step_todo last" style="text-align: center;  width: 70%!important"> <span style='font-size: 100%!important'>Esperando Pago</span></li>
															   	{elseif $row['estado']==2}
															   		<li class="step_current second" style="text-align: center; width: 30%!important;"><span style='font-size: 100%!important'>Pago</span></li>
															   		<li id="step_end" class="step_todo last" style="text-align: center;  width: 70%!important;"><span style='font-size: 100%!important'>Esperando Verificando</span></li>
															   	{elseif $row['estado']==3}
															   		{if $row['tipo_envio']==1}
															   			<li id="step_end" class="step_todo last" style="text-align: center;  width: 100%!important;"><span>Retire el producto</span></li>
															   		{else}
															   			<li id="step_end" class="step_todo last" style="text-align: center;  width: 100%!important;"><span>Se le ha enviado el producto</span></li>
															   		{/if}
															   	{/if}
															</ul>	
														</div>
												</div>
											{if $row['estado']!=3}
											<!-- START-PAGO-PEDIDO -->
												<div class="col-lg-12 pago none" style="margin-top: 6px">
													<div class="box">
														<h3>Enviar Pago</h3>
														<div class="row">
															<div class="col-lg-12">
														 		<div class="required form-group">
																	<div class="row">
																		<div class="col-lg-3">
																		<label>Metodo de pago<sup> (*)</sup></label>
																			<select  name="selectPago"  required="true" class="is_required form-control selectPago" id="selectPago">
																				<option value="" ></option>
																				<option value="1"  id="Deposito">Deposito</option>
																				<option value="2"  id="Transferencia">Transferencia</option>
																				<option value="3"  id="Tienda">Tienda</option>
																			</select>
																		</div>
																		<div  class="col-lg-9 col-sm-12 camposRequeridos none">
																			<div class="col-lg-6 col-sm-6">
																				<div class="form-group">
																					<label for="passwd">Numero de Transferencia/Deposito<sup> (*)</sup></label>
																					<input type="text" maxlength="20" class="form-control is_required validate" id="NTransferencia" name="NTransferencia"  data-validate="isNTransferencia"/>
																					<span class="form_info">Ingrese correctamente el numero de transferencia</span>
																				</div>
																			</div>
																			<div class="col-lg-6 col-sm-6">
																				<label for="ArchivoAdjunto">Comprobante Transacción/Deposito</label>
																				<input type="file" name="ArchivoAdjunto"  id="ArchivoAdjunto"/>
																				<span class="form_info">Si posee el comprobante de la Transferencia/Deposito</span>
																			</div>
																		</div>
																		<!-- PAGO POR TIENDA -->
																		<div class="col-lg-9 tipoPago tiendaPago none" >
																			<div class="col-lg-12">
																				<label>Direccion de la tienda<sup>*</sup></label>
																				<input type="text" class=" form-control" value="Valencia, Carabobo. Valencia-C.C Freemarket Local E-24, Planta Baja, Veneganga" name="Tienda" id="Tienda" />
																			<!-- 	<span class="form_info">{l s='(Five characters minimum)'}</span> -->
																			</div>
																		</div>
																	</div>
																	<div class="row none selectEnvio tipoPago">
																		{if $row['tipo_envio']!=1}
																		<div class="col-lg-3">
																		<label>Metodo de Envio<sup> (*)</sup></label>
																			<select id="selectEnvio"  name="selectEnvio" class="is_required form-control">
																				<option value="" >-</option>
																				<option value="1"  id="">MRW</option>
																				<option value="2"  id="">RETIRO TIENDA</option>
																				<option value="3"  id="">ZOOM</option>
																				<option value="4"  id="">MOTORIZADO</option>
																				<option value="5"  id="">TEELCA</option>
																			</select>
																		</div>
																		{/if}
																	</div>
																</div>											
															</div>
														</div>
														<div class="submit clearfix" style="margin-top: 20px">
															<button type="submit" name="SubmitPago" id="SubmitPago" class="btn btn-default button button-medium">
															<span>Agregar Pago</span></button>
														</div>
													</div>
												</div>
											{/if}
										</form>
									</div>
								{/foreach}
							</div>
						</div>
			</div>
		</div>
	<!-- END-CONTACTO -->
	</div>

<style type="text/css" media="screen">
	.correcto{
    	background: url(http://venegangas.com/venegangas/themes/default-bootstrap/css/../img/icon/form-ok.png) 98% 5px no-repeat #ddf9e1 !important;
    	border: 1px solid #46a74e !important;
	}
	.incorrecto{
		border: 1px solid #f13340 !important;
    	background: url(http://venegangas.com/venegangas/themes/default-bootstrap/css/../img/icon/form-error.png) 98% 5px no-repeat #fff1f2 !important;
	}
	.footer{
		display: table-row!important;
	}
	.body{
		display: table!important;
	}
	.form-group {
		margin-bottom: 0px !important;
	}
	.numero[type=number]::-webkit-outer-spin-button,.numero[type=number]::-webkit-inner-spin-button {
	    -webkit-appearance: none;
	}
</style>
<script>
	$(document).ready(function() {
	/* ----  START-DESPLIEGUES ---- */
	    $('.cat-title').click(function() {
	    	$('.sf-menu').toggle("slow");
	    });

	    $('.alert').click(function() {
	        $('.alert').toggle("slow");
	    });

	    $('#add_pedido_title').click(function() {
	    	$('.pago').hide("slow");
	        $('#add_pedido_form').toggle("slow");
	        $('.my_pedidos_form').hide();
			$('html,body').animate({
			    scrollTop: $('#add_pedido_title').offset().top
			}, 1000);
	    });

	    $('#my_pedidos_title').click(function() {
			/*if ($('#my_pedidos_title').is(":visible")){
	    		$('#my_pedidos_title').children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
	    	}else{
	    		$('#my_pedidos_title').children('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
	    	}*/
	        $('.my_pedidos_form').toggle("slow");
	        $('#add_pedido_form').hide();
			$('html,body').animate({
			    scrollTop: $('#my_pedidos_title').offset().top
			}, 1000);
	    });	 
	/* ----  END-DESPLIEGUES ---- */
		var sestados = '<option value=""></option>';
		$(estados).each(function(i){
			var id_estado = this.id_estado+'_'+this.estado;
			sestados += '<option value="'+id_estado+'">'+this.estado+'</option>';
		});

		$('#estados').html(sestados);

		$('#estados').change(function(){ // evento que al ser modificado el select estados es llamado
			var estado = $('#estados').val(); //obtenemos el estado seleccionado
			if (estado!=0){
				$('#estados').removeClass('incorrecto').addClass('correcto');
				estado = estado.substring(0,estado.indexOf('_'));
				var pmunicipios = $.grep(municipios,function(n,i){
					return (n.id_estado == estado); 
				}); //filtramos por estado
				var smunicipios = '<option value=""></option>';
				$(pmunicipios).each(function(i){ //recorremos cada uno de los municipios previamente filtrados
					var id_municipio = this.id_municipio+'_'+this.municipio;
					smunicipios += '<option value="'+id_municipio+'">'+this.municipio+'</option>'; //vamos  creando el select
				});
				$('#municipios').html(smunicipios); //el html generado se asigna al select de municipios
				$('#parroquias').html('');
			}else
				$('#estados').removeClass('correcto').addClass('incorrecto');
		});

		$('#municipios').change(function(){
			var estado = $('#estados').val();
			estado = estado.substring(0,estado.indexOf('_'));
			var municipio = $('#municipios').val();
			if (municipio!=0) {
				$('#municipios').removeClass('incorrecto').addClass('correcto');
				municipio = municipio.substring(0,municipio.indexOf('_'));
				var pparroquias = $.grep(parroquias,function(n,i){
					return (n.id_estado == estado && n.id_municipio == municipio ); 
					alert(estado +'_'+municipio);
				});
				var sparroquias = '<option value=""></option>';
				$(pparroquias).each(function(i){
					var id_parroquia = this.id_parroquia+'_'+this.parroquia;
					sparroquias += '<option value="'+id_parroquia+'">'+this.parroquia+'</option>';
				});
				$('#parroquias').html(sparroquias);
			}else
			$('#municipios').removeClass('correcto').addClass('incorrecto');
		});

	    $(".AddPago").click(function() {
	    	var $div = $(this);
			//if ($(this).parent().parent().parent().parent().children('.pago').is(":visible")) {
	        	$($div).parent().parent().parent().parent().find('.pago').toggle("slow");
	    });	

		$('#estadosEnvio').html(sestados);

		$('#estadosEnvio').change(function(){ // evento que al ser modificado el select estados es llamado
			var estado = $('#estadosEnvio').val(); //obtenemos el estado seleccionado
			if (estado!=0){
				$('#estadosEnvio').removeClass('incorrecto').addClass('correcto');
				estado = estado.substring(0,estado.indexOf('_'));
				var pmunicipios = $.grep(municipios,function(n,i){
					return (n.id_estado == estado); 
				}); //filtramos por estado
				var smunicipios = '<option value=""></option>';
				$(pmunicipios).each(function(i){ //recorremos cada uno de los municipios previamente filtrados
					var id_municipio = this.id_municipio+'_'+this.municipio;
					smunicipios += '<option value="'+id_municipio+'">'+this.municipio+'</option>'; //vamos  creando el select
				});
				$('#municipiosEnvio').html(smunicipios); //el html generado se asigna al select de municipios
				$('#parroquiasEnvio').html('');
			}else
				$('#estadosEnvio').removeClass('correcto').addClass('incorrecto');
		});

		$('#municipiosEnvio').change(function(){
			var estado = $('#estadosEnvio').val();
			estado = estado.substring(0,estado.indexOf('_'));
			var municipio = $('#municipiosEnvio').val();
			if (municipio!=0){
				$('#municipiosEnvio').removeClass('incorrecto').addClass('correcto');
				municipio = municipio.substring(0,municipio.indexOf('_'));
				var pparroquias = $.grep(parroquias,function(n,i){
					return (n.id_estado == estado && n.id_municipio == municipio ); 
					alert(estado +'_'+municipio);
				});
				var sparroquias = '<option value=""></option>';
				$(pparroquias).each(function(i){
					
					var id_parroquia = this.id_parroquia+'_'+this.parroquia;
					sparroquias += '<option value="'+id_parroquia+'">'+this.parroquia+'</option>';
				});
				$('#parroquiasEnvio').html(sparroquias);
			}else
				$('#municipiosEnvio').removeClass('correcto').addClass('incorrecto');
		});

	/* ENVIO O TIENDA! */
		$("#envio").click(function (){
			if ($('#envio').prop("checked")) {
		    	$('#tienda').prop("checked", false);
			   	$('#tienda').attr('required',false);
			   	$('#estadosEnvio').attr('required',true);
				$('#municipioEnvio').attr('required',true);
			   	$('#direccionEnvio').attr('required', true);
		    }
			$("#tienda_form").hide();
			$("#envio_form").show();
		});

		$("#tienda").click(function (){
			if ($('#tienda').prop("checked")){
		    	$("#envio").prop("checked", false);
			   	$('#envio').attr('required',false);
			   	$("#info_direccion_check").attr('required',false);
			   	$('#estadosEnvio').attr('required',false);
				$('#municipioEnvio').attr('required',false);
			   	$('#direccionEnvio').attr('required',false);
			}
			$("#envio_form").hide();
			$("#tienda_form").show();
		});

		$("#info_direccion_check").click(function(){
			if ($(this).prop("checked")){
			   	$('#estadosEnvio').attr('required',false);
				$('#municipioEnvio').attr('required',false);
			   	$('#direccionEnvio').attr('required',false);
			}
			$(".direccionEnvio").toggle();
		});

	/* METODO DE PAGO PARA EL PEDIDO */
		$(".selectPago").change(function () {
			var $form = $(this).parent().parent();
			$($form).find(".camposRequeridos").hide();
		    $($form).find(".tipoPago").hide();
		    $($form).parent().find(".selectEnvio").show();
		    $($form).parent().find("#selectEnvio").attr("required",  true);
		    $($form).find("#NTransferencia").attr("required", true);
		    	switch ( $( this ).val()){
		    		case '1':
		    			$($form).find(".deposito").show();
		    			$($form).find(".camposRequeridos").show();
		    		break;
		    		case '2':
		    			$($form).find(".transferencia").show();
		    			$($form).find(".camposRequeridos").show();
		    		break;
		    		case '3':
		    			$($form).find(".tiendaPago").show();
		    			$($form).find("#NTransferencia").attr("required", false);
		    		break;
		    		default:
		    			$($form).parent().find(".selectEnvio").hide();
		    			$($form).parent().find("#selectEnvio").attr("required", false);
		    			$($form).find("#NTransferencia").attr("required", false);
		    		break;
		    	}
		});

	/* CANTIDAD DE PRODUCTOS */
		$('#CantidadProductos').change(function () {
			$('#MontoTotal').val( $('#CantidadProductos').val() * $('#cantidadNone').val()  );
		});

	/* MERODO DE PAGO AL PAGAR */
		$( "#metodoPago" ).change(function () {
		    	switch ( $( "#metodoPago option:selected" ).val()){
		    		case '0':
		    			$(".Bancos").hide();
		    			$(".metodoBanco").hide();
						$(this).removeClass('incorrecto').addClass('correcto');
		    		break;
		    		case '1':
		    			$(".Bancos").show();
		    			$(".metodoBanco").show();
						$(this).removeClass('incorrecto').addClass('correcto');
		    		break;
		    		case '2':
		    			$(".Bancos").show();
		    			$(".metodoBanco").show();
						$(this).removeClass('incorrecto').addClass('correcto');
		    		break;
		    		case '3':
		    			$(".Bancos").hide();
		    			$(".metodoBanco").hide();
						$(this).removeClass('incorrecto').addClass('correcto');
		    		break;
		    		case '4':
		    			$(".Bancos").hide();
		    			$(".metodoBanco").hide();
						$(this).removeClass('incorrecto').addClass('correcto');
		    		break;
		    		default:
		    			$(".Bancos").hide();
		    			$(".metodoBanco").hide();
						$(this).removeClass('correcto').addClass('incorrecto');
		    		break;
		    	}
		});

	/* SELECCION DE BANCOS */
		$("#Bancos").change(function () {
		    switch ( $( "#Bancos option:selected" ).val()){
		    	case '0':
					$(this).removeClass('correcto').addClass('incorrecto');
		    	break;
		    	case '1':
		    		$("#metodoBanco").text('Cuenta corriente: 0151-0130-07-8130016760');
		    		$("#aNombre").text('a nombre de multitiendas.com C.A. Rif: j-31751260-0');
					$(this).removeClass('incorrecto').addClass('correcto');
		    	break;
		    	case '2':
		    		$("#metodoBanco").text('Cuenta Corriente: 0134-0467-46-4671091222');
		    		$("#aNombre").text('a nombre de multitiendas.com C.A. Rif: j-31751260-0');
					$(this).removeClass('incorrecto').addClass('correcto');
		    	break;
		    	case '3':
		    		$("#metodoBanco").text('Cuenta Corriente:  0105-0670-13-1670077527');
		    		$("#aNombre").text('a nombre de multitiendas.com C.A. Rif: j-31751260-0');
					$(this).removeClass('incorrecto').addClass('correcto');
		    	break;
		    	case '4':
		    		$("#metodoBanco").text('Cuenta corriente: 0102-0114-43-0000332833');
		    		$("#aNombre").text('A nombre de: Freemarket C.A.   RIF: J-29902542-9');
					$(this).removeClass('incorrecto').addClass('correcto');
		    	break;
		    	default:
		    		$(".metodoBanco").text('');
		    		$('#aNombre').text('');
					$(this).removeClass('correcto').addClass('incorrecto');
		    	break;
		    }
		});

	/* LIMPIA TODO LOS CAMPOS! */
		function vaciar(){ 
			$('#imagenProducto').attr("src",'');
			$('#estados').removeClass('correcto incorrecto');
			$('#municipios').removeClass('correcto incorrecto');
			$('#metodoPago').removeClass('correcto incorrecto');
			$('#bancos').removeClass('correcto incorrecto');
			$("#Npedido").parent().addClass('form-error').removeClass('form-ok');
			$('.vaciar').val('').parent().removeClass('form-ok form-error');
			$('.datosInformacion').hide();
		}

	/*  TRAE LA INFORMACION DEL PRODUCTO! */
		$("#Npedido").on('change keyup',function(){
			if ($("#Npedido").val()> 999999999){
			    $.get("peticion.php?id_orden=".concat($("#Npedido").val()), function(data){
			        var obj = jQuery.parseJSON(data);
			    	if (obj.error==0){
						$("#Npedido").parent().addClass('form-ok').removeClass('form-error');
			    		$('#MontoTotal').val(obj.monto);
			    		$('#cantidadNone').val(obj.monto);
			    		$('#CantidadProductos').removeClass('incorrecto correcto').val(1);
			    		$('#CodigoProducto').val(obj.item_title);
			    		$('#imagenProducto').attr("src",obj.thumbnail);
			    		$("#Npedido").parent().addClass('form-ok').removeClass('form-error');
			            $('#Nombre').val(obj.name_buyer);
			            $('#Apellido').val(obj.lastname_buyer);
			            $('#TelefonoContacto').val(obj.phone_buyer);
			           	$('#seudonimo_ml').val(obj.nickname_buyer);
			    		$('.datosInformacion').show();
			    	}else
						vaciar();
	  			});
			}else
				vaciar();
		});
	});
</script>