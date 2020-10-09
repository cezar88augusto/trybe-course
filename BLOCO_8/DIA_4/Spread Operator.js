//Esse operador, como seu próprio nome diz, espalha os valores de um objeto iterável, como arrays(caso do vídeo acima) e objetos!
//Objeto iterável: 
const arr = [5, 1];
const newArr = [3, ...arr];

console.log(newArr);

function soma(a, b, c) {
    return a + b + c;
}

console.log(soma(1, ...arr));