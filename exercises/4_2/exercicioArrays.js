//Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Posição: ${i} - Número: ${numbers[i]}`);
}

//2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i]
}

console.log(soma);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let valores = numbers.length;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

console.log(soma / valores);

//4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let valores = numbers.length;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

let resultado = soma / valores;

if (resultado <= 20) {
    console.log("Valor menor ou igual a 20")
} else {
    console.log("Valor maior ou igual a 20")
}

//5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorAtual = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorAtual) {
        maiorAtual = numbers[i];
    }
}

console.log(`Maior número de todos: ${maiorAtual}`);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contaImpar = 0;

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) >= 1) {
        contaImpar += 1;
    }
}

if (contaImpar > 0) {
    console.log("Número de ímpares: " + contaImpar)
} else {
    console.log("Nenhum valor ímpar encontrado. ")
}

//7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorAtual = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menorAtual) {
        menorAtual = numbers[i];
    }
}

console.log(`Menor número de todos: ${menorAtual}`);

//8 - Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let i = 0; i < 25; i += 1) {
    numbers.push(i);
}

console.log(numbers);

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];

for (let i = 0; i < 25; i += 1) {
    numbers.push(i/2);
}

console.log(numbers);