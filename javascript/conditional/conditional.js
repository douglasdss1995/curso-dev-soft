// Declara uma variável com um número
let numero = 7;

// Verifica se o número é maior que 0
if (numero > 0) {
    console.log("Positivo");
}

// Verifica se o número é positivo ou negativo
if (numero > 0) {
    console.log("positive");
} else {
    console.log("Negative");
}


// Condicional ternário
// A condicional ternária é uma forma compacta de escrever uma estrutura if-else
const _status = numero >= 0 ? "Positive" : "Negative";
console.log(_status);

// Verifica se o número é maior que 10
// Se o número for maior que 10, imprime "O número é maior que 10"
if (numero > 10) {
    console.log("O número é maior que 10");
} else {
    // Se o número não for maior que 10, imprime "O número é 10 ou menor"
    console.log("O número é 10 ou menor");
}



// Define a variável idade
let idade = 20;

if (idade < 13) {
    console.log("Você é uma criança.");
} else if (idade >= 13 && idade < 20) {
    console.log("Você é um adolescente.");
} else if (idade >= 20 && idade < 60) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}