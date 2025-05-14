// Operações Aritmeticas

let x = 10;
let y = 10;
let z;

//Soma
z = x + y;
console.log(z);

//Subtração
z = x - y;
console.log(z);

//Multiplicação
z = x * y;
console.log(z);

//Divisão
z = x / y;
console.log(z);

//Modulo
z = x % y;
console.log(z);

//Exponenciação
z = x ** y;
console.log(z);

//concatencao

let first_name = "Douglas";
let second_name = " Silva";
let name = first_name + second_name;
console.log(name);


//Interpolação com template literals
let greatings = 'Hello, ${name}';
console.log(greatings);

//declaração
let a;
let b;

//atribuição simples
a = 10;
b = 10;
console.log('A:', a);
console.log('B:', b);

//atribuição com adição
b += a;
console.log('A:', a);
console.log('B:', b);

//atribuição com subtração
a -= b;
console.log('A:', a);
console.log('B:', b);

//atribuição com divisão
b /= a;
console.log('A:', a);
console.log('B:', b);

//atribuição com multiplicação
a *= b;
console.log('A:', a);
console.log('B:', b);

//Comparação

let igual = (5 == '5');
console. log ('Igualdade: ', igual)

let identico = (5 === '5');
console. log ('Identidade: ', identico);

let diferente = (5 != 6);
console. log ('Desigualdade: ', diferente);


//Nao identidade
let naoIdentico = (5!=='5')
console.log('Identidade: ', naoIdentico);

//Maior
let maior = (10 > 5)
console.log('Maior: ', maior);

//Menor
let menor = (5 > 10)
console.log('Menor: ', menor);

//Maior ou igual a 
let maiorOuIgualA = (10 >= 5)
console.log('Maior ou igual: ', maiorOuIgualA);

//Menor ou igual a 
let menorOuIgualA = (5 <= 10)
console.log('Menor ou igual: ', menorOuIgualA);

//Operadores Logicos

//Operador: AND
//true, ambos são positivos
console.log()