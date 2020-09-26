//Função normal

const soma = function(num1, num2) {
    return num1 + num2;
}

//Versão Arrow function

const soma = (num1, num2) => {
    return num1 + num2;
}

//Versão simplificada da Arrow function

const soma = (num1, num2) => num1 + num2;


//---------------------------------------

//Outro exemplo: 

/* const contaPalavras = function(frase) {
    return frase.split(' ').length;
}

const contaPalavras = (frase) => {
    return frase.split('frase').length;
} */

const contaPalavras = frase => frase.split(' ').length;

console.log(contaPalavras('Sou um Dev maneiro!'))

//---------------------------------------

//Outro exemplo com OBJETO:

const itensCarrinho = [
    {id: 1, nome: "Item 1", preco: 1200},
    {id: 2, nome: "Item 2", preco: 2500},
];

const total = itensCarrinho.reduce((total,item) => total + item.preco ,0);

console.log(total);

//---------------------------------------

const button = document.querySelector('#button');

button.addEventListener('click', (event) =>{
    // ações...
} )

