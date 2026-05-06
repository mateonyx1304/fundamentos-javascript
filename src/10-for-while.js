// For - While

// for (incializacion, condicion, incremento) {}



for (let i = 0; i < 5; i++) {
    console.log(i);
}

const notas = ['nota 1', 'nota 2', 'nota 3'];

for (let i = 0; i < notas.length; i++) {
    console.log(`indice ${i}: ${notas[i]}`);
}


// for of

const frutas = ['manzana', 'pera', 'naranja'];

for (const fruta of frutas ) {
    console.log(fruta);
    if (fruta === 'pera') {
        console.log('es una rica pera');
    }
}


// for in

const persona = {nombre: 'mateo', edad: 29};

for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}