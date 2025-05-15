//Condicional

//Declara uma variavel com um  umero
let numero = 7;

//Verifica se o numero é maior que 10
if (numero > 10){
    console.log("O numero é maior que 10");
} else {
    console.log("O numero é 10 ou menor");
}

const status = numero >= 18 ? "O numero é maior que 10" : "O numero é 10 ou menor";
console.log(status);

//Define a variavel idade
let idade = 20;

if (idade < 13) {
    console.log("Você é uma criança");
} elseif (idade >= 13 && idade < 20){
    console.log("Você é um adolescente");
} elseif (idade >= 20 && idade < 60){
    console.log("Você é um adulto");
} else {
    console.log("Você é um idoso");
}
