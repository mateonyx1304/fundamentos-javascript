// Strings
const nombre = 'Mateo';
const apellido = 'Angel';
console.log(nombre, apellido);

const mensaje = 'Hola, yo soy ' + nombre + ' ' + apellido;
// console.log(mensaje);

// Template Literals
const mensaje2 = `Bienvenid@, yo soy ${nombre} ${apellido}`;
console.log(mensaje2);

// Expresiones dentro de Template Literals
const precio = 50;
const cantidad = 4;
const total = `
Precio unitario: $${precio}
Cantidad: ${cantidad}
Precio total: $${precio * cantidad}
`;
console.log(total);

// Multilínea
const nota = `
# Mi nota
 Este es el contenido de mi nota.
    - Punto 1
    - Punto 2
`
console.log(nota);


// Método para obtener la longitud de un string
const longitud = nombre.length;
console.log(longitud);

// slice() para obtener una parte de un string
const texto1 = 'JavaScript es un lenguaje de programación';
console.log(texto1.slice(0, 10)); // 'JavaScript'
console.log(texto1.slice(11)); // 'es un lenguaje de programación'
console.log(texto1.slice(-10)); // 'programación'


// substring    
const texto2 = 'Hola Mundo';
console.log(texto2.substring(0, 4));

//split separado por espacios
const texto3 = 'JavaScript es genial';
const palabras = texto3.split(' ');
console.log(palabras); // ['JavaScript', 'es', 'genial']

// toUpperCase y toLowerCase
const texto4 = 'Hola Mundo';
console.log(texto4.toUpperCase()); // 'HOLA MUNDO'
console.log(texto4.toLowerCase()); // 'hola mundo'

// trim para eliminar espacios al inicio y al final
const texto5 = '   Hola Mundo   ';
console.log(texto5.trim()); // 'Hola Mundo'

// incluides (subcadena)
const contenido = 'JavaScript es divertido';
console.log(contenido.includes('divertido')); // true
console.log(contenido.includes('aburrido')); // false

// startsWith y endsWith
const saludo = 'Hola Mundo';
console.log(saludo.startsWith('Hola')); // true
console.log(saludo.endsWith('universo')); // false  

// replace para reemplazar parte de un string
const texto6 = 'hola mundo, hola javascript';
console.log(texto6.replace('hola', 'hi')); // 'hi mundo, hi javascript'
console.log(texto6.replaceAll('hola', 'hi')); // 'hi mundo, hi javascript' (reemplaza todas las ocurrencias)
console.log(texto6.replace(/hola/g, 'hi')); // 'hi mundo, hi javascript' (usando expresión regular)

