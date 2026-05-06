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



