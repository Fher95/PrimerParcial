var contador = 0;

function cargarDependencias() {
    var array = [ [1,"Decanatura"], [4,"Ingenieria de Sistemas"], [5,"Ingenieria Electronica"] ];
    agregarOpciones("dependencias", array);
    
}

function cargarSubDependencias(){
    //Se establece las subdependencias que tendra cada una de las dependencias
    var listaSubDependencias = {
        1:[[1,"Decano"], [2,"Secretaria General"]],
        4:[[1,"Jeje de Departamaento"], [2,"Tesoreria"]],
        5:[[1,"Jeje de Departamaento"],[2,"Tesoreria"]]
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
function mostrarNombre(){
    var result=document.getElementById("resultado")
    var numDependencia = document.getElementById("dependencias").value;
    var numSubDependencia = document.getElementById("subDependencias").value;
    result.innerHTML=numDependencia+"."+numSubDependencia+"."+contador;
    contador=contador+1;
}