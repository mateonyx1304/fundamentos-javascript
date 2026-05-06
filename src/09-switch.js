// Switch

switch (expression) {
    case valor1:
        // Código a ejecutar si el resultado de expression coincide con valor1
        break;
    case valor2:
        // Código a ejecutar si el resultado de expression coincide con valor2
        break;
    default:
        // Código a ejecutar si el resultado de expression no coincide con ningún valor
}

// El bloque de código dentro de cada case se ejecutará solo si el resultado de la expresión coincide con el valor especificado en ese case. Si no hay ningún case que coincida, se ejecutará el bloque de código dentro del default (si está presente). Es importante incluir la palabra clave break al final de cada case para evitar que el código continúe ejecutándose en los siguientes cases.

// Ejemplo:
const dia = 'lunes';

switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case'jueves':
    case'viernes':
        console.log('Es un día laboral');
        break;
    case 'sabado':
    case 'domingo':
        console.log('Es un día de fin de semana');
        break;
    default:
        console.log('Día no válido');
}



// reto 1
function tipoDeDia(dia) {
  switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
      return 'día laboral';
    case 'sábado':
    case 'domingo':
      return 'fin de semana';
    default:
      return 'día no válido';
  }
}


// reto 2
function mensajeOpcion(opcion) {
  switch (opcion) {
    case 'a':
      return 'Opción A';
    case 'b':
      return 'Opción B';
    case 'c':
      return 'Opción C';
    default:
      return 'opción no válida';
  }
}


// reto 3
function categoriaPorCodigo(codigo) {
switch (codigo) {
    case 'E1':
    case 'E2':
        return 'electrónica';
    case 'H1':
        return 'hogar';
        default:
            return 'desconocido';
}
}


// reto 4
function diasDelMes(mes) {
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        return 31;
    case 4:
    case 6:
    case 9:
    case 11:
        return 30;
    case 2:
        return 28;
        default:
            return 0;
}
}


// reto 5
switch (nivel) {
    case 'principiante':
        return 'acceso básico';
    case 'intermedio':
        return 'acceso estándar';
    case 'avanzado':
        return 'acceso completo';
    default:
        return 'nivel no válido';
}