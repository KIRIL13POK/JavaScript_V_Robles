/*"use strict"
//es una esructura de  control que se repite varias veces
let numero = 100;
for(var i = 0; i<numero; i++){
    console.log("Vamos por el numero:" +i);
}*/
// de este modo  no llega a 100:i<numero; <= nos permite llegar a 100.
"use strict"
//es una esructura de  control que se repite varias veces
let numero = 10;
for (var i = 0; i <= numero; i++) {
    console.log("Vamos por el numero:" + i);
}
let num2 = 10;
for (let i = 0; i <= num2; i++) {
    console.log(i);
}
let num3 = 11;
for (let i = 0; i <= num2; i++) {
    console.log("2." + i);
}
let num4 = 12;
for (let i = 0; i <= num3; i++) {
    console.log("3." + i);
}

let num5 = 13;
for (let i = 0; i <= num5; i++) {
    console.log("4." + i);
}

//bucleUno

let bucleUno = 10;
for (let i = 0; i <= bucleUno; i++) {
    document.write("<h2>bucleUno" + i + "<br></h2>")
    if (i == bucleUno) {
        document.write("<hr>")
    }
}

//bucleDos
let bucleDos = 2;
for (let i = 0; i <= bucleDos; i++) {
    document.write("<h2>bucleDos" + i + "<br></h2>")
    if (i == bucleDos) {
        document.write("<hr>")
    }
}




//bucleTres
let bucleTres = 3;
for (let i = 0; i <= bucleTres; i++) {
    document.write("<h2>bucleTres" + i + "<br></h2>")
    if (i == bucleTres) {
        document.write("<hr>")
    }
}


//bucleDosFila
let bucleDosFila = 2;

document.write("<h2>bucleDosFila:</h2>");

for (let i = 0; i <= bucleDosFila; i++) {
    if (i < bucleDosFila) {
        document.write(i + ", ")
    };



    if (i == bucleDosFila) {
        document.write(i + ". ")
        document.write("<hr>")

    }
};
// bucleTresFila

let bucleNueveFila = 9;
document.write("<b>bucleNueveFila: '</b>")
for (let i = 0; i <= bucleNueveFila; i++) {
    // i+=4; eto ravno i=i+4;

    if (i < bucleNueveFila) {
        document.write(i + ", ")
    }
    else {
        document.write(i + ".")
    };




    if (i == bucleNueveFila) {
        // document.write(i+ ".")
        document.write("  <hr>")
    }
}






/*Puedes pensar en un bucle como una versión computarizada del juego en la que le dices a alguien que dé X pasos en una dirección y luego Y pasos en otra. Por ejemplo, la idea "Ve cinco pasos hacia el este" se podría expresar de esta manera como un bucle:*/
for (let step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log('Camina un paso hacia el este');
}
//1
for (let step = 0; step < 5; step++) {
    console.log("Bucle for 1");
}
//2
for (let step = 0; step < 5; step++) {
    console.log("Bucle for 2")
}
//3

for (let step = 0; step < 5; step++) {
    console.log("bucle for 3")
}
for (let step = 0; step < 5; step++) {
    console.log("Bucle for 4")
}
for (let step = 0; step < 5; step++) {
    console.log("Bucle for 5")
}
//numeroLibre

let numeroLibre = 13;


for (i = 0; i < numeroLibre; i++) {

}
/*
let madrugada = 50;
document.write("Bucle de insomio:");
for (let j = 1; j <= 50; j++){
    if(j < madrugada){
        document.write(j+" ,")
    }else(j = madrugada)
        document.write(j+" .")
    };
*/

    let madrugada2 = 50;
    document.write("<b>Bucle de insommio:</b>");
    for(let k = 1; k<=madrugada2;k++){
        if(k<madrugada2){
            document.write(k+" ,");
        }else{
        document.write(k+ ".")
        }
    }
  