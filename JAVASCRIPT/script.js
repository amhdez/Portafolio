let inventario = [];
let continuar;

do {
    let nombreArticulo = prompt("Ingrese por favor el nombre del articulo:");
    let cantidadArticulo = parseInt(prompt("Ingrese la cantidad del articulo: "));

    inventario.push({nombreArticulo, cantidadArticulo});

    let respuesta = prompt("¿Desea agregar mas articulos(si/no)?").toLowerCase();
   
    continuar = (respuesta === "si");
} while (continuar); 

console.log("Tu pedido final: ", inventario); 


   