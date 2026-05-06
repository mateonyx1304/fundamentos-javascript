// For - While

// for (incializacion, condicion, incremento) {}



for (let i = 0; i < 5; i++) {
    console.log(i);
}
 // 0, 1, 2, 3, 4  
 // 5 no se muestra porque la condicion es i < 5, no i <= 5
 // i++ es lo mismo que i = i + 1
 // i-- es lo mismo que i = i - 1
 // i += 2 es lo mismo que i = i + 2
 // i -= 2 es lo mismo que i = i - 2
 // i *= 2 es lo mismo que i = i * 2
 // i /= 2 es lo mismo que i = i / 2
// for es una forma de repetir un bloque de codigo un numero determinado de veces, mientras se cumpla una condicion
// for es recomendado para repetir un bloque de codigo un numero determinado de veces, mientras se cumpla una condicion
// for no es recomendado para repetir un bloque de codigo un numero indeterminado de veces, ya que puede generar un bucle infinito
// for no es recomendado para repetir un bloque de codigo mientras se cumpla una condicion, ya que puede generar un bucle infinito


const notas = ['nota 1', 'nota 2', 'nota 3'];

for (let i = 0; i < notas.length; i++) {
    console.log(`indice ${i}: ${notas[i]}`);
}
// indice 0: nota 1
// indice 1: nota 2
// indice 2: nota 3

// for es una forma de recorrer un array, pero necesitamos el indice para acceder al valor
// for es recomendado para recorrer arrays, ya que nos permite acceder al indice y al valor
// for no es recomendado para recorrer objetos, ya que recorre las propiedades del objeto, no los valores
// for no es recomendado para recorrer strings, ya que recorre las propiedades del string, no los caracteres
// for no es recomendado para recorrer cualquier iterable, como arrays, strings, maps, sets, etc., ya que recorre las propiedades del iterable, no los valores




// for of
const frutas = ['manzana', 'pera', 'naranja'];

for (const fruta of frutas ) {
    console.log(fruta);
    if (fruta === 'pera') {
        console.log('es una rica pera');
    }
}
// manzana
// pera
// es una rica pera
// naranja
// for of es una forma mas sencilla de recorrer un array, no necesitamos el indice, solo el valor
// for of no es recomendado para recorrer objetos, ya que recorre los valores del objeto, no las claves
// for of es recomendado para recorrer arrays, ya que recorre los valores del array, no las propiedades
// for of es recomendado para recorrer strings, ya que recorre los caracteres del string, no las propiedades
// for of es recomendado para recorrer cualquier iterable, como arrays, strings, maps, sets, etc.



// for in
const persona = {nombre: 'mateo', edad: 29};

for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// nombre: mateo
// edad: 29
// for in es una forma de recorrer un objeto, necesitamos la clave para acceder al valor
// for in es recomendado para recorrer objetos, ya que recorre las propiedades del objeto, no los valores
// for in no es recomendado para recorrer strings, ya que recorre las propiedades del string, no los caracteres
// for in no es recomendado para recorrer cualquier iterable, como arrays, strings, maps, sets, etc., ya que recorre las propiedades del iterable, no los valores
// for in no es recomendado para recorrer arrays, ya que recorre las propiedades del array, no los valores.



// While

let contador = 0;

while (contador < 5) {
    contador ++;
    console.log(contador);
}
// 1, 2, 3, 4, 5
// while es una forma de repetir un bloque de codigo mientras se cumpla una condicion
// while es recomendado para repetir un bloque de codigo mientras se cumpla una condicion, ya que no sabemos cuantas veces se va a repetir
// while es una forma de repetir un bloque de codigo mientras se cumpla una condicion, pero no es recomendado para repetir un bloque de codigo un numero determinado de veces, ya que es mas facil usar un for
// while es una forma de repetir un bloque de codigo mientras se cumpla una condicion, pero no es recomendado para repetir un bloque de codigo un numero indeterminado de veces, ya que puede generar un bucle infinito
// while no es recomendado para repetir un bloque de codigo un numero determinado de veces, ya que es mas facil usar un for
// while no es recomendado para repetir un bloque de codigo un numero indeterminado de veces, ya que puede generar un bucle infinito
// while no es recomendado para repetir un bloque de codigo mientras se cumpla una condicion, ya que puede generar un bucle infinito


// do while
let numero = 0;
do {
    console.log(`Entra en: ${numero}`);
    numero++;
} while (numero < 3) {
    console.log(numero);
}
// Entra en: 0
// Entra en: 1
// Entra en: 2
// 3
// do while es una forma de repetir un bloque de codigo al menos una vez, ya que la condicion se evalua al final del bloque de codigo
// do while es recomendado para repetir un bloque de codigo al menos una vez, ya que la condicion se evalua al final del bloque de codigo
// do while no es recomendado para repetir un bloque de codigo mientras se cumpla una condicion, ya que puede generar un bucle infinito
// do while no es recomendado para repetir un bloque de codigo un numero determinado de veces, ya que es mas facil usar un for
// do while no es recomendado para repetir un bloque de codigo un numero indeterminado de veces, ya que puede generar un bucle infinito
// do while no es recomendado para repetir un bloque de codigo mientras se cumpla una condicion, ya que puede generar un bucle infinito



// Retos bucles for while

// --- Reto 1: for con índice i ---
// Recibe "n" (número). Usa un bucle for con let i = 0; i < n; i++.
// Retorna un array con los números de 0 hasta n - 1 (ej: n = 5 → [0, 1, 2, 3, 4]).
function numerosHastaN(n) {
 const resultado = [];

  for (let i = 0; i < n; i++) {
    resultado.push(i);
  }
  return resultado;
}
  // console.log(numerosHastaN(5)); 
  // [0, 1, 2, 3, 4]



  // --- Reto 2: while mientras se cumpla condición ---
// Recibe "limite" (número). Usa un bucle while: un contador empieza en 0
// y se incrementa mientras sea menor que limite. Retorna el valor del contador al terminar.
function contarConWhile(limite) {
    let contador = 0;
    while (contador < limite) {
        contador++;
    } return contador;
}
// console.log(contarConWhile(5)); 
// 5


// --- Reto 3: do-while (al menos una ejecución) ---
// Recibe "limite" (número). Usa do-while: un contador empieza en 0,
// en el do lo incrementas y en el while repites mientras contador < limite.
// Así se ejecuta al menos una vez antes de validar. Retorna el contador al terminar.
function contarConDoWhile(limite) {
    let contador = 0;
    do {contador++;
    } while (contador < limite) {
        return contador;
    }
}


// --- Reto 4: for con length e índice (array) ---
// Recibe "notas" (array de strings). Usa for con i desde 0 hasta notas.length.
// Retorna un array de strings con el formato "Índice: i -> Nota: valor" para cada elemento.
// Usa template literals y acceso por índice notas[i].
function formatearNotasConFor(notas) {
    const resultado = [];
    for (let i = 0; i < notas.length; i++) {
        resultado.push(`Índice: ${i} -> Nota: ${notas[i]}`);
    }
    return resultado;
}


// --- Reto 5: for...of y condición ---
// Recibe "frutas" (array de strings). Usa for...of para iterar cada valor.
// Si encuentras el string 'manzana', retorna true. Si terminas el bucle sin encontrarla, retorna false.
// Puedes usar if dentro del bucle para decidir.
function tieneManzana(frutas) {
    for (const fruta of frutas) {
        if (fruta === 'manzana') {
            return true;
        }
    }
    return false;
}



// --- Reto 6: for...in para objeto (clave-valor) ---
// Recibe "objeto" (un objeto con pares clave-valor). Usa for...in para recorrer sus claves.
// Retorna un array de strings con el formato "Clave: clave -> Valor: valor" para cada propiedad.
// Accede al valor con notación de corchetes: objeto[clave]. Usa template literals.
function clavesYValores(objeto) {
    const resultado = [];
    for (const clave in objeto) {
        resultado.push(`Clave: ${clave} -> Valor: ${objeto[clave]}`);
    }
    return resultado;
}


// Retos while - do-while

// --- Reto 1: while con contador e incremento seguro ---
// Recibe "n" (número). Usa un bucle while con un contador que empieza en 0.
// Mientras contador < n, agrega el valor actual del contador a un array y luego
// incrementa el contador (condición de salida). Retorna el array.
// Ejemplo: n = 3 → [0, 1, 2].
function numerosConWhile(n) {
  let contador = 0;
  const resultado = [];
  while (contador < n) {
    resultado.push(contador);
    contador++; // Incremento para evitar bucle infinito
  }
  return resultado;
}

// --- Reto 2: while con condición de salida garantizada ---
// Recibe "limite" (número). Usa while: contador empieza en 0 y se incrementa
// dentro del bucle mientras contador < limite. Retorna el valor del contador al terminar.
// Asegúrate de modificar el contador en cada vuelta para que el ciclo termine.
function contarHastaLimite(limite) {
    let contador = 0;
    while (contador < limite) {
        contador++; // Incremento para garantizar salida del bucle
    }
    return contador;
}


// --- Reto 3: do...while (ejecuta al menos una vez) ---
// Recibe "limite" (número). Usa do...while: contador empieza en 0, dentro del do
// incrementas el contador y en el while repites mientras contador < limite.
// Así el bloque se ejecuta al menos una vez antes de evaluar la condición.
// Retorna el contador al terminar. Si limite es 0, igual se ejecuta una vez → retorna 1.
function doWhileAlMenosUnaVez(limite) {
    let contador = 0;
    do {
        contador++; // Incremento dentro del do para asegurar al menos una ejecución
    } while (contador < limite);
    return contador;
}



// --- Reto 4: do...while con template literals ---
// Recibe "limite" (número). Usa do...while con un contador que empieza en 0.
// En cada iteración agrega al array el string `Entra en ${contador}` (template literal)
// y luego incrementa el contador. Repite mientras contador < limite.
// Retorna el array de mensajes. Ejemplo: limite 3 → ["Entra en 0", "Entra en 1", "Entra en 2"].
function mensajesEntradaDoWhile(limite) {
    let contador = 0;
    const mensajes = [];
    do {
        mensajes.push(`Entra en ${contador}`);
        contador++;
    } while (limite > contador);
    return mensajes;
}