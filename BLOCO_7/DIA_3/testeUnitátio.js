//1 - A função sum(a, b) retorna a soma do parâmetro a com o b
//A - Teste se o retorno de sum(4, 5) é 9
//B -Teste se o retorno de sum(0, 0) é 0
//C -Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)

const assert = require('assert');

function sum(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

// implemente seus testes aqui

assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), 8);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
    sum(4, '5');
});
assert.throws(() => {
    sum(4, '5');
}, /^Error: parameters must be numbers$/);

//2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// A - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// B - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// C - Verifique se o array passado por parâmetro não sofreu alterações
// D - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

//const assert = require('assert');

function myRemove(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// implemente seus testes aqui 
//Testar ESTRUTURAS: deepStricEqual

// B
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// C
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// D
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
//A - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
//B - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//C - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
//D - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

//const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i -= 1;
            len -= 1;
        }
    }

    return arr;
}

// implemente seus testes aqui

// A 

//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// B

// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// C

//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], "Não é igual!");

//D

//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//A - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//B - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//C - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//D - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//E - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

//const assert = require('assert');

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

// implemente seus testes aqui

//A 
//assert.strictEqual(myFizzBuzz(15), 'fizzbuzz',"Não é divisível por 3 e 5");

//B
//assert.strictEqual(myFizzBuzz(5), 'fizz',"Não é divisível por 3");

//C
//assert.strictEqual(myFizzBuzz(3), 'buzz', "Não é divisível por 5");

//D 
//assert.strictEqual(myFizzBuzz(7), 7, "Não é divisível por 3 e 5");

//E
//assert.strictEqual(myFizzBuzz("Oi"), 'fizz', "Não é um número");

// 5 - Compare dois objetos (JSON) para verificar se são idênticos ou não

//const assert = require('assert');

const obj1 = {
    title: 'My Title',
    description: 'My Description',
};

const obj2 = {
    description: 'My Description',
    title: 'My Title',
};

const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
};

const obj4 = {
    title: 'My Title',
    description: 'My Description',
};

// implemente seus testes aqui

//assert.deepStrictEqual(obj1, obj3, "Não são objetos iguais!");

//-----------------------------------------------

//Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. 
//Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!
//Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.

//1 - Use a variável parameter como parâmetro da função abaixo, 
//escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, 
//altere o código para que ele passe nos testes.

//const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    let array = [];

    for (let index = 0; index < people.length; index++) {
        array.push(greeting + people[index]);

    }
    return array;
};

//const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

//assert.deepStrictEqual(greetPeople(parameter), result, "Deu errado!");

// 2 Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, 
// caso não esteja, altere o código para que ele passe nos testes.

//const assert = require('assert');

const removeVowels = (word) => {
    const characters = word.split('');
    counter = 0;
    const results = [];
    let resultado = "";

    for (let i = 0; i < characters.length; i += 1) {
        if (
            characters[i] === 'a' ||
            characters[i] === 'o' ||
            characters[i] === 'i' ||
            characters[i] === 'e' ||
            characters[i] === 'u'
        ) {
            results.push(counter += 1);
        } else {
            results.push(characters[i]);
        }
    }

    for (let index = 0; index < results.length; index++) {
        resultado += results[index];
    }
    return resultado;
};


//const parameter = 'Dayane';
//const result = 'D1y2n3';

//assert.strictEqual(removeVowels(parameter), result, "Deu errado!");

// 3 - Use a variável parameter como parâmetro da função abaixo, 
// escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

//const assert = require('assert');

const greaterThanTen = (array) => {
    let results = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > 10) {
            results.push(array[i]);
        }
    }
    return results;
};

//const parameter = [4, 10, 32, 9, 21];
//const result = [32, 21];

//assert.deepStrictEqual(greaterThanTen(parameter), result, "Deu erro!");

// 4 - Use a variável parameter como parâmetro da função abaixo, 
// escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

function secondThirdSmallestNew(array) {
    const results = []
    array.sort((item1, item2) => {
        return item1 - item2;
    });
    results.push(array[1], array[2]);
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallestNew, 'function');
const output = secondThirdSmallestNew(parameter);
assert.deepEqual(output, result);