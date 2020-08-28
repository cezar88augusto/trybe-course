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
    numbers.push(i / 2);
}

console.log(numbers);

//Bônus
//Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

/* for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
  } */

//1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
            let position = array[i];

            array[i] = array[j];
            array[j] = position;
        }
    }
}

console.log(array)

//2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i] > array[j]) {
            let position = array[i];

            array[i] = array[j];
            array[j] = position;
        }
    }
}

console.log(array)

//3 - Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. 
//Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
//Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. 
//Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

//[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let i = 0; i < array.length; i++) {

    if (array[i+1] === undefined) {
        novoArray.push(array[i]*2);
    } else {
        novoArray[i] = array[i] * array[i + 1];
    }

}

console.log(novoArray)