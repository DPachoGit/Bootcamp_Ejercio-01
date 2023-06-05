/* =================Ejercicio 1================= */

let arrayVacia = []

function numerosArray(num){
    for (let i = 1; i <= num; i++) {
        arrayVacia.push(i);
    }
}

numerosArray(10)
console.log(arrayVacia)

/* =================Ejercicio 2================= */

let arrayMonedas = [1,2,3,4,10];

let sumaMonedas = 0;

function loopMonedas(mon){
    for (let i = 0; i < mon.length; i++) {
        sumaMonedas += mon[i];
    }
}

loopMonedas(arrayMonedas)
console.log(sumaMonedas)

/* =================Ejercicio 3================= */

let arrayEdades = [20,25,16,14,18,19,12,14];
let arrayMayores = []

function loopEdades(edad){
    for (let i = 0; i < edad.length; i++) {
        if(edad[i] >= 18){
            arrayMayores.push(edad[i])
        }
    }
}

loopEdades(arrayEdades)
console.log(arrayMayores)

/* =================Ejercicio 4.1================= */

let buscarPalabra = "Hola";
let grupoPalabras1 = ["Hola","Casa","Pez","Alcalde","Bombero"];

function buscar(busPal, gruPal){
    for (let i = 0; i < gruPal.length; i++) {
        if(busPal === gruPal[i]){
            console.log(true)
            return true;
            
        }else{
            console.log(false)
            return false;            
        }
    }
}
buscar(buscarPalabra, grupoPalabras1)

/* =================Ejercicio 4.2================= */

let palabraCensurar2 = "Hola";
let grupoPalabras2 = ["Hola","Casa","Pez","Alcalde","Bombero"];

function buscar(cenPal, gruPal){
    for (let i = 0; i < gruPal.length; i++) {
        if(cenPal === gruPal[i]){
            let palabraCensurada = "";
            for (let j = 0; j < gruPal[i].length; j++) {
            palabraCensurada += "*"
            }
            gruPal[i] = palabraCensurada;
            return console.log(grupoPalabras2)
        }else{
            console.log("La palabra a censurar no esta")
        }            
    }
}

buscar(palabraCensurar2, grupoPalabras2)

/* El console.log se repite tantas veces como palabras hay en el array grupoPalabras */


/* =================Ejercicio 4.2================= */

let palabraCensurar3 = ["Hola", "Pez"];
let grupoPalabras3 = "Hola Casa Pez Alcalde Bombero";

function buscar(cenPal, gruPal){
    let grupoPalabrasSeparadas = gruPal.split(" ");
    for (let i = 0; i < grupoPalabrasSeparadas.length; i++){
        if (cenPal.includes(grupoPalabrasSeparadas[i])) {
            grupoPalabrasSeparadas[i] = "*".repeat(grupoPalabrasSeparadas[i].length);
        }
    }
    return console.log(grupoPalabrasSeparadas.join(" "))
}

buscar(palabraCensurar3, grupoPalabras3)