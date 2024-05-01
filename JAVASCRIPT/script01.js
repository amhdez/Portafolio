//Condiciones if/else

let numero = 0; 

if (numero > 5) { // Si el valor de la variable numero (O) es mayor que 5
    console.log("El numero es positivo"); // da este resultado 
} else if (numero < 0) { // si no se cumple 
    console.log("El numero es negativo");
}
else{ console.log("El numero es negativo o igual 0"); // si lo anterior no se cumple
}

let multiplo = 7; 


7 != "5"// Igualdad abstracta
7 !== "5" // Igualdad estricta

console.log (5 === "5") // false por el tipo de dato 
console.log 

let dato = 5; 
if (dato < 10 ) {
    console.log("Si el numero es menor a 10 le va a sumar" );
 } else if ( dato > 10 ) { console.log("Si el numero es mayor a 10 le va a restar");
} else ( dato != 10 ); { console.log("El numero es igual");
}

// Se evalua una a una - una de ellas sa el resultado
let dia2 = "soleado"; 
let temperatura2 = 80; 

if ( dia2 === "lluvia" || temperatura2 <40) 
{ console.log(" vamos a ir al campo a comer helado")}
else if ( dia2 === "lluvia" || temperatura2 <= 40) {
    console.log (" No es posible salir")
} else { console.log("Nada")}


let manzanas = 100;
let peras = 120;
let bananas = 80; 
let compra = manzanas + peras + bananas;  

//Condicionales switch

let nota = 5; 
console.log("El resultado es:");

switch (nota) {
    case 10:
        calificacion ="Excelente";
        break; 
    case 9: 
    case 8: 
        calificacion = "Sobresaliente";
        break; 
    case 7:
    case 6:  
        calificacion = "Buena"
        break; 
    case 5: 
        calificacion = "Aceptable"
        break; 
    default: 
        calificacion = " Mala"
}

console.log("Su calificacion es", calificacion);

// Bucle while

let i = 0;

while ( i < 5 ) { 
    console.log ("valor de i", i);
    i = i +1; 
}

let elemento =  4 ;

while (elemento <= 20) {
    console.log( "mi elemento es", elemento);
    elemento = elemento + 2;
}

