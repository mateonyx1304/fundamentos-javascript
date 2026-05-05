// IF - ELSE

const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad === 18) {
    console.log("Acabas de cumplir la mayoría de edad");
} else {
    console.log("Eres menor de edad");
}



// reto 1 
if (edad >= 18) {
    return true;
} else {
    return false;
}
// El código anterior se puede simplificar a:
// return edad >= 18;


// reto 2
if (edad >= 18) {
    return 'Eres mayor de edad';
} else if (edad < 18) {
    return 'Eres menor de edad';
}
// El código anterior se puede simplificar a:
// return edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';


// reto 3
if (edad === 18) {
    return 'tienes dieciocho años';
} else if (edad >= 19) {
    return 'eres mayor de edad';
} else {
    return 'eres menor de edad';
}
// El código anterior se puede simplificar a:
// return edad === 18 ? 'tienes dieciocho años' : (edad >= 19 ? 'eres mayor de edad' : 'eres menor de edad');


// reto 4
if (valor >= minimo) {
    return true;
} else {
    return false;
}
// El código anterior se puede simplificar a:
// return valor >= minimo;


// reto 5
if (edad >= 19) {
    return 'adulto';
} else if (edad === 18) {
    return 'dieciocho';
} else {
    return 'menor';
}
// El código anterior se puede simplificar a:
// return edad >= 19 ? 'adulto' : (edad === 18 ? 'dieciocho' : 'menor');


// reto 6
if (edad >= 18) {
    return true;
} else {tienePermisoEspecial === true;
    return true;
}