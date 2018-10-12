<?php

  date_default_timezone_set('America/Bogota');

  $nombreArchivo="dependencias.json";

  if(isset($_GET["cont1"])){
           
        $valor = intval(($_GET["cont1"]));
        $archivo = json_decode(file_get_contents($nombreArchivo));        
        $archivo[0]->cont_decanatura = $valor;
        
        file_put_contents($nombreArchivo, json_encode($archivo));
        
    }
    if(isset($_GET["cont2"])){
           
        $valor = intval(($_GET["cont2"]));
        $archivo = json_decode(file_get_contents($nombreArchivo));        
        $archivo[1]->cont_sistemas = $valor;
        
        file_put_contents($nombreArchivo, json_encode($archivo));
        
    }
    if(isset($_GET["cont3"])){
           
        $valor = intval(($_GET["cont3"]));
        $archivo = json_decode(file_get_contents($nombreArchivo));        
        $archivo[2]->cont_electronica = $valor;
        
        file_put_contents($nombreArchivo, json_encode($archivo));
        
    }

  echo  file_get_contents($nombreArchivo);
  exit();
?>