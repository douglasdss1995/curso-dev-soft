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


let elemento = document.getElementById('titleDiv');

// textContent
let text = elemento.textContent; // obter o valor
elemento.textContent = "Novo texto"; //definir valor

//innerHTML
text = elemento.innerHTML; //obter o valor
elemento.innerHTML = "<h1 id='titleH1'>Novo Texto</h1>"; //definir valor utilizando HTML

//style
elemento = document.getElementById('titleH1');
elemento.style.color = 'blue';
elemento.style.backgroundColor = 'red';
elemento.style.fontSize = '3rem';

//classList

//utiliza o primeiro elemento com a classe paragrafo
elemento = document.getElementsByClassName('paragraph')[0];
elemento.classList.add('text-warning');
elemento.classList.remove('text-warning');

elemento = document.getElementsByClassName('paragraph');
for (let i = 0; i < elemento.length; i++) {
    elemento[i].classList.toggle('text-warning');
}

elemento = document.getElementById('inputNumber');
attr = elemento.getAttribute('type');
console.log(attr);

elemento.setAttribute('type', 'number');
elemento.removeAttribute('placeholder');
