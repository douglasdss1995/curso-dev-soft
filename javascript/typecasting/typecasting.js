let variavel = true;
console.log(typeof variavel); // boolean

variavel = String(variavel); // now value is a string "true"
console.log(typeof variavel); // string

let str = "123";
console.log(typeof str); // string

let num = number(str); // becomes a number 123
console.log(typeof num); // number

let textoDecimal = "3.14";
let numeroDecimal = parseFloat(textoDecimal); // Converte para número decimal
console.log(numeroDecimal); // Saída: 1.14
