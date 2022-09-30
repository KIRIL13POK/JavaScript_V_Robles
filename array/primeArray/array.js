"use strict"


//Orden cronologico.
const marvelOrdenCronologico = ["Capitán América: El Primer Vengador (2011) - Nota: 80", "Capitana Marvel (2019) - Nota: 79", "Iron Man (2008) - Nota: 94", "El Increíble Hulk (2008) - Nota: 67", "Iron Man 2 (2010) - Nota: 72", "Thor (2011) - Nota: 77", "Los Vengadores (2012) - Nota: 92", "Iron Man 3 (2013) - Nota: 79", "Thor: El mundo oscuro (2013) - Nota: 66", "Capitán América: El soldado de invierno (2014) - Nota: 90","Guardianes de la Galaxia (2014) - Nota: 91","Guardianes de la Galaxia 2 (2017) - Nota: 85","Los Vengadores: Era de Ultrón (2015) - Nota: 77","Ant-Man (2015) - Nota: 83","Capitán América: Civil War (2016) - Nota: 90","Viuda Negra (2021) - Nota: 80","Black Panther (2018) - Nota: 96","Doctor Extraño (2016) - Nota: 89","Spider-Man: Homecoming (2017) - Nota: 92","Ant-Man y la Avispa (2018) - Nota: 87","Thor: Ragnarok (2017) - Nota: 93","Vengadores: Infinity War (2018) - Nota: 85","Vengadores: Endgame (2019) - Nota: 94","Bruja Escarlata y Vision / Wandavision (2021) (Serie Disney+) - Nota: 91","Falcon y El soldado de invierno (2021) (Serie Disney+) - Nota: 83","Spider-Man: Lejos de casa (2019) - Nota: 90","Spider-Man: No Way Home (2021) - Nota: 94","Loki (2021) (Serie Disney+) - Nota: 92","Eternals (2021) - Nota: 78","Shang-Chi and the Legends of the Ten Rings (2021) - Nota: 92","Ojo de Halcón (2021) (Serie Disney+) - Nota: 92","Doctor Strange en el Multiverso de la Locura (2022) - Nota: 75","Moon Knight (2022) (Serie Disney+) - Nota: 86","Ms. Marvel (2022) (Serie Disney+) - Nota: 98","Thor: Love and Thunder (2022) - Nota: 68","She-Hul (2022) - Nota 88"]


console.log(marvelOrdenCronologico);
//acceder a posiscio 0, 3, 13 de array.
console .log(marvelOrdenCronologico[0]);
console.log(marvelOrdenCronologico[3]);
console.log(marvelOrdenCronologico[13]);
//ver longuitud de array
console.log(marvelOrdenCronologico.length);
//METODOS PARA MODIFICAR EL ARRAY.
//añadir elemento al final de array
marvelOrdenCronologico.push("En A Coruña ciudad")
//extraer ultimo elemento:eliemina yl o devuelve como valor
const ultimoElemento = marvelOrdenCronologico.pop();
console.log(ultimoElemento);
//extraer primer elemento:eliemina yl o devuelve como valor
const primerElemento = marvelOrdenCronologico.shift();
console.log(primerElemento);
//añadir elemento en principio de array
 marvelOrdenCronologico.unshift("Marvel")
 //añadir elementos en el medio de array, entre "Capitana Marvel (2019) - Nota: 79" y "Iron Man (2008) - Nota: 94",
 marvelOrdenCronologico.splice(2,0,"Universo Marvel");
 
 



//Universo Spider-Man.
const universoSpiderMan = ["Spider-Man (21 de junio de 2002)","Spider-Man 2 (14 de julio de 2004)","Spider-Man 3 (4 de mayo de 2007)","The Amazing Spider-Man (3 de julio de 2012)","The Amazing Spider-Man 2: El poder de Electro (17 de abril de 2014)","Marvel Studios] Spider-Man: Homecoming (28 de julio de 2017)","Venom (5 de octubre de 2018)","Spider-Man: un nuevo universo (21 de diciembre de 2018)","[Marvel Studios] Spider-Man: Lejos de Casa (26 de junio de 2019)","Venom: Habrá Matanza (1 de octubre de 2021)","[Marvel Studios] Spider-Man: No Way Home (13 de diciembre de 2021)","Morbius (1 de abril de 2022)"]

console.log(universoSpiderMan);
//acceder a posiscio 0, 3, 7 de array.
console.log(universoSpiderMan[0]);
console.log(universoSpiderMan[3]);
console.log(universoSpiderMan[7]);
//ver longuitud de array
console.log(universoSpiderMan.length)

//añdir elementos: chelovel pauk, Pauchok.
universoSpiderMan.push("CHeloveK Pauk");
universoSpiderMan.push("Pauchok");
//extraer ultimo elemento:eliemina y lo devuelve como valor
const ultimoElementoSpider = universoSpiderMan.pop()
console.log(ultimoElementoSpider);
//extraer primer elemento:eliemina y lo devuelve como valor
const primerElementoSpider = universoSpiderMan.shift();
console.log(primerElementoSpider);
//añadir elemento en principio de array
universoSpiderMan.unshift("Marvel");
//añadir elementos en el medio de array, entre "The Amazing Spider-Man 2: El poder de Electro (17 de abril de 2014)"y"Marvel Studios] Spider-Man: Homecoming (28 de julio de 2017)"
universoSpiderMan.splice(4,0,"Universo Peter Parker");





//Universo X-men.
const universoXMen =["X-Men (2000)","X-Men 2 (2003)","X-Men: La decisión final (2006)","X-Men Orígenes: Lobezno (2009)","X-Men: Primera generación (2011)","Lobezno inmortal (2013)","X-Men: Días del futuro pasado (2014)","Deadpool (2016)","Lobezno inmortal (2013)","Deadpool (2016)","Deadpool 2 (2018)","Los nuevos mutantes (2020)","Logan (2017)"]

console.log(universoXMen);
//acceder a posiscio 0, 3, 7 de array.
console.log(universoXMen[0]);
console.log(universoXMen[3]);
console.log(universoXMen[7]);
//ver longuitud de array
console.log(universoXMen.length);
//Añadir elementos: Lyudi X, Cheloveki X
universoXMen.push("Lyudi X");
universoXMen.push("CHeloveki X")
//extraer ultimo elemento:eliemina y lo devuelve como valor
const ultimoElemntoX = universoXMen.pop();
console.log(ultimoElemntoX);
//extraer primer elemento:eliemina y lo devuelve como valor
const primerElementoX = universoXMen.shift()
console.log(primerElementoX);
//añadir elemento en principio de array
universoXMen.unshift("Marvel")
//añadir elementos en el medio de array, entre "Deadpool 2 (2018)"  y "Los nuevos mutantes (2020)","Logan (2017)"]
universoXMen.splice(10,0,"La escuela de Charles Xavier");


//Personajes Marvel.
const personajesMarvel =["Black Widow (Natasha Romanoff)","Capitán América (Steve Rogers)","Capitana Marvel (Carol Danvers)","Deadpool (Wade Wilson)","Hulk (Bruce Banner)","Spider-Man (Peter Parker)","Iron Man (Tony Stark)","Wolverine (James Howlett)"]

console.log(personajesMarvel);

//acceder a posiscio 0, 3, 6 de array.
console.log(personajesMarvel[0]);
console.log(personajesMarvel[3]);
console.log(personajesMarvel[6]);
 /*modificar el array: cambiar Black Widow (Natasha Romanoff) y en su lugar Pok-Men (Kiril Pokrovskiy)
 cambiar Capitana Marvel (Carol Danvers) y en su lugar Mentor-V (Vladimir Kolpakov)*/
 personajesMarvel[0] = "Pok-Men (Kiril Pokrovskiy)";
 personajesMarvel[2] = "Mentor-V (Vladimir Kolpakov)";
 console.log(personajesMarvel);
 //acceder a posiscio 0,2 de array.
 console.log(personajesMarvel[0]);
 console.log(personajesMarvel[2]);
 //ver longuitud de array
 console.log(personajesMarvel.length);

//Añadir persojes en el array: Punisher
personajesMarvel.push("Punisher");
//extraer ultimo elemento:eliemina y lo devuelve como valor
const ultimoElementoPersonjes = personajesMarvel.pop()
console.log(ultimoElementoPersonjes);
//extraer primer elemento:eliemina y lo devuelve como valor
const primerElementoPersonajes = personajesMarvel.shift()
console.log(primerElementoPersonajes);
//"Pok-Men (Kiril Pokrovskiy)" vuelve al array;)1.
personajesMarvel[1]="Pok-Men (Kiril Pokrovskiy)"
personajesMarvel.unshift("Marvel")

//"Mentor-V (Vladimir Kolpakov)" vuelve al array;)2.
personajesMarvel[3]="Mentor-V (Vladimir Kolpakov)";

//añadir elementos en el medio de array, entre "Iron Man (Tony Stark)" y "Wolverine (James Howlett)"
personajesMarvel.splice(6,0,"Magneto (Max Eisenhardt)");