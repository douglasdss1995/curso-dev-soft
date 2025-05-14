let numero = 7;

if (numero < 10) {
    console.log("o numero e menor que 10");
}

if (numero > 10) {
    console.log("o numero e maior que 10");
}else {
     console.log("o numero e 10 ou menor ");
}
let idade = 20;

if (idadae <13){
    console.log("Voce e uma criança ");
}else if (iadade>= 13 && idade<20) {
    console.log("Voce e um adolescente ");   
}else if(idade >=20 && idade < 60) {
    console.log("Voce e um adulto ");
}else {
    console.log("Voce e um idoso ");
}

cont status = numero  >=18 ? "o numero e maior que 10" : "o numero é 10 ou menor";
console.log(status)