// Declara uma variável com um número
let numero = 7;
// Verifica se o número é maior que 10
if (numero > 10) {
  console.log("O número é maior que 10");
} else {
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

const status =
  numero >= 10 ? "O número é maior que 10" : "O número é 10 ou menor";
console.log(status);
