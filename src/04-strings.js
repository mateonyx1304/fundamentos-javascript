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
const total = `Precio total: ${precio * cantidad}`;
console.log(total);

// Multilínea
const nota = `
# Mi nota
 Este es el contenido de mi nota.
    - Punto 1
    - Punto 2
`