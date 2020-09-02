//Parte II - Funções

//1 - Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.
//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Exemplo de palíndromo: arara.
//verificaPalindrome("arara");
//Retorno esperado: true
//verificaPalindrome("desenvolvimento");
//Retorno esperado: false

 let nome = "z";

function avaliadorDeEspecie(especie) {

    let resultado = false;

    if (especie == "arara") {
        resultado = true
    } else {
        resultado = false;
    }

    return resultado;

}

console.log(avaliadorDeEspecie(nome));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function maiorNumero(array) {

    let maiorIndice = array[0];
    let guardaIndice = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorIndice) {
            guardaIndice = i;
        }
    }

    return "Posição do maior valor: " + guardaIndice;

}

console.log(maiorNumero(numeros = [2, 3, 6, 78, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function menorNumero(array){

    let menorIndice = array[0];
    let guardaIndice = 0;

    for (const i in array) {

        if (array[i] < menorIndice) {
            guardaIndice = i;
        }
    }
    return "Posição do menor valor: " + guardaIndice;
}

console.log(menorNumero(numeros = [2, 4, 6, 7, 10, 0, -3]))

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

let listaNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maisCaracteres(nomes) {

    let nomeMaior = '';

    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < nomes.length; j++) {

            if (nomes[i].length > nomes[j].length && nomes[i].length>=nomeMaior.length) {
                nomeMaior = nomes[i];
            }
        }
    }
    return nomeMaior;
}

console.log(maisCaracteres(listaNomes));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.

function numeroQueMaisSeRepete(vetor) {

    let valorMaisRepetido = 0;
    let contadoRepeticao = 0;
    let armazenadorContadorDeRepeticao = 0;

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length; j++) {

            if (vetor[i] == vetor[j]) {
                contadoRepeticao += 1;
            }

            if (contadoRepeticao > armazenadorContadorDeRepeticao) {
                armazenadorContadorDeRepeticao = contadoRepeticao;
                valorMaisRepetido = vetor[i];
            }
        }
        contadoRepeticao = 0;
    }

    return valorMaisRepetido;

}

console.log(numeroQueMaisSeRepete(vet = [2, 3, 3, 3, 8, 2, 3]));


//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

 function somador (valor){

    let somador = 0;

    for (let i = 1; i <= valor; i++) {

        somador+=i;
    }

    return somador;
}

let numero = 5;

console.log(somador(numero)); 

//7 - Crie uma função que receba uma string word e outra string ending. //
//Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
//Valor de teste: "trybe" e "be"
//Valor esperado no retorno da função: true
//verificaFimPalavra("trybe", "be");
//Retorno esperado: true
//verificaFimPalavra("joaofernando", "fernan");
//Retorno esperado: false

function comparador(word, ending) {


    let acumulador1 = "";
    let acumulador2 = "";
    let bool = false;

    for (let i = 0; i < word.length; i++) {

        if (i >= word.length - 2) {

            acumulador1 += word[i];
        }
    }

    for (let i = 0; i < ending.length; i++) {

        if (i >= ending.length - 2) {

            acumulador2 += ending[i];
        }
    }

    if (acumulador1 == acumulador2) {
        bool = true;
    }

    return bool;
}

console.log(comparador("trybe", "be"));