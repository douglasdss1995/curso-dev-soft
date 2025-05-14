let numero = 7;

if (numero < 10) {
    console.log("o numero é maior que 10");

}else{
console.log("o numero é 10 ou menor");
}
    
let idade = 20;

if (idade < 13) {
    console.log("Você é uma criança.");
} else if (idade >= 13 && idade < 20) {
    console.log("Voçê é um adolescente.");
} else if (idade >= 20 && idade < 60) {
    console.log("Voçê é um adulto.");
} else {
    console.log("Voçê é um idoso.");
}

const status = numero >= 18 ? "O numero é maior que 10" : "O número é 10 ou menor";
console.log(status);
