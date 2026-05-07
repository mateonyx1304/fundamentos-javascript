// Function

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

const mensaje = saludar('Mateo');
const mensaje2 = saludar('Angel');
console.log(mensaje, mensaje2);

// Parametros y Argumentos

function crearUsuario(nombre, edad) {
    // ...
    return {nombre, edad};
}

const usuario = crearUsuario('Ana', 25);
console.log(usuario);


// Arrow functions

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4,5));


const crearNota = (contenido, titulo = 'Sin titulo') => {
    return {
        titulo,
        contenido,
        creado: Date.now()
    }
}
const nota1 = crearNota('Mi contenido');
const nota2 = crearNota('otro contenido', 'mi nota');
console.log(nota1, nota2);
