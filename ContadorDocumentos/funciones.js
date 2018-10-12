
function ajax(metodos, url) {
	var xmlhttp = new XMLHttpRequest();
	var respuesta = '';
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			mostrarContador(JSON.parse(this.responseText))
		}
	};
	xmlhttp.open(metodos, url, true);
	xmlhttp.send();
	return respuesta;
}

ajax('GET', './contador.php');

//Variable que guarda el numero del documento en el que va.
//Creo que cada dependencia tiene su propio contador (creo).
var contador_dec = 0;
var contador_sis = 0;
var contador_elec = 0;

function cargarDependencias() {
    //Este es el vector donde se guardan cada una de las dependencias que le pongamos
    //En la primera posicion de cada subvector se aguarda el numero que le corresponde a cada dependencia
    //y en la segunda posicion se guarda el nombre correspondiente.
    var array = [ [1,"Decanatura"], [4,"Ingenieria de Sistemas"], [5,"Ingenieria Electronica"] ];
    agregarOpciones("dependencias", array);
    
}

function cargarSubDependencias(){
    //Se establece las subdependencias que tendra cada una de las dependencias
    var listaSubDependencias = {
        1:[[1,"Decano"], [2,"Secretaria General"]],
        4:[[1,"Jefe de Departamaento"], [2,"Tesoreria"]],
        5:[[1,"Jefe de Departamaento"],[2,"Tesoreria"]]
    }
    //Se obtiene el valor escogido en el Select de Dependencias
    var selectDependencias = document.getElementById("dependencias");            
    var dependenciaSeleccionada = selectDependencias.value;   

    //Se eliminan las opciones que hayan en el Select de Subdependencias
    document.getElementById("subDependencias").innerHTML='<option value="">Seleccione SubDependencia</option>';
    
    if (dependenciaSeleccionada != ''){
        //Se obtiene la lista de valores que le corresponde a la dependencia escogida
        dependenciaSeleccionada = listaSubDependencias[dependenciaSeleccionada];
        //Se mandan los elementos de esa lista que se muestren como opciones en el Select de Subdependencias
        agregarOpciones("subDependencias",dependenciaSeleccionada);
    } else{
        document.getElementById("subDependencias").innerHTML='<option value="">Seleccione Dependencia Primero</option>';
    }

}
//Esta funcion agrega todos los elementos que le manden en un arreglo a las opciones de un Select
function agregarOpciones(domElement, array) {
    var seleccion=document.getElementById(domElement);
    for (elemento in array) {
        var opcion = document.createElement("option");
        opcion.text = array[elemento][1]+" ("+array[elemento][0]+")";
        opcion.value = array[elemento][0];
        seleccion.add(opcion);
    }    

}
function mostrarBoton(){
    document.getElementById("boton1").style.display="block";
}
function ocultarBoton(){
    document.getElementById("boton1").style.display="none";
}
//Esta funcion es para mostrar el nombre del archivo basado en la dependencia, subdependencia y contador de documentos
function mostrarNombre(datos){
    var result=document.getElementById("resultado");
    var cont=document.querySelector("#cont1");
    var numDependencia = document.getElementById("dependencias").value;
    var numSubDependencia = document.getElementById("subDependencias").value;
    if (document.getElementById("dependencias").value == "1"){
        contador_dec=contador_dec+1;
        result.innerHTML="8."+numDependencia+"."+numSubDependencia+"/"+contador_dec;
        document.getElementById("division").style.backgroundColor='blue';
        ajax('GET', './contador.php?cont1='+contador_dec);
    }
    if (document.getElementById("dependencias").value == "4"){
        contador_sis=contador_sis+1;
        result.innerHTML="8."+numDependencia+"."+numSubDependencia+"/"+contador_sis;
        document.getElementById("division").style.backgroundColor='yellow';
        ajax('GET', './contador.php?cont2='+contador_sis);
    }
    if (document.getElementById("dependencias").value == "5"){
        contador_elec=contador_elec+1;
        result.innerHTML="8."+numDependencia+"."+numSubDependencia+"/"+contador_elec;
        document.getElementById("division").style.backgroundColor='green';
        ajax('GET', './contador.php?cont3='+contador_elec);
    }    
    
            
}
function mostrarContador(datos){
    ajax('GET', './contador.php');
    var cont=document.getElementById("cont1");
    cont.value=datos[0].cont_decanatura;
    contador_dec = datos[0].cont_decanatura;
    //ajax('GET', './contador.php?cont1='+contador_dec);

    cont=document.getElementById("cont2");
    cont.value=datos[1].cont_sistemas;
    contador_sis = datos[1].cont_sistemas;
    //ajax('GET', './contador.php?cont2='+contador_sis);

    cont=document.getElementById("cont3");
    cont.value=datos[2].cont_electronica;
    contador_elec = datos[2].cont_electronica;
    //ajax('GET', './contador.php?cont3='+contador_elec);
}