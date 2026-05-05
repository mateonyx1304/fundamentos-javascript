// Coerción Implicita

console.log("5" + 3); // "53" - El número 3 se convierte en una cadena y se concatena con "5"
console.log("5" - 3); // 2 - La cadena "5" se convierte en el número 5 y se realiza la resta
console.log("5" * 3); // 15 - La cadena "5" se convierte en el número 5 y se realiza la multiplicación
console.log("5" / 3); // 1.6666666666666667 - La cadena "5" se convierte en el número 5 y se realiza la división
console.log(true + 1); // 2 - El valor booleano true se convierte en el número 1 y se suma con 1

// Coerción Explícita
const str = '42';
const num = Number(str); // Convierte la cadena '42' en el número 42
console.log(typeof num, num); // "number" 42
const int = parseInt(str, 10); // Convierte la cadena '42' en el número entero 42
console.log(typeof int, int);
const float = parseFloat('3.1416'); // Convierte la cadena '3.1416' en el número decimal 3.1416
console.log(typeof float, float); // "number" 3.1416

const texto = String(123); // Convierte el número 123 en la cadena "123"
console.log(typeof texto, texto); // "string" "123"

const bool = Boolean(1); // Convierte el número 1 en el valor booleano true
console.log(typeof bool, bool); // "boolean" true
const boolFalse = Boolean(0); // Convierte el número 0 en el valor booleano false
console.log(typeof boolFalse, boolFalse); // "boolean" false
