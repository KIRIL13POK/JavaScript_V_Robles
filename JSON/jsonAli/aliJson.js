"use strict"

let muhamedAli = {
    Nombre: "Cassius Marcellus Clay, Jr.",

    Apodo: ["The Louisville Lip", "The Champ ", "The Greatest, ", "The People's Champion"],
    Nacimiento: "17 de enero de 1942",
    Fallecimiento: "3 de junio de 2016",
    edadFallecimiento: 74,
    Altura: "1,91 m",
    
}

let carreraDeportiva = {
    deporte: "boxeo",
    estilo: "ortodoxo",
    Debut: "29 de octubre de 1960",
    Entrenador: "Angelo Dundee",
    Retirada: "11 de diciembre de 1981"
}
let combates = {
    Totales: 61,
    Victorias: 56,
    KO: 39,
    Decisión: 19,
    Derrotas: 5,
    DerotaKO: 1,
    DerotaDecisión: 4,
}



console.log(carreraDeportiva);
console.log(combates);


console.log(muhamedAli.Nombre);


let modificacion = muhamedAli.Apodo
console.log(modificacion);

console.log(modificacion.length);
modificacion[1] = modificacion[1].slice(0,-1);
modificacion[2] = modificacion[2].slice(0,-2)
console.log(modificacion[2].slice(0,-2));
console.log(muhamedAli.Apodo);
console.log(muhamedAli);



