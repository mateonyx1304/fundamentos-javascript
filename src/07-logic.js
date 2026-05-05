// Operadores lógicos

// AND (&&) OR (||) NOT (!)

// AND (&&) - Retorna true si ambos operandos son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR (||) - Retorna true si al menos uno de los operandos es verdadero
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT (!) - Retorna el valor opuesto del operando
console.log(!true); // false
console.log(!false); // true

// Combinación de operadores lógicos
const a = 5;
const b = 10;
const c = 15;

console.log(a < b && b < c); // true (AND)
console.log(a > b || b < c); // true (OR)
console.log(!(a > b)); // true (NOT)
