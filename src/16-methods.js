// Métodos de orden superior

// Map()

const notas = [
  { id: 1, title: 'Nota uno', content: 'Contenido 1' },
  { id: 2, title: 'Nota dos', content: 'Contenido 2' },
  { id: 3, title: 'Nota tres', content: 'Contenido 3' }
];

const titulos = notas.map((nota) => nota.title);
//console.log(titulos)

const notasFecha = notas.map((nota) => ({
    ...nota,
    fechaCreacion: Date.now(),
}));
//console.log(notasFecha);

// Filter()

const notas2 = [
  { id: 1, title: 'Nota 1', content: 'Contenido 1', esFavorita: true, },
  { id: 2, title: 'Nota 2', content: 'Contenido 2', esFavorita: false, },
  { id: 3, title: 'Nota 3', content: 'Contenido 3', esFavorita: true, }
];
const favoritas = notas2.filter((nota) => nota.esFavorita);
//console.log(favoritas)

const titulo = notas2.filter((nota) => nota.title.toLowerCase().includes('nota 1'));
console.log(titulo)