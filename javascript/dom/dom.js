/*
Retorna um unico elemento com um ID especifico
*/
const elementoPorId = document.getElementById('titulo');

//retorna uma coleção de elementos que possui uma classe especifica
const elementoPorClass = document.getElementsByClassName('paragrafo');

//retorna todos os elementos de um tipo especifico (tag) no documento
const elementoPorTagName = document.getElementsByTagName('p');

//Retorna o primeiro elemento que corresponde a um selector CSS
//utiliza os mesmos padroes dos selectores CSS 
const elementoPorQuery = document.querySelector('.paragrafo');

//retorna todos os elementos que correspondem ao selector CSS
//utiliza os mesmos padroes dos selectores CSS
const elementoPorQueryAll = document.querySelectorAll('#titulo');