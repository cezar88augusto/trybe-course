//Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

//Não recursiva:

const fatorial = num => {

    let answer = num;

    for (let index = num - 1; index >= 1; index--) {
        answer *= index;
    }

    return answer;
}

console.log(fatorial(7));

//Recursiva:

const factorial = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorial(5))

//Crie uma função que receba uma frase e retorne qual a maior palavra.
//Exemplo:

const wordAnalyze = phrase => {

    let arrayWords = phrase.split(' ');
    let longestWord = arrayWords[0].length;
    let word = arrayWords[0];

    for (let index = 0; index < arrayWords.length; index++) {
        if (arrayWords[index].length > longestWord) {
            word = arrayWords[index]
        }
    }

    return word;

}

console.log(wordAnalyze("Um dois tres quarenta"));

//Longestword com sort em uma linha.

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


//Crie uma página que contenha:
//Um botão ao qual será associado um event listener;
//Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

//Resolvido: arquivo: clickcount.html e clickcountjs.js

//Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. 
//Sua função deve retornar essa nova string. Exemplo:
//String determinada: "Tryber x aqui!"
//Parâmetro: "Bebeto"
//Retorno: "Tryber Bebeto aqui!"

//Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.



//Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. 
//Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. 
//Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
//JavaScript;
//HTML; ...


const arrayHabilities = ['HTML', 'Css', 'JavaScript'];

function buildSkillsPhrase(string) {
    const fun1 = paramInner => (`Olá ${string}, tudo bem?`)
    let acumulator = fun1(string);

    arrayHabilities.forEach((skill) =>
    acumulator = `${acumulator}

    - ${skill}`)
    
    acumulator = `
    ${acumulator}

    #goTrybe
    `
    return acumulator;

}

console.log(buildSkillsPhrase('c'));

