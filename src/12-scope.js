// Scope

const global = 'Soy Global';

function ejemplo() {
    const funcion = 'Soy de funcion';

    if (true) {
        const bloque = 'Soy de bloque';
        console.log(bloque);
    }
    console.log(funcion);
}
console.log(ejemplo());
console.log(global);