"use strict"
  

let marcasDeCoches=["Audi Quattro (1982) Audi AG.","Chevrolet Corvette (1958) Chevrolet.","Citröen DS 19 (1955) DS.","Ferrari F-40 (1987) Ferrari.","Fiat 500 (1957) Fiat.","Ford T (1913) Ford.","Isetta (1955) BMW."

]
console.log(marcasDeCoches);
let resultadoFinal=[]
marcasDeCoches.forEach(dividir);

function dividir(i,index){
   let modificacion = i.split(/[()]/);
   modificacion[0]=modificacion[0].slice(0,-1);
   modificacion[2]=modificacion[2].slice(0,-1);
   resultadoFinal.push(modificacion);

}
console.log(resultadoFinal);
console.log(resultadoFinal.length);

