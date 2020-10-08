//Função reduce:
//1º parâmetro - Acc: Accumulator
//2º parâmetro - Curr: Current 

const numbers = [32, 15, 3, 2, -5, 56, 10];

//Acc: result   //Curr: number
const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers);

//Para entender melhor o que está acontecendo, rode a função abaixo. Ela possui um console.log para ver o valor do result em cada iteração.
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 32 47 50 52 47 103
    return result + number;
};
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

//O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Olhe a seguir, será usado o último exemplo dado da soma dos números:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 10 42 57 60 62 57 113
    return result + number;
};
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers);

//--------------------------------------------------------------
//Função para buscar maior número de um ARRAY: FOR
const numbers = [32, 15, 3, 2, -5, 56, 10];
let higher = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > higher) {
        higher = numbers[index];
    }
}
console.log(higher);
//Função para buscar maior número de um ARRAY: REDUCE
const numbers = [32, 15, 88, 2, -5, 56, 10];
const higherValue = (currentHigher, currentNumber) => {
    if (currentNumber > currentHigher) {
        currentHigher = currentNumber
    }
    return currentHigher;
}

const result = numbers.reduce(higherValue, numbers[0]);
console.log(result);

//OUTRA FORMA:

const numbers = [-50, -85, -30, -3, -15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, numbers[0]);
console.log(bigger); // -3
//--------------------------------------------------------------
//Somar todos os pares de um vetor
//Usando reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSumEven = ((sum, actual) => (actual % 2 == 0) ? actual + sum : sum);
const sum = numbers.reduce(getSumEven);
console.log(sum);

//Usando filter e reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152
//--------------------------------------------------------------