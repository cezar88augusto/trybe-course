// Exercício 3: Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. 
// Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// ASYNC

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function generateArrayOfNumbers(){
    let array = [];
    for (let index = 0; index < 3; index++) {
        array.push(randomNumber());
    };

    somaEmultiplicacao(...array);
}

somaEmultiplicacao = async (n1, n2, n3) => {

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        return Promise.reject(new Error('Digite apenas números'));
    };

    const resultadoSoma = n1 + n2;
    const resultadoMultiplicacao = resultadoSoma * n3;

    if (resultadoMultiplicacao < 50) {
        return Promise.reject(new Error('Valor muito baixo'));
    } else {
        Promise.resolve(resultadoMultiplicacao)
    };

    return console.log(resultadoMultiplicacao);
};

generateArrayOfNumbers();