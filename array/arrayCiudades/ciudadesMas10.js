"use strict";

/*
-1- Añadir elemento al final y al principio.
-2- Añadir entre elementos de array  Bombay y Manila.
-3- Extraer el primero y el ultimo elemento y mostrar los por la consola.
-4- Cambiar el valor: Cantón ,Bombay,Karachi.
-5- Mostrar cantidad de elementos.
-6- Mostrar por la consola ciudades:Manila, Delhi,Ciudad de México.
********************/

const ciudadesMas10 = ["Tokio (Japón): 39,4 millones"," Cantón (China): 32,6 millones",". Shanghái (China): 29,6 millones","Yakarta (Indonesia): 27 millones","Delhi (India): 25,3 millones","Seúl (Corea): 24,2 millones"," Karachi (Pakistán): 23,2 millones"," Bombay (India): 22,6 millones"," Manila (Filipinas): 22,5 millones","Ciudad de México (México): 22,2 millones"]

//******************1********************
console.log(ciudadesMas10);
//1
ciudadesMas10.unshift("Staryy Oskol");
ciudadesMas10.push("A Coruña");
//2
ciudadesMas10.splice(7,0,"****!!!****");
//3
const primerElemento = ciudadesMas10.shift();
console.log(primerElemento);
const ultimoElemento = ciudadesMas10.pop();
console.log(ultimoElemento);
//4

ciudadesMas10[8]= " BOMBAY (INDIA): 22,6 millones";
ciudadesMas10[1]= " CANTON (CHINA): 32,6 millones";
ciudadesMas10[7]= " KARACHI (PAKISTÁN): 23,2 millones";
//5
console.log(ciudadesMas10.length);
//6
console.log(ciudadesMas10[8]);
console.log(ciudadesMas10[4]);
console.log(ciudadesMas10[9]);
