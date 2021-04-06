// Exercício 2 : Agora, pegue a função do exercício 1 e refatore ela para async/await .
// Sua função tem que funcionar exatamente igual à do exercício 1, mas você não pode utilizar nenhum .then em seu código.


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

somaEmultiplicacao(5, 50, 2);

