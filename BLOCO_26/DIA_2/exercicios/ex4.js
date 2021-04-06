// Exercício 3: Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. 
// Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// THEN E catch

function randomNumber() {
  return Math.floor(Math.random() * 10);
};

function generateArrayOfNumbers() {
  let array = [];

  for (let index = 0; index < 3; index++) {
    array.push(randomNumber());
  };

  return array;
};

const arrayOfRandomicNumbers = generateArrayOfNumbers();

function doMath(a, b, c) {
  return new Promise((resolve, reject) => {

    const paramTypes = [a, b, c].map((param) => typeof param);

    if (paramTypes.some((paramType) => paramType == Number)) {
      return reject(new Error('Informe apenas números'));
    }

    resolve(a + b + c);

  });
};

function callDoMath() {
  doMath(...arrayOfRandomicNumbers)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro))
};

callDoMath();

