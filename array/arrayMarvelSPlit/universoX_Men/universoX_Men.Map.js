"use strict"
var universoX_Men = ["X-Men (2000)", "X-Men 2 (2003)", "X-Men: La decisión final (2006)", "X-Men Orígenes: Lobezno (2009)", "X-Men: Primera generación (2011)", "Lobezno inmortal (2013)", "X-Men: Días del futuro pasado (2014)", "Deadpool (2016)", "Lobezno inmortal (2013)", "Deadpool (2016)", "Deadpool 2 (2018)", "Los nuevos mutantes (2020)", "Logan (2017)"]


console.log(universoX_Men);


var nuevo_array = universoX_Men.map(function callback(i, index, array) {
    var modificado = i.split(/[()]/)
    modificado.pop()
    modificado[0] = modificado[0].slice(0, -1);
    return modificado;



});
console.log("x-men  :" + JSON.stringify(nuevo_array, null, '\t'));
