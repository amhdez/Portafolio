function agregarElemento(){
    var nuevoElemento = document.createElement("p");
    nuevoElemento.innerText = "Nuevo Elemento";
    document.getElementById("contenedor").appendChild(nuevoElemento);// tome el contenedor y dale la posibilidada de agregar un hijo. 
}
function eliminarElemento(){
    var contenedor = document.getElementById("contenedor"); // acceda por Id
    var elemento = contenedor.getElementsByTagName("p");// acceda por las etiquetas con nombre
    if (elemento.length > 0){
        contenedor.removeChild(elemento[elemento.length -1]);// Remover los ultimos elementos
    }
}
function agregarSaludo() {
    var saluda = document.createElement("p");
    saluda.innerTex  = "Hola Mundo";
    document.getElementById("contenedor1").appendChild(saluda);
}