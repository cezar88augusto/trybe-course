// Ter um array com os números da mega sena sorteados de forma aleatória
let numerosDaMegaSena = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);


numerosDaMegaSena = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let acertos = 0;

let jogo1 = [1, 2, 3, 4, 5, 6];
let jogo2 = [11, 22, 33, 44, 55, 60];
let jogo3 = [9, 18, 27, 36, 45, 54];

let listaDeJogos = [jogo1, jogo2, jogo3]

// Compara os jogos
for (let index = 0; index < listaDeJogos.length; index++) {
    acertos = 0;
    let jogoAtual = listaDeJogos[index];
    for (let i = 0; i < jogoAtual.length; i += 1) {
        for (let j = 0; j < numerosDaMegaSena.length; j += 1) {
            if (jogoAtual[i] === numerosDaMegaSena[j]) {
                acertos += 1;
            }
        }
    }
    console.log(`Jogo: ${jogoAtual}`);
    console.log(`Total de acertos: ${acertos}`);
}


