// Operadores de Comparación en JS: Igualdad y Desigualdad

// Igualdad débil (==)
console.log(5 == '5'); // true, porque hace conversión de tipo
console.log(true == 1); // true, porque hace conversión de tipo
console.log(false == 0); // true, porque hace conversión de tipo
console.log(null == undefined); // true, porque ambos son considerados "vacíos"
return a == b; // Devuelve true si a y b son iguales después de hacer conversión de tipo, false si no lo son

// Desigualdad débil (!=)
console.log(5 != '5'); // false, porque hace conversión de tipo
console.log(true != 1); // false, porque hace conversión de tipo
console.log(false != 0); // false, porque hace conversión de tipo
console.log(null != undefined); // false, porque ambos son considerados "vacíos"
return a != b; // Devuelve true si a y b no son iguales, false si son iguales

// Igualdad estricta (===)
console.log(5 === 5); // true, ambos son números y tienen el mismo valor
console.log(5 === '5'); // false, porque no son del mismo tipo
console.log(true === 1); // false, porque no son del mismo tipo
console.log(false === 0); // false, porque no son del mismo tipo
console.log(null === undefined); // false, porque no son del mismo tipo
return a === b; // Devuelve true si a y b son iguales y del mismo tipo, false si no lo son

// Desigualdad estricta (!==)
console.log(5 !== '5'); // true, porque no son del mismo tipo
console.log(5 !== 5); // false, ambos son números y tienen el mismo valor
console.log(true !== 1); // true, porque no son del mismo tipo
console.log(false !== 0); // true, porque no son del mismo tipo
console.log(null !== undefined); // true, porque no son del mismo tipo
return a !== b; // Devuelve true si a y b no son iguales o no son del mismo tipo, false si son iguales y del mismo tipo