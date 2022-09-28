"use strict"
let mejoresLibros10 =[
    "1. Cien años de soledad, de Gabriel Garcia Márquez","2. Orgullo y prejuicio, de Jane Austen","3. Cumbres borascosas, de Emily Brontë","4. Cinco horas con Mario, de Miguel Delibes ","5. El guardian entre el centento, de J.D Salinger","6. El principito, de Antoine de Saint-Exupéry","7. A sangre fria, de Truman Capote","8. Los miserabrel, de Victor Hugo","9. El diario ,de Ana Frank","10. 1984, de George Orwell",
    ]
    console.log(mejoresLibros10);

    let resultadoFinal=mejoresLibros10.map(function callback(i,index){
       let modificacion = i.split(",");
       modificacion[1] = modificacion[1].slice(4,modificacion[1].length);
       /*probando cosas
       modificacion[0]=modificacion[0].split(".")
       modificacion[0][1]=modificacion[0][1].slice(1,modificacion[0][1].length);
       modificacion[0][0]=["Ranking: "+ modificacion[0][0]];
       modificacion[0][1]=["Titulo de libro: "+ modificacion[0][1]];
       modificacion[1]=["Autor: " + modificacion[1]];
       *************************************************/

       
       console.log(modificacion.length);

       return modificacion

    });
console.log(resultadoFinal);
console.log("los 10 mejores libros :" + JSON.stringify(resultadoFinal, null, '\t'));


