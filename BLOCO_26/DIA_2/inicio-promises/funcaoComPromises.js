function calcularDivisao(num1, num2) {
    const promise = new Promise((resolve, reject) => {
        if (num2 == 0) reject(new Error('Não pode ser feita uma divisão por zero'));
        const resultado = num1 / num2

        resolve(resultado);
    });

    return promise;
}

// A função calcularDivisao retorna uma promisse E NÃO UM VALOR! 
// Precisamos lidar com isto desta forma:

calcularDivisao(2, 0)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));