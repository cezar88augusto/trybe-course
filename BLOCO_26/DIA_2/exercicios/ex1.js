//Exercício 1 : Crie uma função que retorna uma promise.
//Essa função deve receber três parâmetros, fazendo o tratamento de erro caso algum dos parâmetros não seja um número.
//Caso algum dos parâmetros não seja do tipo Number , rejeite a promise e imprima na tela a frase "Digite apenas números".
//Caso todos os parâmetros sejam do tipo Number , você deve somar os dois primeiros.
//Depois, pegue o resultado da soma e multiplique pelo terceiro parâmetro, e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
//Caso contrário, aceite a promise, imprimindo o resultado da multiplicação na tela.

function somaEmultiplicacao(n1, n2, n3) {
    const promise = new Promise((resolve, reject) => {
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) reject(new Error("Digite apenas números"));

        const resultadoSoma = n1 + n2;

        const resultadoMultiplicacao = resultadoSoma * n3;

        if (resultadoMultiplicacao < 50) reject(new Error("Valor muito baixo."));

        resolve(resultadoMultiplicacao);
    });

    return promise;
}

somaEmultiplicacao(10, 1, 2)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));

// Outra resolução:

function mathOperations(x, y, z) {
    return new Promise((resolve, reject) => {
      if ( typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
       return reject(new Error('Digite apenas números'));
      } 
      resolve(x + y);
    })
      .then((r) => {
        if (r*z < 50){
          return Promise.reject(new Error('Valor muito baixo'));
        }
        return r*z;
      })
  }

  mathOperations(1,2,3);