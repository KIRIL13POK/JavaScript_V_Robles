"use strict"
let mejoresLibros10 =[
"1. Cien años de soledad, de Gabriel Garcia Márquez","2. Orgullo y prejuicio, de Jane Austen","3. Cumbres borascosas, de Emily Brontë","4. Cinco horas con Mario, de Miguel Delibes ","5. El guardian entre el centento, de J.D Salinger","6. El principito, de Antoine de Saint-Exupéry","7. A sangre fria, de Truman Capote","8. Los miserabrel, de Victor Hugo","9. El diario de Ana Frank","10. 1984, de George Orwell",
]
console.log(mejoresLibros10);

let nuevoArray = mejoresLibros10.map(function callback(i,index){
   let modificado = i.split(",")
   //console.log(modificado);
   //modificado[1] = modificado[1].slice(5,modificado[1].length)
  
  return modificado;
   



});
console.log("los mejorres libros :" + JSON.stringify(nuevoArray, null, '\t'));
