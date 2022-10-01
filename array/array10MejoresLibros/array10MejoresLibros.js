"use strict"
l
console.log(mejoresLibros10);

let nuevoArray = mejoresLibros10.map(function callback(i,index){
   let modificado = i.split(",")
   //console.log(modificado);
   //modificado[1] = modificado[1].slice(5,modificado[1].length)
  
  return modificado;
   



});
console.log("los mejorres libros :" + JSON.stringify(nuevoArray, null, '\t'));
