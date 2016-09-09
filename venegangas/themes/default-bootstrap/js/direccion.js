var estados = [{
'id_estado':'1','estado':'DISTRITO CAPITAL'
},{
'id_estado':'2','estado':'AMAZONAS'
},{
'id_estado':'3','estado':'ANZOATEGUI'
},{
'id_estado':'4','estado':'APURE'
},{
'id_estado':'5','estado':'ARAGUA'
},{
'id_estado':'6','estado':'BARINAS'
},{
'id_estado':'7','estado':'BOLIVAR'
},{
'id_estado':'8','estado':'CARABOBO'
},{
'id_estado':'9','estado':'COJEDES'
},{
'id_estado':'10','estado':'DELTA AMACURO'
},{
'id_estado':'11','estado':'FALCON'
},{
'id_estado':'12','estado':'GUARICO'
},{
'id_estado':'13','estado':'LARA'
},{
'id_estado':'14','estado':'MERIDA'
},{
'id_estado':'15','estado':'MIRANDA'
},{
'id_estado':'16','estado':'MONAGAS'
},{
'id_estado':'17','estado':'NUEVA ESPARTAL'
},{
'id_estado':'18','estado':'PORTUGUESA'
},{
'id_estado':'19','estado':'SUCRE'
},{
'id_estado':'20','estado':'TACHIRA'
},{
'id_estado':'21','estado':'TRUJILLO'
},{
'id_estado':'22','estado':'YARACUY'
},{
'id_estado':'23','estado':'ZULIA'
},{
'id_estado':'24','estado':'VARGAS'
}];
var municipios = [{
'id_municipio':'1','id_estado':'1','municipio':'LIBERTADOR'
},{
'id_municipio':'2','id_estado':'2','municipio':'ALTO ORINOCO'
},{
'id_municipio':'3','id_estado':'2','municipio':'ATABAPO'
},{
'id_municipio':'4','id_estado':'2','municipio':'ATURES'
},{
'id_municipio':'5','id_estado':'2','municipio':'AUTANA'
},{
'id_municipio':'6','id_estado':'2','municipio':'MAROA'
},{
'id_municipio':'7','id_estado':'2','municipio':'MANAPIARE'
},{
'id_municipio':'8','id_estado':'2','municipio':'RIO NEGRO'
},{
'id_municipio':'9','id_estado':'3','municipio':'ANACO'
},{
'id_municipio':'10','id_estado':'3','municipio':'ARAGUA'
},{
'id_municipio':'11','id_estado':'3','municipio':'FERNANDO DE PEÃƒâ€˜ALVER'
},{
'id_municipio':'12','id_estado':'3','municipio':'FRANCISCO DEL CARMEN CARVAJAL'
},{
'id_municipio':'13','id_estado':'3','municipio':'FRANCISCO DE MIRANDA'
},{
'id_municipio':'14','id_estado':'3','municipio':'GUANTA'
},{
'id_municipio':'15','id_estado':'3','municipio':'INDEPENDENCIA'
},{
'id_municipio':'16','id_estado':'3','municipio':'JUAN ANTONIO SOTILLO'
},{
'id_municipio':'17','id_estado':'3','municipio':'JUAN MANUEL CAGIJAL'
},{
'id_municipio':'18','id_estado':'3','municipio':'JOSE GREGORIO MONAGAS'
},{
'id_municipio':'19','id_estado':'3','municipio':'LIBERTAD'
},{
'id_municipio':'20','id_estado':'3','municipio':'MANUEL EZEQUIEL BRUZUAL'
},{
'id_municipio':'21','id_estado':'3','municipio':'PEDRO MARIA FREITES'
},{
'id_municipio':'22','id_estado':'3','municipio':'PIRITU'
},{
'id_municipio':'23','id_estado':'3','municipio':'SAN JOSE DE GUANIPA'
},{
'id_municipio':'24','id_estado':'3','municipio':'SAN JUAN DE CAPISTRANO'
},{
'id_municipio':'25','id_estado':'3','municipio':'SANTA ANA'
},{
'id_municipio':'26','id_estado':'3','municipio':'SIMON BOLIVAR'
},{
'id_municipio':'27','id_estado':'3','municipio':'SIMON RODRIGUEZ'
},{
'id_municipio':'28','id_estado':'3','municipio':'SIR ARTHUR MACGREGOR'
},{
'id_municipio':'29','id_estado':'3','municipio':'DIEGO BAUTISTA URBANEJA'
},{
'id_municipio':'30','id_estado':'4','municipio':'ACHAGUAS'
},{
'id_municipio':'31','id_estado':'4','municipio':'BIRUACA'
},{
'id_municipio':'32','id_estado':'4','municipio':'MUÑOZ'
},{
'id_municipio':'33','id_estado':'4','municipio':'PAEZ'
},{
'id_municipio':'34','id_estado':'4','municipio':'PEDRO CAMEJO'
},{
'id_municipio':'35','id_estado':'4','municipio':'ROMULO GALLEGOS'
},{
'id_municipio':'36','id_estado':'4','municipio':'SAN FERNANDO'
},{
'id_municipio':'37','id_estado':'5','municipio':'BOLIVAR'
},{
'id_municipio':'38','id_estado':'5','municipio':'CAMATAGUA'
},{
'id_municipio':'39','id_estado':'5','municipio':'GIRARDOT'
},{
'id_municipio':'40','id_estado':'5','municipio':'JOSE ANGEL LAMAS'
},{
'id_municipio':'41','id_estado':'5','municipio':'JOSE FELIX RIBAS'
},{
'id_municipio':'42','id_estado':'5','municipio':'JOSE RAFAEL REVENGA'
},{
'id_municipio':'43','id_estado':'5','municipio':'LIBERTADOR'
},{
'id_municipio':'44','id_estado':'5','municipio':'MARIO BRICEÃƒâ€˜O IRAGORRY'
},{
'id_municipio':'45','id_estado':'5','municipio':'SAN CASIMIRO'
},{
'id_municipio':'46','id_estado':'5','municipio':'SAN SEBASTIAN'
},{
'id_municipio':'47','id_estado':'5','municipio':'SANTIAGO MARIÃƒâ€˜O'
},{
'id_municipio':'48','id_estado':'5','municipio':'SANTOS MICHELENA'
},{
'id_municipio':'49','id_estado':'5','municipio':'SUCRE'
},{
'id_municipio':'50','id_estado':'5','municipio':'TOVAR'
},{
'id_municipio':'51','id_estado':'5','municipio':'URDANETA'
},{
'id_municipio':'52','id_estado':'5','municipio':'ZAMORA'
},{
'id_municipio':'53','id_estado':'5','municipio':'FRANCISCO LINARES ALCANTARA'
},{
'id_municipio':'54','id_estado':'5','municipio':'OCUMARE DE LA COSTA DE ORO'
},{
'id_municipio':'55','id_estado':'6','municipio':'ALBERTO ARVELO TORREALBA'
},{
'id_municipio':'56','id_estado':'6','municipio':'ANTONIO JOSE DE SUCRE'
},{
'id_municipio':'57','id_estado':'6','municipio':'ARISMENDI'
},{
'id_municipio':'58','id_estado':'6','municipio':'BARINAS'
},{
'id_municipio':'59','id_estado':'6','municipio':'BOLIVAR'
},{
'id_municipio':'60','id_estado':'6','municipio':'CRUZ PAREDES'
},{
'id_municipio':'61','id_estado':'6','municipio':'EZEQUIEL ZAMORA'
},{
'id_municipio':'62','id_estado':'6','municipio':'OBISPOS'
},{
'id_municipio':'63','id_estado':'6','municipio':'PEDRAZA'
},{
'id_municipio':'64','id_estado':'6','municipio':'ROJAS'
},{
'id_municipio':'65','id_estado':'6','municipio':'SOSA'
},{
'id_municipio':'66','id_estado':'6','municipio':'ANDRES ELOY BLANCO'
},{
'id_municipio':'67','id_estado':'7','municipio':'CARONI'
},{
'id_municipio':'68','id_estado':'7','municipio':'CEDEÃƒâ€˜O'
},{
'id_municipio':'69','id_estado':'7','municipio':'EL CALLAO'
},{
'id_municipio':'70','id_estado':'7','municipio':'GRAN SABANA'
},{
'id_municipio':'71','id_estado':'7','municipio':'HERES'
},{
'id_municipio':'72','id_estado':'7','municipio':'PIAR'
},{
'id_municipio':'73','id_estado':'7','municipio':'RAUL LEONI'
},{
'id_municipio':'74','id_estado':'7','municipio':'ROSCIO'
},{
'id_municipio':'75','id_estado':'7','municipio':'SIFONTES'
},{
'id_municipio':'76','id_estado':'7','municipio':'SUCRE'
},{
'id_municipio':'77','id_estado':'7','municipio':'PADRE PEDRO CHIEN'
},{
'id_municipio':'78','id_estado':'8','municipio':'BEJUMA'
},{
'id_municipio':'79','id_estado':'8','municipio':'CARLOS ARVELO'
},{
'id_municipio':'80','id_estado':'8','municipio':'DIEGO IBARRA'
},{
'id_municipio':'81','id_estado':'8','municipio':'GUACARA'
},{
'id_municipio':'82','id_estado':'8','municipio':'JUAN JOSE MORA'
},{
'id_municipio':'83','id_estado':'8','municipio':'LIBERTADOR'
},{
'id_municipio':'84','id_estado':'8','municipio':'LOS GUAYOS'
},{
'id_municipio':'85','id_estado':'8','municipio':'MIRANDA'
},{
'id_municipio':'86','id_estado':'8','municipio':'MONTALBAN'
},{
'id_municipio':'87','id_estado':'8','municipio':'NAGUANAGUA'
},{
'id_municipio':'88','id_estado':'8','municipio':'PUERTO CABELLO'
},{
'id_municipio':'89','id_estado':'8','municipio':'SAN DIEGO'
},{
'id_municipio':'90','id_estado':'8','municipio':'SAN JOAQUIN'
},{
'id_municipio':'91','id_estado':'8','municipio':'VALENCIA'
},{
'id_municipio':'92','id_estado':'9','municipio':'ANZOATEGUI'
},{
'id_municipio':'93','id_estado':'9','municipio':'FALCON'
},{
'id_municipio':'94','id_estado':'9','municipio':'GIRARDOT'
},{
'id_municipio':'95','id_estado':'9','municipio':'LIMA BLANCO'
},{
'id_municipio':'96','id_estado':'9','municipio':'PAO DE SAN JUAN BAUTISTA'
},{
'id_municipio':'97','id_estado':'9','municipio':'RICAURTE'
},{
'id_municipio':'98','id_estado':'9','municipio':'ROMULO'
},{
'id_municipio':'99','id_estado':'9','municipio':'SAN CARLOS'
},{
'id_municipio':'100','id_estado':'9','municipio':'TINACO'
},{
'id_municipio':'105','id_estado':'11','municipio':'ACOSTA'
},{
'id_municipio':'106','id_estado':'11','municipio':'BOLIVAR'
},{
'id_municipio':'107','id_estado':'11','municipio':'BUCHIVACOA'
},{
'id_municipio':'108','id_estado':'11','municipio':'CACIQUE MANAURE'
},{
'id_municipio':'109','id_estado':'11','municipio':'CARIRUBANA'
},{
'id_municipio':'110','id_estado':'11','municipio':'COLINA'
},{
'id_municipio':'111','id_estado':'11','municipio':'DABAJURO'
},{
'id_municipio':'112','id_estado':'11','municipio':'DEMOCRACIA'
},{
'id_municipio':'113','id_estado':'11','municipio':'FALCON'
},{
'id_municipio':'114','id_estado':'11','municipio':'FEDERACION'
},{
'id_municipio':'115','id_estado':'11','municipio':'JACURA'
},{
'id_municipio':'116','id_estado':'11','municipio':'LOS TAQUES'
},{
'id_municipio':'117','id_estado':'11','municipio':'MAUROA'
},{
'id_municipio':'118','id_estado':'11','municipio':'MIRANDA'
},{
'id_municipio':'119','id_estado':'11','municipio':'MONSEÃƒâ€˜OR ITURRIZA'
},{
'id_municipio':'120','id_estado':'11','municipio':'PALMASOLA'
},{
'id_municipio':'121','id_estado':'11','municipio':'PETIT'
},{
'id_municipio':'122','id_estado':'11','municipio':'PIRITU'
},{
'id_municipio':'123','id_estado':'11','municipio':'SAN FRANCISCO'
},{
'id_municipio':'124','id_estado':'11','municipio':'SILVA'
},{
'id_municipio':'125','id_estado':'11','municipio':'SUCRE'
},{
'id_municipio':'126','id_estado':'11','municipio':'TOCOPERO'
},{
'id_municipio':'127','id_estado':'11','municipio':'UNION'
},{
'id_municipio':'128','id_estado':'11','municipio':'URUMACO'
},{
'id_municipio':'129','id_estado':'11','municipio':'ZAMORA'
},{
'id_municipio':'130','id_estado':'12','municipio':'CAMAGUAN'
},{
'id_municipio':'131','id_estado':'12','municipio':'CHAGUARAMAS'
},{
'id_municipio':'132','id_estado':'12','municipio':'EL SOCORRO'
},{
'id_municipio':'133','id_estado':'12','municipio':'SAN GERONIMO DE GUAYABAL'
},{
'id_municipio':'134','id_estado':'12','municipio':'LEONARDO INFANTE'
},{
'id_municipio':'135','id_estado':'12','municipio':'LAS MERCEDES'
},{
'id_municipio':'136','id_estado':'12','municipio':'JULIAN MELLADO'
},{
'id_municipio':'137','id_estado':'12','municipio':'FRANCISCO DE MIRANDA'
},{
'id_municipio':'139','id_estado':'12','municipio':'JOSE TADEO MONAGAS'
},{
'id_municipio':'140','id_estado':'12','municipio':'ORTIZ'
},{
'id_municipio':'141','id_estado':'12','municipio':'JOSE FELIX RIBAS'
},{
'id_municipio':'142','id_estado':'12','municipio':'JUAN GERMAN ROSCIO'
},{
'id_municipio':'143','id_estado':'12','municipio':'SAN JOSE DE GUARIBE'
},{
'id_municipio':'144','id_estado':'12','municipio':'SANTA MARIA DE IPIRE'
},{
'id_municipio':'145','id_estado':'12','municipio':'PEDRO ZARAZA'
},{
'id_municipio':'146','id_estado':'13','municipio':'ANDRES ELOY BLANCO'
},{
'id_municipio':'147','id_estado':'13','municipio':'CRESPO'
},{
'id_municipio':'148','id_estado':'13','municipio':'IRIBARREN'
},{
'id_municipio':'149','id_estado':'13','municipio':'JIMENEZ'
},{
'id_municipio':'150','id_estado':'13','municipio':'MORAN'
},{
'id_municipio':'151','id_estado':'13','municipio':'PALAVECINO'
},{
'id_municipio':'152','id_estado':'13','municipio':'SIMON PLANAS'
},{
'id_municipio':'153','id_estado':'13','municipio':'TORRES'
},{
'id_municipio':'154','id_estado':'13','municipio':'URDANETA'
},{
'id_municipio':'155','id_estado':'14','municipio':'ALBERTO ADRIANI'
},{
'id_municipio':'156','id_estado':'14','municipio':'ANDRES BELLO'
},{
'id_municipio':'157','id_estado':'14','municipio':'ANTONIO PINTO SALINAS'
},{
'id_municipio':'158','id_estado':'14','municipio':'ARICAGUA'
},{
'id_municipio':'159','id_estado':'14','municipio':'ARZOBISPO CHACON'
},{
'id_municipio':'160','id_estado':'14','municipio':'CAMPO ELIAS'
},{
'id_municipio':'161','id_estado':'14','municipio':'CARACCIOLO PARRA OLMEDO'
},{
'id_municipio':'162','id_estado':'14','municipio':'CARDENAL QUINTERO'
},{
'id_municipio':'163','id_estado':'14','municipio':'GUARAQUE'
},{
'id_municipio':'164','id_estado':'14','municipio':'JULIO CESAR SALAS'
},{
'id_municipio':'165','id_estado':'14','municipio':'JUSTO BRICEÃƒâ€˜O'
},{
'id_municipio':'166','id_estado':'14','municipio':'LIBERTADOR'
},{
'id_municipio':'167','id_estado':'14','municipio':'MIRANDA'
},{
'id_municipio':'168','id_estado':'14','municipio':'OBISPO RAMOS DE LORA'
},{
'id_municipio':'169','id_estado':'14','municipio':'PADRE NOGUERA'
},{
'id_municipio':'170','id_estado':'14','municipio':'PUEBLO LLANO'
},{
'id_municipio':'171','id_estado':'14','municipio':'RANGEL'
},{
'id_municipio':'172','id_estado':'14','municipio':'RIVAS DAVILA'
},{
'id_municipio':'173','id_estado':'14','municipio':'SANTOS MARQUINA'
},{
'id_municipio':'174','id_estado':'14','municipio':'SUCRE'
},{
'id_municipio':'175','id_estado':'14','municipio':'TOVAR'
},{
'id_municipio':'176','id_estado':'14','municipio':'TULIO FEBRES CORDERO'
},{
'id_municipio':'177','id_estado':'14','municipio':'ZEA'
},{
'id_municipio':'178','id_estado':'15','municipio':'ACEVEDO'
},{
'id_municipio':'179','id_estado':'15','municipio':'ANDRES BELLO'
},{
'id_municipio':'180','id_estado':'15','municipio':'BARUTA'
},{
'id_municipio':'181','id_estado':'15','municipio':'BRION'
},{
'id_municipio':'182','id_estado':'15','municipio':'BUROZ'
},{
'id_municipio':'183','id_estado':'15','municipio':'CARRIZAL'
},{
'id_municipio':'184','id_estado':'15','municipio':'CHACAO'
},{
'id_municipio':'185','id_estado':'15','municipio':'CRISTOBAL ROJAS'
},{
'id_municipio':'186','id_estado':'15','municipio':'EL HATILLO'
},{
'id_municipio':'187','id_estado':'15','municipio':'GUACAIPURO'
},{
'id_municipio':'188','id_estado':'15','municipio':'INDEPENDENCIA'
},{
'id_municipio':'189','id_estado':'15','municipio':'LANDER'
},{
'id_municipio':'190','id_estado':'15','municipio':'LOS SALIAS'
},{
'id_municipio':'191','id_estado':'15','municipio':'PAEZ'
},{
'id_municipio':'192','id_estado':'15','municipio':'PAZ CASTILLO'
},{
'id_municipio':'193','id_estado':'15','municipio':'PEDRO GUAL'
},{
'id_municipio':'194','id_estado':'15','municipio':'PLAZA'
},{
'id_municipio':'195','id_estado':'15','municipio':'SIMON BOLIVAR'
},{
'id_municipio':'196','id_estado':'15','municipio':'SUCRE'
},{
'id_municipio':'197','id_estado':'15','municipio':'URDANETA'
},{
'id_municipio':'198','id_estado':'15','municipio':'ZAMORA'
},{
'id_municipio':'199','id_estado':'16','municipio':'ACOSTA'
},{
'id_municipio':'200','id_estado':'16','municipio':'AGUASAY'
},{
'id_municipio':'201','id_estado':'16','municipio':'BOLIVAR'
},{
'id_municipio':'202','id_estado':'16','municipio':'CARIPE'
},{
'id_municipio':'203','id_estado':'16','municipio':'CEDEÃƒâ€˜O'
},{
'id_municipio':'204','id_estado':'16','municipio':'EZEQUIEL ZAMORA'
},{
'id_municipio':'205','id_estado':'16','municipio':'LIBERTADOR'
},{
'id_municipio':'206','id_estado':'16','municipio':'MATURIN'
},{
'id_municipio':'207','id_estado':'16','municipio':'PIAR'
},{
'id_municipio':'208','id_estado':'16','municipio':'PUNCERES'
},{
'id_municipio':'209','id_estado':'16','municipio':'SANTA BARBARA'
},{
'id_municipio':'210','id_estado':'16','municipio':'SOTILLO'
},{
'id_municipio':'211','id_estado':'16','municipio':'URACOA'
},{
'id_municipio':'212','id_estado':'17','municipio':'ANTOLIN DEL CAMPO'
},{
'id_municipio':'213','id_estado':'17','municipio':'ARISMENDI'
},{
'id_municipio':'214','id_estado':'17','municipio':'DIAZ'
},{
'id_municipio':'215','id_estado':'17','municipio':'GARCIA'
},{
'id_municipio':'216','id_estado':'17','municipio':'GOMEZ'
},{
'id_municipio':'217','id_estado':'17','municipio':'MANEIRO'
},{
'id_municipio':'218','id_estado':'17','municipio':'MARCANO'
},{
'id_municipio':'219','id_estado':'17','municipio':'MARIÃƒâ€˜O'
},{
'id_municipio':'220','id_estado':'17','municipio':'PENINSULA DE MACANAO'
},{
'id_municipio':'221','id_estado':'17','municipio':'TUBORES'
},{
'id_municipio':'222','id_estado':'17','municipio':'VILLALBA'
},{
'id_municipio':'223','id_estado':'18','municipio':'AGUA BLANCA'
},{
'id_municipio':'224','id_estado':'18','municipio':'ARAURE'
},{
'id_municipio':'225','id_estado':'18','municipio':'ESTELLER'
},{
'id_municipio':'226','id_estado':'18','municipio':'GUANARE'
},{
'id_municipio':'227','id_estado':'18','municipio':'GUANARITO'
},{
'id_municipio':'228','id_estado':'18','municipio':'MONSEÃƒâ€˜OR JOSE VICENTE DE UNDA'
},{
'id_municipio':'229','id_estado':'18','municipio':'OSPINO'
},{
'id_municipio':'230','id_estado':'18','municipio':'PAEZ'
},{
'id_municipio':'231','id_estado':'18','municipio':'PAPELON'
},{
'id_municipio':'232','id_estado':'18','municipio':'SAN GENARO DE BOCONOITO'
},{
'id_municipio':'233','id_estado':'18','municipio':'SAN RAFAEL DE ONOTO'
},{
'id_municipio':'234','id_estado':'18','municipio':'SANTA ROSALIA'
},{
'id_municipio':'235','id_estado':'18','municipio':'SUCRE'
},{
'id_municipio':'236','id_estado':'18','municipio':'TUREN'
},{
'id_municipio':'237','id_estado':'19','municipio':'ANDRES ELOY BLANCO'
},{
'id_municipio':'238','id_estado':'19','municipio':'ANDRES MATA'
},{
'id_municipio':'239','id_estado':'19','municipio':'ARISMENDI'
},{
'id_municipio':'240','id_estado':'19','municipio':'BENITEZ'
},{
'id_municipio':'241','id_estado':'19','municipio':'BERMUDEZ'
},{
'id_municipio':'242','id_estado':'19','municipio':'BOLIVAR'
},{
'id_municipio':'243','id_estado':'19','municipio':'CAJIGAL'
},{
'id_municipio':'244','id_estado':'19','municipio':'CRUZ SALMERON ACOSTA'
},{
'id_municipio':'245','id_estado':'19','municipio':'LIBERTADOR'
},{
'id_municipio':'246','id_estado':'19','municipio':'MARIÃƒâ€˜O'
},{
'id_municipio':'247','id_estado':'19','municipio':'MEJIA'
},{
'id_municipio':'248','id_estado':'19','municipio':'MONTES'
},{
'id_municipio':'249','id_estado':'19','municipio':'RIBERO'
},{
'id_municipio':'250','id_estado':'19','municipio':'SUCRE'
},{
'id_municipio':'251','id_estado':'19','municipio':'VALDEZ'
},{
'id_municipio':'252','id_estado':'20','municipio':'ANDRES BELLO'
},{
'id_municipio':'253','id_estado':'20','municipio':'ANTONIO ROMULO COSTA'
},{
'id_municipio':'254','id_estado':'20','municipio':'AYACUCHO'
},{
'id_municipio':'255','id_estado':'20','municipio':'BOLIVAR'
},{
'id_municipio':'256','id_estado':'20','municipio':'CARDENAS'
},{
'id_municipio':'257','id_estado':'20','municipio':'CORDOBA'
},{
'id_municipio':'258','id_estado':'20','municipio':'FERNANDEZ FEO'
},{
'id_municipio':'259','id_estado':'20','municipio':'FRANCISCO DE MIRANDA'
},{
'id_municipio':'260','id_estado':'20','municipio':'GARCIA DE HEVIA'
},{
'id_municipio':'261','id_estado':'20','municipio':'GUASIMOS'
},{
'id_municipio':'262','id_estado':'20','municipio':'INDEPENDENCIA'
},{
'id_municipio':'263','id_estado':'20','municipio':'JAUREGUI'
},{
'id_municipio':'264','id_estado':'20','municipio':'JOSE MARIA VARGAS'
},{
'id_municipio':'265','id_estado':'20','municipio':'JUNIN'
},{
'id_municipio':'266','id_estado':'20','municipio':'LIBERTAD'
},{
'id_municipio':'267','id_estado':'20','municipio':'LIBERTADOR'
},{
'id_municipio':'268','id_estado':'20','municipio':'LOBATERA'
},{
'id_municipio':'269','id_estado':'20','municipio':'MICHELENA'
},{
'id_municipio':'270','id_estado':'20','municipio':'PANAMERICANO'
},{
'id_municipio':'271','id_estado':'20','municipio':'PEDRO MARIA UREÃƒâ€˜A'
},{
'id_municipio':'272','id_estado':'20','municipio':'RAFAEL URDANETA'
},{
'id_municipio':'273','id_estado':'20','municipio':'SAMUEL DARIO MALDONADO'
},{
'id_municipio':'274','id_estado':'20','municipio':'SAN CRISTOBAL'
},{
'id_municipio':'275','id_estado':'20','municipio':'SEBORUCO'
},{
'id_municipio':'276','id_estado':'20','municipio':'SIMON RODRIGUEZ'
},{
'id_municipio':'277','id_estado':'20','municipio':'SUCRE'
},{
'id_municipio':'278','id_estado':'20','municipio':'TORBES'
},{
'id_municipio':'279','id_estado':'20','municipio':'URIBANTE'
},{
'id_municipio':'280','id_estado':'20','municipio':'SAN JUDAS TADEO'
},{
'id_municipio':'281','id_estado':'21','municipio':'ANDRES BELLO'
},{
'id_municipio':'282','id_estado':'21','municipio':'BOCONO'
},{
'id_municipio':'283','id_estado':'21','municipio':'BOLIVAR'
},{
'id_municipio':'284','id_estado':'21','municipio':'CANDELARIA'
},{
'id_municipio':'285','id_estado':'21','municipio':'CARACHE'
},{
'id_municipio':'286','id_estado':'21','municipio':'ESCUQUE'
},{
'id_municipio':'287','id_estado':'21','municipio':'JOSE FELIPE MARQUEZ CAÃƒâ€˜IZALES'
},{
'id_municipio':'288','id_estado':'21','municipio':'JUAN VICENTE CAMPO ELIAS'
},{
'id_municipio':'289','id_estado':'21','municipio':'LA CEIBA'
},{
'id_municipio':'290','id_estado':'21','municipio':'MIRANDA'
},{
'id_municipio':'291','id_estado':'21','municipio':'MONTE CARMELO'
},{
'id_municipio':'292','id_estado':'21','municipio':'MOTATAN'
},{
'id_municipio':'293','id_estado':'21','municipio':'PAMPAN'
},{
'id_municipio':'294','id_estado':'21','municipio':'PAMPANITO'
},{
'id_municipio':'295','id_estado':'21','municipio':'RAFAEL RANGEL'
},{
'id_municipio':'296','id_estado':'21','municipio':'SAN RAFAEL DE CARVAJAL'
},{
'id_municipio':'297','id_estado':'21','municipio':'SUCRE'
},{
'id_municipio':'298','id_estado':'21','municipio':'TRUJILLO'
},{
'id_municipio':'299','id_estado':'21','municipio':'URDANETA'
},{
'id_municipio':'300','id_estado':'21','municipio':'VALERA'
},{
'id_municipio':'301','id_estado':'22','municipio':'ARISTIDES BASTIDAS'
},{
'id_municipio':'302','id_estado':'22','municipio':'BOLIVAR'
},{
'id_municipio':'303','id_estado':'22','municipio':'BRUZUAL'
},{
'id_municipio':'304','id_estado':'22','municipio':'COCOROTE'
},{
'id_municipio':'305','id_estado':'22','municipio':'INDEPENDENCIA'
},{
'id_municipio':'306','id_estado':'22','municipio':'JOSE ANTONIO PAEZ'
},{
'id_municipio':'307','id_estado':'22','municipio':'LA TRINIDAD'
},{
'id_municipio':'308','id_estado':'22','municipio':'MANUAL MONGE'
},{
'id_municipio':'309','id_estado':'22','municipio':'NIRGUA'
},{
'id_municipio':'310','id_estado':'22','municipio':'PEÃƒâ€˜A'
},{
'id_municipio':'311','id_estado':'22','municipio':'SAN FELIPE'
},{
'id_municipio':'312','id_estado':'22','municipio':'SUCRE'
},{
'id_municipio':'313','id_estado':'22','municipio':'URACHICHE'
},{
'id_municipio':'314','id_estado':'22','municipio':'VEROES'
},{
'id_municipio':'315','id_estado':'23','municipio':'ALMIRANTE PADILLA'
},{
'id_municipio':'316','id_estado':'23','municipio':'BARALT'
},{
'id_municipio':'317','id_estado':'23','municipio':'CABIMAS'
},{
'id_municipio':'318','id_estado':'23','municipio':'CATATUMBO'
},{
'id_municipio':'319','id_estado':'23','municipio':'COLON'
},{
'id_municipio':'320','id_estado':'23','municipio':'FRANCISCO JAVIER PULGAR'
},{
'id_municipio':'321','id_estado':'23','municipio':'JESUS ENRIQUE LOSSADA'
},{
'id_municipio':'322','id_estado':'23','municipio':'JESUS MARIA SEMPRUN'
},{
'id_municipio':'327','id_estado':'23','municipio':'MARACAIBO'
},{
'id_municipio':'328','id_estado':'23','municipio':'MIRANDA'
},{
'id_municipio':'329','id_estado':'23','municipio':'PAEZ'
},{
'id_municipio':'330','id_estado':'23','municipio':'ROSARIO DE PERIJA'
},{
'id_municipio':'331','id_estado':'23','municipio':'SAN FRANCISCO'
},{
'id_municipio':'332','id_estado':'23','municipio':'SANTA RITA'
},{
'id_municipio':'333','id_estado':'23','municipio':'SIMON BOLIVAR'
},{
'id_municipio':'334','id_estado':'23','municipio':'SUCRE'
},{
'id_municipio':'335','id_estado':'23','municipio':'VALMORE RODRIGUEZ'
},{
'id_municipio':'336','id_estado':'24','municipio':'VARGAS'
}];
var parroquias = [{
'id_parroquia':'1','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Altagracia'
},{
'id_parroquia':'2','id_municipio':'1','id_estado':'1','parroquia':'Paroquia Antimano'
},{
'id_parroquia':'3','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Candelaria'
},{
'id_parroquia':'4','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Caricuao'
},{
'id_parroquia':'5','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Catedral'
},{
'id_parroquia':'6','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Coche'
},{
'id_parroquia':'7','id_municipio':'1','id_estado':'1','parroquia':'Parroquia El Junquito'
},{
'id_parroquia':'8','id_municipio':'1','id_estado':'1','parroquia':'Parroquia EL Paraiso'
},{
'id_parroquia':'9','id_municipio':'1','id_estado':'1','parroquia':'Parroquia El Recreo'
},{
'id_parroquia':'10','id_municipio':'1','id_estado':'1','parroquia':'Parroquia El Valle'
},{
'id_parroquia':'11','id_municipio':'1','id_estado':'1','parroquia':'Parroquia La Pastora'
},{
'id_parroquia':'12','id_municipio':'1','id_estado':'1','parroquia':'Parroquia La Vega'
},{
'id_parroquia':'13','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Macarao'
},{
'id_parroquia':'14','id_municipio':'1','id_estado':'1','parroquia':'Parroquia San Agustin'
},{
'id_parroquia':'15','id_municipio':'1','id_estado':'1','parroquia':'Parroquia San Bernardino'
},{
'id_parroquia':'16','id_municipio':'1','id_estado':'1','parroquia':'Parroquia San Jose'
},{
'id_parroquia':'17','id_municipio':'1','id_estado':'1','parroquia':'Parroquia San Juan'
},{
'id_parroquia':'18','id_municipio':'1','id_estado':'1','parroquia':'Parroquia San Pedro'
},{
'id_parroquia':'19','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Santa Rosalia'
},{
'id_parroquia':'20','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Santa Teresa'
},{
'id_parroquia':'21','id_municipio':'1','id_estado':'1','parroquia':'Parroquia Sucre'
},{
'id_parroquia':'22','id_municipio':'1','id_estado':'1','parroquia':'Parroquia 23 de Enero'
},{
'id_parroquia':'23','id_municipio':'2','id_estado':'2','parroquia':'Parroquia Capital Alto Orinoco'
},{
'id_parroquia':'24','id_municipio':'2','id_estado':'2','parroquia':'Parroquia Huachamacare'
},{
'id_parroquia':'25','id_municipio':'2','id_estado':'2','parroquia':'parroquia Marawaka'
},{
'id_parroquia':'26','id_municipio':'2','id_estado':'2','parroquia':'parroquia Mavaca'
},{
'id_parroquia':'27','id_municipio':'2','id_estado':'2','parroquia':'Parroquia Sierra Parima'
},{
'id_parroquia':'28','id_municipio':'3','id_estado':'2','parroquia':'Parroquia Ucata'
},{
'id_parroquia':'29','id_municipio':'3','id_estado':'2','parroquia':'Parroquia Yapacana'
},{
'id_parroquia':'30','id_municipio':'3','id_estado':'2','parroquia':'Parroquia Caname'
},{
'id_parroquia':'31','id_municipio':'4','id_estado':'2','parroquia':'Parroquia Fernando Giron Tovar'
},{
'id_parroquia':'32','id_municipio':'4','id_estado':'2','parroquia':'Parroquia Luis Alberto Gomez'
},{
'id_parroquia':'33','id_municipio':'4','id_estado':'2','parroquia':'Parroquia Parhuena'
},{
'id_parroquia':'34','id_municipio':'4','id_estado':'2','parroquia':'Parroquia Platanillal'
},{
'id_parroquia':'35','id_municipio':'5','id_estado':'2','parroquia':'Parroquia Samariapo'
},{
'id_parroquia':'36','id_municipio':'5','id_estado':'2','parroquia':'Parroquia Sipapo'
},{
'id_parroquia':'37','id_municipio':'5','id_estado':'2','parroquia':'Parroquia Munduapo'
},{
'id_parroquia':'38','id_municipio':'5','id_estado':'2','parroquia':'Parroquia Guayapo'
},{
'id_parroquia':'39','id_municipio':'6','id_estado':'2','parroquia':'Parroquia Victorino'
},{
'id_parroquia':'40','id_municipio':'6','id_estado':'2','parroquia':'Parroquia Comunidad'
},{
'id_parroquia':'41','id_municipio':'7','id_estado':'2','parroquia':'Parroquia Alto Ventuari'
},{
'id_parroquia':'42','id_municipio':'5','id_estado':'2','parroquia':'Parroquia Medio Ventuari'
},{
'id_parroquia':'43','id_municipio':'7','id_estado':'2','parroquia':'Parroquia Bajo Ventuari'
},{
'id_parroquia':'44','id_municipio':'8','id_estado':'2','parroquia':'Parroquia Capital Rio Negro'
},{
'id_parroquia':'45','id_municipio':'8','id_estado':'2','parroquia':'Parroquia Solano'
},{
'id_parroquia':'46','id_municipio':'8','id_estado':'2','parroquia':'Parroquia Casiquiare'
},{
'id_parroquia':'47','id_municipio':'8','id_estado':'2','parroquia':'Parroquia Cocuy'
},{
'id_parroquia':'48','id_municipio':'9','id_estado':'3','parroquia':'Parroquia Capital Anaco'
},{
'id_parroquia':'49','id_municipio':'9','id_estado':'3','parroquia':'Parroquia San Joaquin'
},{
'id_parroquia':'50','id_municipio':'10','id_estado':'3','parroquia':'Parroquia Capital Aragua'
},{
'id_parroquia':'51','id_municipio':'10','id_estado':'3','parroquia':'Parroquia Cachipo'
},{
'id_parroquia':'52','id_municipio':'11','id_estado':'3','parroquia':'Parroquia Capital Fernando de Penalver'
},{
'id_parroquia':'53','id_municipio':'11','id_estado':'3','parroquia':'parroquia San Miguel'
},{
'id_parroquia':'54','id_municipio':'11','id_estado':'3','parroquia':'Parroquia Sucre'
},{
'id_parroquia':'55','id_municipio':'12','id_estado':'3','parroquia':'Parroquia Valle de Guanape'
},{
'id_parroquia':'56','id_municipio':'12','id_estado':'3','parroquia':'Parroquia Santa Barbara'
},{
'id_parroquia':'57','id_municipio':'13','id_estado':'3','parroquia':'Parroquia Capital Francisco de Miranda'
},{
'id_parroquia':'58','id_municipio':'13','id_estado':'3','parroquia':'Parroquia Atapirire'
},{
'id_parroquia':'59','id_municipio':'13','id_estado':'3','parroquia':'Parroquia Boca del Pao'
},{
'id_parroquia':'60','id_municipio':'13','id_estado':'3','parroquia':'Parroquia El Pao'
},{
'id_parroquia':'61','id_municipio':'13','id_estado':'3','parroquia':'Parroquia Mucura'
},{
'id_parroquia':'62','id_municipio':'14','id_estado':'3','parroquia':'Parroquia Guanta'
},{
'id_parroquia':'63','id_municipio':'14','id_estado':'3','parroquia':'Parroquia Chorreron'
},{
'id_parroquia':'64','id_municipio':'15','id_estado':'3','parroquia':'Parroquia Capital Independencia'
},{
'id_parroquia':'65','id_municipio':'15','id_estado':'3','parroquia':'Parroquia Mamo'
},{
'id_parroquia':'66','id_municipio':'16','id_estado':'3','parroquia':'Parroquia Capital Puerto La Cruz'
},{
'id_parroquia':'67','id_municipio':'16','id_estado':'3','parroquia':'Parroquia Pozuelos'
},{
'id_parroquia':'68','id_municipio':'17','id_estado':'3','parroquia':'Parroquia Capital Onoto'
},{
'id_parroquia':'69','id_municipio':'17','id_estado':'3','parroquia':'parroquia San Pablo'
},{
'id_parroquia':'70','id_municipio':'18','id_estado':'3','parroquia':'Parroquia Capital Jose Gregorio Monagas'
},{
'id_parroquia':'71','id_municipio':'18','id_estado':'3','parroquia':'Parroquia Piar'
},{
'id_parroquia':'72','id_municipio':'18','id_estado':'3','parroquia':'Parroquia San Diego de Cabrutica'
},{
'id_parroquia':'73','id_municipio':'18','id_estado':'3','parroquia':'Parroquia Santa Clara'
},{
'id_parroquia':'74','id_municipio':'18','id_estado':'3','parroquia':'Parroquia Uverito'
},{
'id_parroquia':'75','id_municipio':'18','id_estado':'3','parroquia':'Parroquia Zuata'
},{
'id_parroquia':'76','id_municipio':'19','id_estado':'3','parroquia':'Parroquia Capital Libertad'
},{
'id_parroquia':'77','id_municipio':'19','id_estado':'3','parroquia':'Parroquia El Carito'
},{
'id_parroquia':'78','id_municipio':'19','id_estado':'3','parroquia':'Parroquia Santa Ines'
},{
'id_parroquia':'79','id_municipio':'20','id_estado':'3','parroquia':'Parroquia Capital Clarines'
},{
'id_parroquia':'80','id_municipio':'20','id_estado':'3','parroquia':'Parroquia Guanape'
},{
'id_parroquia':'81','id_municipio':'20','id_estado':'3','parroquia':'Parroquia Sabana de Uchire'
},{
'id_parroquia':'82','id_municipio':'21','id_estado':'3','parroquia':'Parroquia Capital Pedro Maria Freites'
},{
'id_parroquia':'83','id_municipio':'21','id_estado':'3','parroquia':'Parroquia Libertador'
},{
'id_parroquia':'84','id_municipio':'21','id_estado':'3','parroquia':'Parroquia Santa Rosa'
},{
'id_parroquia':'85','id_municipio':'21','id_estado':'3','parroquia':'Parroquia Urica'
},{
'id_parroquia':'86','id_municipio':'22','id_estado':'3','parroquia':'Parroquia Capital Piritu'
},{
'id_parroquia':'87','id_municipio':'22','id_estado':'3','parroquia':'Parroquia San Francisco'
},{
'id_parroquia':'88','id_municipio':'23','id_estado':'3','parroquia':'Parroquia Capital San Jose de Guanipa'
},{
'id_parroquia':'89','id_municipio':'24','id_estado':'3','parroquia':'Parroquia Capital Boca de Uchire'
},{
'id_parroquia':'90','id_municipio':'24','id_estado':'3','parroquia':'Parroquia Boca de Chavez'
},{
'id_parroquia':'91','id_municipio':'25','id_estado':'3','parroquia':'Parroquia Capital Santa Ana'
},{
'id_parroquia':'92','id_municipio':'25','id_estado':'3','parroquia':'Parroquia Pueblo Nuevo'
},{
'id_parroquia':'93','id_municipio':'26','id_estado':'3','parroquia':'Parroquia El Carmen'
},{
'id_parroquia':'94','id_municipio':'26','id_estado':'3','parroquia':'Parroquia San Cristobal'
},{
'id_parroquia':'95','id_municipio':'26','id_estado':'3','parroquia':'Parroquia Bergantin'
},{
'id_parroquia':'96','id_municipio':'26','id_estado':'3','parroquia':'Parroquia Caigua'
},{
'id_parroquia':'97','id_municipio':'26','id_estado':'3','parroquia':'Parroquia El Pilar'
},{
'id_parroquia':'98','id_municipio':'26','id_estado':'3','parroquia':'parroquia Naricual'
},{
'id_parroquia':'99','id_municipio':'27','id_estado':'3','parroquia':'Parroquia Edmundo Barrios'
},{
'id_parroquia':'100','id_municipio':'27','id_estado':'3','parroquia':'Parroquia Miguel Otero Silva'
},{
'id_parroquia':'101','id_municipio':'28','id_estado':'3','parroquia':'Parroquia El Chaparro'
},{
'id_parroquia':'102','id_municipio':'28','id_estado':'3','parroquia':'Parroquia Tomas Alfaro Calatrava'
},{
'id_parroquia':'103','id_municipio':'29','id_estado':'3','parroquia':'Parroquia Lecherias'
},{
'id_parroquia':'104','id_municipio':'29','id_estado':'3','parroquia':'Parroquia El Morro'
},{
'id_parroquia':'105','id_municipio':'30','id_estado':'4','parroquia':'Parroquia Urbana Achaguas'
},{
'id_parroquia':'106','id_municipio':'30','id_estado':'4','parroquia':'Parroquia Apurito'
},{
'id_parroquia':'107','id_municipio':'30','id_estado':'4','parroquia':'Parroquia El Yagual'
},{
'id_parroquia':'108','id_municipio':'30','id_estado':'4','parroquia':'Parroquia Guachara'
},{
'id_parroquia':'109','id_municipio':'30','id_estado':'4','parroquia':'Parroquia Mucuritas'
},{
'id_parroquia':'110','id_municipio':'30','id_estado':'4','parroquia':'Parroquia Queseras del Medio'
},{
'id_parroquia':'111','id_municipio':'31','id_estado':'4','parroquia':'Parroquia Urbana Biruaca'
},{
'id_parroquia':'112','id_municipio':'32','id_estado':'4','parroquia':'Parroquia Urbana Bruzual'
},{
'id_parroquia':'113','id_municipio':'32','id_estado':'4','parroquia':'Parroquia Mantecal'
},{
'id_parroquia':'114','id_municipio':'32','id_estado':'4','parroquia':'Parroquia Quintero'
},{
'id_parroquia':'115','id_municipio':'32','id_estado':'4','parroquia':'Parroquia Rincon Hondo'
},{
'id_parroquia':'116','id_municipio':'32','id_estado':'4','parroquia':'Parroquia San Vicente'
},{
'id_parroquia':'117','id_municipio':'33','id_estado':'4','parroquia':'Parroquia Urbana Guasdualito'
},{
'id_parroquia':'118','id_municipio':'33','id_estado':'4','parroquia':'Parroquia Aramendi'
},{
'id_parroquia':'119','id_municipio':'33','id_estado':'4','parroquia':'Parroquia El Amparo'
},{
'id_parroquia':'120','id_municipio':'33','id_estado':'4','parroquia':'Parroquia San Camilo'
},{
'id_parroquia':'121','id_municipio':'33','id_estado':'4','parroquia':'Parroquia Urdaneta'
},{
'id_parroquia':'122','id_municipio':'34','id_estado':'4','parroquia':'Parroquia Urbana San Juan de Payara'
},{
'id_parroquia':'123','id_municipio':'34','id_estado':'4','parroquia':'Parroquia Codazzi'
},{
'id_parroquia':'124','id_municipio':'34','id_estado':'4','parroquia':'Parroquia Cunaviche'
},{
'id_parroquia':'125','id_municipio':'35','id_estado':'4','parroquia':'Parroquia Urbana Elorza'
},{
'id_parroquia':'126','id_municipio':'35','id_estado':'4','parroquia':'Parroquia La Trinidad'
},{
'id_parroquia':'127','id_municipio':'36','id_estado':'4','parroquia':'Parroquia Urbana San Fernando'
},{
'id_parroquia':'128','id_municipio':'36','id_estado':'4','parroquia':'Parroquia El Recreo'
},{
'id_parroquia':'129','id_municipio':'36','id_estado':'4','parroquia':'Parroquia Penalver'
},{
'id_parroquia':'130','id_municipio':'36','id_estado':'4','parroquia':'Parroquia San Rafael de Atamaica'
},{
'id_parroquia':'131','id_municipio':'37','id_estado':'5','parroquia':'Parroquia Capital Bolivar'
},{
'id_parroquia':'132','id_municipio':'38','id_estado':'5','parroquia':'Parroquia Capital Camatagua'
},{
'id_parroquia':'133','id_municipio':'38','id_estado':'5','parroquia':'Parroquia No Urbana Carmen de Cura'
},{
'id_parroquia':'134','id_municipio':'39','id_estado':'5','parroquia':'Parroquia No Urbana Choroni'
},{
'id_parroquia':'135','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Las Delicias'
},{
'id_parroquia':'136','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Madre Maria de San Jose'
},{
'id_parroquia':'137','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Joaquin Crespo'
},{
'id_parroquia':'138','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Pedro Jose Ovalles'
},{
'id_parroquia':'139','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Jose Casanova Godoy'
},{
'id_parroquia':'140','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Andres Eloy Blanco'
},{
'id_parroquia':'141','id_municipio':'39','id_estado':'5','parroquia':'Parroquia Urbana Los Tacariguas'
},{
'id_parroquia':'142','id_municipio':'40','id_estado':'5','parroquia':'Parroquia Capital Jose Angel Lamas'
},{
'id_parroquia':'143','id_municipio':'41','id_estado':'5','parroquia':'Parroquia Capital Jose Felix Ribas'
},{
'id_parroquia':'144','id_municipio':'41','id_estado':'5','parroquia':'Parroquia Castor Nieves Rios'
},{
'id_parroquia':'145','id_municipio':'41','id_estado':'5','parroquia':'Parroquia No Urbana Las Guacamayas'
},{
'id_parroquia':'146','id_municipio':'41','id_estado':'5','parroquia':'Parroquia No Urbana Pao de Zarate'
},{
'id_parroquia':'147','id_municipio':'41','id_estado':'5','parroquia':'Parroquia No Urbana Zuata'
},{
'id_parroquia':'148','id_municipio':'42','id_estado':'5','parroquia':'Parroquia Capital Jose Rafael Revenga'
},{
'id_parroquia':'149','id_municipio':'43','id_estado':'5','municipio':'Parroquia Capital Libertador'
},{
'id_parroquia':'150','id_municipio':'43','id_estado':'5','municipio':'Parroquia No Urbana San Martin de Porres'
},{
'id_parroquia':'151','id_municipio':'44','id_estado':'5','parroquia':'Parroquia Capital Mario Briceno Iragorry'
},{
'id_parroquia':'152','id_municipio':'44','id_estado':'5','parroquia':'Parroquia Cana de Azucar'
},{
'id_parroquia':'153','id_municipio':'45','id_estado':'5','parroquia':'Parroquia Capital San Casimiro'
},{
'id_parroquia':'154','id_municipio':'45','id_estado':'5','parroquia':'Parroquia No Urbana Guiripa'
},{
'id_parroquia':'155','id_municipio':'45','id_estado':'5','parroquia':'Parroquia No Urbana Ollas de Caramacate'
},{
'id_parroquia':'156','id_municipio':'45','id_estado':'5','parroquia':'Parroquia No Urbana Valle Morin'
},{
'id_parroquia':'157','id_municipio':'46','id_estado':'5','parroquia':'Parroquia Capital San Sebastian'
},{
'id_parroquia':'158','id_municipio':'47','id_estado':'5','parroquia':'Parroquia Capital Santiago Marino'
},{
'id_parroquia':'159','id_municipio':'47','id_estado':'5','parroquia':'Parroquia No Urbana Arevalo Aponte'
},{
'id_parroquia':'160','id_municipio':'47','id_estado':'5','parroquia':'Parroquia No Urbana Chuao'
},{
'id_parroquia':'161','id_municipio':'47','id_estado':'5','parroquia':'Parroquia No Urbana Saman de Guere'
},{
'id_parroquia':'162','id_municipio':'47','id_estado':'5','parroquia':'Parroquia No Urbana Alfredo Pacheco Mira'
},{
'id_parroquia':'163','id_municipio':'48','id_estado':'5','parroquia':'Parroquia Capital Santos Michelena'
},{
'id_parroquia':'164','id_municipio':'48','id_estado':'5','parroquia':'Parroquia No Urbana Tiara'
},{
'id_parroquia':'165','id_municipio':'49','id_estado':'5','parroquia':'Parroquia Capital Sucre'
},{
'id_parroquia':'166','id_municipio':'49','id_estado':'5','parroquia':'Parroquia No Urbana Bella Vista'
},{
'id_parroquia':'167','id_municipio':'50','id_estado':'5','parroquia':'Parroquia Capital Tovar'
},{
'id_parroquia':'168','id_municipio':'51','id_estado':'5','parroquia':'Parroquia Capital Urdaneta'
},{
'id_parroquia':'169','id_municipio':'51','id_estado':'5','parroquia':'Parroquia No Urbana Las Penitas'
},{
'id_parroquia':'170','id_municipio':'51','id_estado':'5','parroquia':'Parroquia No Urbana San Francisco de Car'
},{
'id_parroquia':'171','id_municipio':'51','id_estado':'5','parroquia':'Parroquia No Urbana Taguay'
},{
'id_parroquia':'172','id_municipio':'52','id_estado':'5','parroquia':'Parroquia Capital Zamora'
},{
'id_parroquia':'173','id_municipio':'52','id_estado':'5','parroquia':'Parroquia No Urbana Magdaleno'
},{
'id_parroquia':'174','id_municipio':'52','id_estado':'5','parroquia':'Parroquia No Urbana San Francisco de Asi'
},{
'id_parroquia':'175','id_municipio':'52','id_estado':'5','parroquia':'Parroquia No Urbana Valles de Tucutunemo'
},{
'id_parroquia':'176','id_municipio':'52','id_estado':'5','parroquia':'Parroquia No Urbana Augusto Mijares'
},{
'id_parroquia':'177','id_municipio':'53','id_estado':'5','parroquia':'Parroquia Capital Francisco Linares Alca'
},{
'id_parroquia':'178','id_municipio':'53','id_estado':'5','parroquia':'Parroquia No Urbana Francisco de Miranda'
},{
'id_parroquia':'179','id_municipio':'53','id_estado':'5','parroquia':'Parroquia No Urbana Monsenor Feliciano G'
},{
'id_parroquia':'180','id_municipio':'54','id_estado':'5','parroquia':'Parroquia Capital Ocumare de La Costa de'
},{
'id_parroquia':'181','id_municipio':'55','id_estado':'6','parroquia':'Parroquia Sabaneta'
},{
'id_parroquia':'182','id_municipio':'55','id_estado':'6','parroquia':'Parroquia Rodriguez Dominguez'
},{
'id_parroquia':'183','id_municipio':'56','id_estado':'6','parroquia':'Parroquia Ticoporo'
},{
'id_parroquia':'184','id_municipio':'56','id_estado':'6','parroquia':'Parroquia Andres Bello'
},{
'id_parroquia':'185','id_municipio':'56','id_estado':'6','parroquia':'Parroquia Nicolas Pulido'
},{
'id_parroquia':'186','id_municipio':'57','id_estado':'6','parroquia':'Parroquia Arismendi'
},{
'id_parroquia':'187','id_municipio':'57','id_estado':'6','parroquia':'Parroquia Guadarrama'
},{
'id_parroquia':'188','id_municipio':'57','id_estado':'6','parroquia':'Parroquia La Union'
},{
'id_parroquia':'189','id_municipio':'57','id_estado':'6','parroquia':'Parroquia San Antonio'
},{
'id_parroquia':'190','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Barinas'
},{
'id_parroquia':'191','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Alfredo Arvelo Larriva'
},{
'id_parroquia':'192','id_municipio':'58','id_estado':'6','parroquia':'Parroquia San Silvestre'
},{
'id_parroquia':'193','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Santa Ines'
},{
'id_parroquia':'194','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Santa Lucia'
},{
'id_parroquia':'195','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Torunos'
},{
'id_parroquia':'196','id_municipio':'58','id_estado':'6','parroquia':'Parroquia El Carmen'
},{
'id_parroquia':'197','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Romulo Betancourt'
},{
'id_parroquia':'198','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Corazon de Jesus'
},{
'id_parroquia':'199','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Ramon Ignacio Mendez'
},{
'id_parroquia':'200','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Alto Barinas'
},{
'id_parroquia':'201','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Manuel Palacio Fajardo'
},{
'id_parroquia':'202','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Juan Antonio Rodriguez Domingu'
},{
'id_parroquia':'203','id_municipio':'58','id_estado':'6','parroquia':'Parroquia Dominga Ortiz de Paez'
},{
'id_parroquia':'204','id_municipio':'59','id_estado':'6','parroquia':'Parroquia Barinitas'
},{
'id_parroquia':'205','id_municipio':'59','id_estado':'6','parroquia':'Parroquia Altamira'
},{
'id_parroquia':'206','id_municipio':'59','id_estado':'6','parroquia':'Parroquia Calderas'
},{
'id_parroquia':'207','id_municipio':'60','id_estado':'6','parroquia':'Parroquia Barrancas'
},{
'id_parroquia':'208','id_municipio':'60','id_estado':'6','parroquia':'Parroquia El Socorro'
},{
'id_parroquia':'209','id_municipio':'60','id_estado':'6','parroquia':'Parroquia Masparrito'
},{
'id_parroquia':'210','id_municipio':'61','id_estado':'6','parroquia':'Parroquia Santa Barbara'
},{
'id_parroquia':'211','id_municipio':'61','id_estado':'6','parroquia':'Parroquia Jose Ignacio del Pumar'
},{
'id_parroquia':'212','id_municipio':'61','id_estado':'6','paroquia':'Parroquia Pedro Briceno Mendez'
},{
'id_parroquia':'213','id_municipio':'61','id_estado':'6','paroquia':'Parroquia Ramon Ignacio Mendez'
},{
'id_parroquia':'214','id_municipio':'62','id_estado':'6','parroquia':'Parroquia Obispos'
},{
'id_parroquia':'215','id_municipio':'62','id_estado':'6','parroquia':'Parroquia El Real'
},{
'id_parroquia':'216','id_municipio':'62','id_estado':'6','parroquia':'Parroquia La Luz'
},{
'id_parroquia':'217','id_municipio':'62','id_estado':'6','parroquia':'Parroquia Los Guasimitos'
},{
'id_parroquia':'218','id_municipio':'63','id_estado':'6','parroquia':'Parroquia Ciudad Bolivia'
},{
'id_parroquia':'219','id_municipio':'63','id_estado':'6','parroquia':'Parroquia Ignacio Briceno'
},{
'id_parroquia':'220','id_municipio':'63','id_estado':'6','parroquia':'Parroquia Jose Felix Ribas'
},{
'id_parroquia':'221','id_municipio':'63','id_estado':'6','parroquia':'Parroquia Paez'
},{
'id_parroquia':'222','id_municipio':'64','id_estado':'6','parroquia':'Parroquia Libertad'
},{
'id_parroquia':'223','id_municipio':'64','id_estado':'6','parroquia':'Parroquia Dolores'
},{
'id_parroquia':'224','id_municipio':'64','id_estado':'6','parroquia':'Parroquia Palacios Fajardo'
},{
'id_parroquia':'225','id_municipio':'64','id_estado':'6','parroquia':'Parroquia Santa Rosa'
},{
'id_parroquia':'226','id_municipio':'65','id_estado':'6','parroquia':'Parroquia Ciudad de Nutrias'
},{
'id_parroquias':'227','id_municipio':'65','id_estado':'6','parroquias':'Parroquia El Regalo'
},{
'id_parroquias':'228','id_municipio':'65','id_estado':'6','parroquias':'Parroquia Puerto de Nutrias'
},{
'id_parroquias':'229','id_municipio':'65','id_estado':'6','parroquias':'Parroquia Santa Catalina'
},{
'id_parroquia':'230','id_municipio':'66','id_estado':'6','parroquia':'Parroquia El Canton'
},{
'id_parroquia':'231','id_municipio':'66','id_estado':'6','parroquia':'Parroquia Santa Cruz de Guacas'
},{
'id_parroquia':'232','id_municipio':'66','id_estado':'6','parroquia':'Parroquia Puerto Vivas'
},{
	'id_parroquia':'233','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Cachamay'
},{
'id_parroquia':'234','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Chirica'
},{
'id_parroquia':'235','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Dalla Costa'
},{
'id_parroquia':'236','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Once de Abril'
},{
'id_parroquia':'237','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Simon Bolivar'
},{
'id_parroquia':'238','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Unare'
},{
'id_parroquia':'239','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Universidad'
},{
'id_parroquia':'240','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Vista al Sol'
},{
'id_parroquia':'241','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Pozo Verde'
},{
'id_parroquia':'242','id_municipio':'67','id_estado':'7','parroquia':'Parroquia Yocoima'
},{
'id_parroquia':'243','id_municipio':'68','id_estado':'7','parroquia':'Seccion Capital Cedeno'
},{
'id_parroquia':'244','id_municipio':'68','id_estado':'7','parroquia':'Parroquia Altagracia'
},{
'id_parroquia':'245','id_municipio':'68','id_estado':'7','parroquia':'Parroquia Ascension Farreras'
},{
'id_parroquia':'246','id_municipio':'68','id_estado':'7','parroquia':'Parroquia Guaniamo'
},{
'id_parroquia':'247','id_municipio':'68','id_estado':'7','parroquia':'Parroquia La Urbana'
},{
'id_parroquia':'248','id_municipio':'68','id_estado':'7','parroquia':'Parroquia Pijiguaos'
},{
'id_parroquia':'249','id_municipio':'69','id_estado':'7','parroquia':'Parroquia Capital El Callao'
},{
'id_parroquia':'250','id_municipio':'70','id_estado':'7','parroquia':'Seccion Capital Gran Sabana'
},{
'id_parroquia':'251','id_municipio':'70','id_estado':'7','parroquia':'Parroquia Ikabaru'
},{
'id_parroquia':'252','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Agua Salada'
},{
'id_parroquia':'253','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Catedral'
},{
'id_parroquia':'254','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Jose Antonio Paez'
},{
'id_parroquia':'255','id_municipio':'71','id_estado':'7','parroquia':'Parroquia La Sabanita'
},{
'id_parroquia':'256','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Marhuanta'
},{
'id_parroquia':'257','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Vista Hermosa'
},{
'id_parroquia':'258','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Orinoco'
},{
'id_parroquia':'259','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Panapana'
},{
'id_parroquia':'260','id_municipio':'71','id_estado':'7','parroquia':'Parroquia Zea'
},{
'id_parroquia':'261','id_municipio':'72','id_estado':'7','parroquia':'Seccion Capital Piar'
},{
'id_parroquia':'262','id_municipio':'72','id_estado':'7','parroquia':'Parroquia Andres Eloy Blanco'
},{
'id_parroquia':'263','id_municipio':'72','id_estado':'7','parroquia':'Parroquia Pedro Cova'
},{
'id_parroquia':'264','id_municipio':'73','id_estado':'7','parroquia':'Seccion Capital Raul Leoni'
},{
'id_parroquia':'265','id_municipio':'73','id_estado':'7','parroquia':'Parroquia Barceloneta'
},{
'id_parroquia':'266','id_municipio':'73','id_estado':'7','parroquia':'Parroquia San Francisco'
},{
'id_parroquia':'267','id_municipio':'73','id_estado':'7','parroquia':'Parroquia Santa Barbara'
},{
'id_parroquia':'268','id_municipio':'74','id_estado':'7','parroquia':'Seccion Capital Roscio'
},{
'id_parroquia':'269','id_municipio':'74','id_estado':'7','parroquia':'Parroquia Salom'
},{
'id_parroquia':'270','id_municipio':'75','id_estado':'7','parroquia':'Seccion Capital Sifontes'
},{
'id_parroquia':'271','id_municipio':'75','id_estado':'7','parroquia':'Parroquia Dalla Costa'
},{
'id_parroquia':'272','id_municipio':'75','id_estado':'7','parroquia':'Parroquia San Isidro'
},{
'id_parroquia':'273','id_municipio':'76','id_estado':'7','parroquia':'Seccion Capital Sucre'
},{
'id_parroquia':'274','id_municipio':'76','id_estado':'7','parroquia':'Parroquia Aripao'
},{
'id_parroquia':'275','id_municipio':'76','id_estado':'7','parroquia':'Parroquia Guarataro'
},{
'id_parroquia':'276','id_municipio':'76','id_estado':'7','parroquia':'Parroquia Las Majadas'
},{
'id_parroquia':'277','id_municipio':'76','id_estado':'7','parroquia':'Parroquia Moitaco'
},{
'id_parroquia':'278','id_municipio':'77','id_estado':'7','parroquia':'Parroquia Capital Padre Pedro Chien'
},{
'id_parroquia':'279','id_municipio':'78','id_estado':'8','parroquia':'Parroquia Urbana Bejuma'
},{
'id_parroquia':'280','id_municipio':'78','id_estado':'8','parroquia':'Parroquia No Urbana Canoabo'
},{
'id_parroquia':'281','id_municipio':'78','id_estado':'8','parroquia':'Parroquia No Urbana Simon Bolivar'
},{
'id_parroquia':'282','id_municipio':'79','id_estado':'8','parroquia':'Parroquia Urbana Guigue'
},{
'id_parroquia':'283','id_municipio':'79','id_estado':'8','parroquia':'Parroquia No Urbana Belen'
},{
'id_parroquia':'284','id_municipio':'79','id_estado':'8','parroquia':'Parroquia No Urbana Tacarigua'
},{
'id_parroquia':'285','id_municipio':'80','id_estado':'8','parroquia':'Parroquia Urbana Aguas Calientes'
},{
'id_parroquia':'286','id_municipio':'80','id_estado':'8','parroquia':'Parroquia Urbana Mariara'
},{
'id_parroquia':'287','id_municipio':'81','id_estado':'8','parroquia':'Parroquia Urbana Ciudad Alianza'
},{
'id_parroquia':'288','id_municipio':'81','id_estado':'8','parroquia':'Parroquia Urbana Guacara'
},{
'id_parroquia':'289','id_municipio':'81','id_estado':'8','parroquia':'Parroquia No Urbana Yagua'
},{
'id_parroquia':'290','id_municipio':'82','id_estado':'8','parroquia':'Parroquia Urbana Moron'
},{
'id_parroquia':'291','id_municipio':'82','id_estado':'8','parroquia':'Parroquia No Urbana Urama'
},{
'id_parroquia':'292','id_municipio':'83','id_estado':'8','parroquia':'Parroquia Urbana Tocuyito'
},{
'id_parroquia':'293','id_municipio':'83','id_estado':'8','parroquia':'Parroquia Urbana Independencia'
},{
'id_parroquia':'294','id_municipio':'84','id_estado':'8','parroquia':'Parroquia Urbana Los Guayos'
},{
'id_parroquia':'295','id_municipio':'85','id_estado':'8','parroquia':'Parroquia Urbana Miranda'
},{
'id_parroquia':'296','id_municipio':'86','id_estado':'8','parroquia':'Parroquia Urbana Montalban'
},{
'id_parroquia':'297','id_municipio':'87','id_estado':'8','parroquia':'Parroquia Urbana Naguanagua'
},{
'id_parroquia':'298','id_municipio':'88','id_estado':'8','parroquia':'Parroquia Urbana Bartolome Salom'
},{
'id_parroquia':'299','id_municipio':'88','id_estado':'8','parroquia':'Parroquia Urbana Democracia'
},{
'id_parroquia':'300','id_municipio':'88','id_estado':'8','parroquia':'Parroquia Urbana Fraternidad'
},{
'id_parroquia':'301','id_municipio':'88','id_estado':'8','parroquia':'Parroquia Urbana Goaigoaza'
},{
'id_parroquia':'302','id_municipio':'88','id_estado':'8','parroquia':'Parroquia Urbana Juan Jose Flores'
},{
'id_parroquia':'303','id_municipio':'88','id_estado':'8','parroquia':'Parroquia Urbana Union'
},{
'id_parroquia':'304','id_municipio':'88','id_estado':'8','parroquia':'Parroquia No Urbana Borburata'
},{
'id_parroquia':'305','id_municipio':'88','id_estado':'8','parroquia':'Parroquia No Urbana Patanemo'
},{
'id_parroquia':'306','id_municipio':'89','id_estado':'8','parroquia':'Parroquia Urbana San Diego'
},{
'id_parroquia':'307','id_municipio':'90','id_estado':'8','parroquia':'Parroquia Urbana San Joaquin'
},{
'id_parroquia':'308','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana Candelaria'
},{
'id_parroquia':'309','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana Catedral'
},{
'id_parroquia':'310','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana El Socorro'
},{
'id_parroquia':'311','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana Miguel Pena'
},{
'id_parroquia':'312','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana Rafael Urdaneta'
},{
'id_parroquia':'313','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana San Blas'
},{
'id_parroquia':'314','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana San Jose'
},{
'id_parroquia':'315','id_municipio':'91','id_estado':'8','parroquia':'Parroquia Urbana Santa Rosa'
},{
'id_parroquia':'316','id_municipio':'91','id_estado':'8','parroquia':'Parroquia No Urbana Negro Primero'
},{
'id_parroquia':'317','id_municipio':'92','id_estado':'9','parroquia':'Parroquia Cojedes'
},{
'id_parroquia':'318','id_municipio':'92','id_estado':'9','parroquia':'Parroquia Juan de Mata Suarez'
},{
'id_parroquia':'319','id_municipio':'93','id_estado':'9','parroquia':'Parroquia Tinaquillo'
},{
'id_parroquia':'320','id_municipio':'94','id_estado':'9','parroquia':'Parroquia El Baul'
},{
'id_parroquia':'321','id_municipio':'94','id_estado':'9','parroquia':'Parroquia Sucre'
},{
'id_parroquia':'322','id_municipio':'95','id_estado':'9','parroquia':'Parroquia Macapo'
},{
'id_parroquia':'323','id_municipio':'95','id_estado':'9','parroquia':'Parroquia La Aguadita'
},{
'id_parroquia':'324','id_municipio':'96','id_estado':'9','parroquia':'Parroquia El Pao'
},{
'id_parroquia':'325','id_municipio':'97','id_estado':'9','parroquia':'Parroquia Libertad de Cojedes'
},{
'id_parroquia':'326','id_municipio':'97','id_estado':'9','parroquia':'Parroquia El Amparo'
},{
'id_parroquia':'327','id_municipio':'98','id_estado':'9','parroquia':'Parroquia Romulo Gallegos'
},{
'id_parroquia':'328','id_municipio':'99','id_estado':'9','parroquia':'Parroquia San Carlos de Austria'
},{
'id_parroquia':'329','id_municipio':'99','id_estado':'9','parroquia':'Parroquia Juan Angel Bravo'
},{
'id_parroquia':'329','id_municipio':'99','id_estado':'9','parroquia':'Parroquia Juan Angel Bravo'
},{
'id_parroquia':'330','id_municipio':'99','id_estado':'9','parroquia':'Parroquia Manuel Manrique'
},{
'id_parroquia':'331','id_municipio':'100','id_estado':'9','parroquia':'Parroquia General en Jefe Jose Laurencio'
}];

			$(document).ready(function() {
				var sestados = '<option value=""></option>';
				$(estados).each(function(i){
					var id_estado = this.id_estado+'_'+this.estado;
					sestados += '<option value="'+id_estado+'">'+this.estado+'</option>';
				});
				$('#estados').html(sestados);
				$('#estados').change(function(){ // evento que al ser modificado el select estados es llamado
					var estado = $('#estados').val(); //obtenemos el estado seleccionado
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
				});
				$('#municipios').change(function(){
					var estado = $('#estados').val();
					estado = estado.substring(0,estado.indexOf('_'));
					var municipio = $('#municipios').val();
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
				});
			    $(".AddPago").click(function() {
			        $(this).parent().parent().parent().parent().children('.pago').toggle("slow");
			        $('#new_pedido_form').hide("slow");
			    });	

			    $('.pedidos').click(function() {
			    	if ($('.mis_pedidos').is(":visible")){
			    		$('.pedidos').children('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
			    	}else{
			    		$('.pedidos').children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
			    	}
			        $('.mis_pedidos').toggle("slow");
			    });	 
			    $('.add_pedido').click(function() {
			    	$('.pago').hide("slow");
			        $('#new_pedido_form').toggle("slow");
			    });	 
				$( "#selectPago" ).change(function () {
				    $( "select option:selected" ).each(function() {
				    	switch ( $( this ).text()){
				    		case "Deposito":
				    			$(".tipoPago").hide();
				    			$(".deposito").show();
				    			$("#camposRequeridos").show();
				    		break;
				    		case "Transferencia":
				    			$(".tipoPago").hide();
				    			$(".transferencia").show();
				    			$("#camposRequeridos").show();
				    		break;
				    		case "Tienda":
				    			
				    			$("#camposRequeridos").hide();
				    			$(".tipoPago").hide();
				    			$(".tienda").show();
				    		break;
				    	}
				    });
				  }).change();
			});