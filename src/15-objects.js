// Objects

const nota = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
}

console.log(nota.id);
console.log(nota.title);


const campo = 'content';
console.log(nota[campo]);

console.log(nota.author?.name);

console.log(nota.author.name);


// Destructuracion

const nota2 = {
    id: 1,
    title: 'Mi primera nota',
    content: 'Contenido de la nota',
    createdAt: Date.now(),
}

const id = nota2.id;
const title = nota2.title;

const {title:titulo, content} = nota2;
console.log(titulo, content)

// Spread

const nota3 = {id: 2, title: 'hola'};
const data = {esAdmin: true};

const copia = {... nota3};
console.log(nota3);
console.log(copia);

const notaActualizada = {
    ... nota3,
    ...data,
    edad: 20,
}
console.log(notaActualizada);

// Verificar

const nota4 = {
    id: 1,
    title: 'titulo de la nota',
    content: 'contenido de la nota',
    createdAt: Date.now(),
};
console.log('title' in nota4);


// Object.keys

console.log(Object.keys(nota4));

// Object.values
console.log(Object.values(nota4));

// Object.entries

console.log(Object.entries(nota4));