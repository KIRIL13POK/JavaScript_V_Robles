"use strict"


let ciudadesMas10 =["Tokio (Japón): 39,4 millones"," Cantón (China): 32,6 millones",". Shanghái (China): 29,6 millones","Yakarta (Indonesia): 27 millones","Delhi (India): 25,3 millones","Seúl (Corea): 24,2 millones"," Karachi (Pakistán): 23,2 millones"," Bombay (India): 22,6 millones"," Manila (Filipinas): 22,5 millones","Ciudad de México (México): 22,2 millones"]

console.log(ciudadesMas10);
let ciudadesResultadoFinal=[]
ciudadesMas10.forEach(modificarCiudades);

 function modificarCiudades (i,index, array){
 let modificado= i.split(/[()]/);
 modificado[0]=modificado[0].slice(0,-1);
 modificado[2]=modificado[2].slice(2,modificado[2].lenght);
//Para probar y ver como queda:
 modificado[0]=["Ciudad:" + modificado[0]];
 modificado[1]=["Pais: "+ modificado[1]];
 modificado[2]=["Habitantes: "+ modificado[2]];
 ciudadesResultadoFinal.push(modificado);
 };
 ciudadesResultadoFinal.forEach((elemento,index,array)=>{
       console.log(elemento,index)


 });
 

 console.log("Lista de 10 ciudades mas grandes del mundo:" + JSON.stringify(ciudadesResultadoFinal, null, '\t'));



