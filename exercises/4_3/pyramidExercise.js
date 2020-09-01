// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

 let n = 5;
 let asteriscos = "*****";

 for (let i = 0; i < n; i++) {

     console.log(asteriscos)
 }

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
//Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n2 = 5;
let asteriscos = "*"
let valores = "";

for (let i = 0; i < n2; i++) {
    console.log(valores += asteriscos)
}

//3- Agora inverta o lado do triângulo. 
//Por exemplo:

//n = 5

//    *
//   **
//  ***
// ****
//*****

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. 
//Você precisará de uma lógica para imprimir espaços também.

let n3 = 5;
let asteriscos = "*";
let valores = "";
let espaços = " ";

for (let i = 0; i <= n3; i++) {
    valores = "";
    for (let j = 0; j < n3; j++) {
        if (j < n3 - i) {
            valores += espaços;
        }
        else {
            valores += asteriscos
        }

    }
    console.log(valores);
}

//4- Depois, faça uma pirâmide com n asteriscos de base:
//n = 5

//  *
// ***
//*****

let n3 = 5;
let asteriscos = "*";
let valores = "";
let espaços = " ";

let meioLinha = Math.ceil(n3 / 2);
let linhaDireta = meioLinha;
let linhaEsquerda = meioLinha;

for (let i = 1; i <= meioLinha; i++) {

    for (let j = 1; j <= n3; j++) {

        if (j >= linhaDireta && j <= linhaEsquerda) {
            valores += asteriscos;
        } else {
            valores += espaços;
        }

    }

    linhaDireta = linhaDireta - 1;
    linhaEsquerda = linhaEsquerda + 1;
    console.log(valores);
    valores = "";

}

// Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
//Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.


let numero = 5;
let contador = 0;

for (let i = 1; i <= numero ; i++) {
    if (numero%i==0) {
        contador+=1;
    }
    
}


if (contador > 2) {
    console.log("Não é primo.")
}else if (numero == 2 || numero ==3 || contador <= 2){
    console.log("É primo!")
}




