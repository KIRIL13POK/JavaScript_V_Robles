"use strict"
const universoSpiderMan = ["Spider-Man (21 de junio de 2002)", "Spider-Man 2 (14 de julio de 2004)", "Spider-Man 3 (4 de mayo de 2007)", "The Amazing Spider-Man (3 de julio de 2012)", "The Amazing Spider-Man 2: El poder de Electro (17 de abril de 2014)", "Marvel Studios] Spider-Man: Homecoming (28 de julio de 2017)", "Venom (5 de octubre de 2018)", "Spider-Man: un nuevo universo (21 de diciembre de 2018)", "[Marvel Studios] Spider-Man: Lejos de Casa (26 de junio de 2019)", "Venom: Habrá Matanza (1 de octubre de 2021)", "[Marvel Studios] Spider-Man: No Way Home (13 de diciembre de 2021)", "Morbius (1 de abril de 2022)"]

let vacio = [];
universoSpiderMan.forEach(dividir);

function dividir(i, index) {
    let modificado = i.split(/[()]/);

    modificado[0] = modificado[0].slice(0, -1);
    modificado.splice(2, 1)

    vacio.push(modificado);
};

console.log("vacio  :" + JSON.stringify(vacio, null, '\t'));
