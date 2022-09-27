"use strict"
let ciudadesMas10 =["Tokio (Japón): 39,4 millones"," Cantón (China): 32,6 millones",". Shanghái (China): 29,6 millones","Yakarta (Indonesia): 27 millones","Delhi (India): 25,3 millones","Seúl (Corea): 24,2 millones"," Karachi (Pakistán): 23,2 millones"," Bombay (India): 22,6 millones"," Manila (Filipinas): 22,5 millones","Ciudad de México (México): 22,2 millones"]


console.log(ciudadesMas10);

let arrayModificado = ciudadesMas10.map(function callback(i,index){
    let modificado  = i.split(/[()]/);
    modificado[0]= modificado[0].slice(0,-1);
     modificado[2]=modificado[2].slice(2,modificado[2].length);

    return modificado;
    


});
console.log("los mejorres libros :" + JSON.stringify(arrayModificado, null, '\t'));