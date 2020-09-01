//Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner, você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. 
//Faça programas para:

//Adição
//Subtracão
//Multiplicação
//Divisão
//Módulo

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let c = 20;
let d = 10;

if (c > d) {
    console.log(c);
} else {
    console.log(d);
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let e = 10;
let f = 20;
let g = 30;

if (e > f && e > g) {
    ;
    console.log("Maior: " + e)
} else if (f > e && f > g) {
    console.log("Maior: " + f);
} else {
    console.log("Maior: " + g);
}

//4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let h = 0;

if (h == 0) {
    console.log("Zero");
} else if (h > 0) {
    console.log("Positive");

} else {
    console.log("Negative");
}

//5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
//    Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let a1 = 60;
let a2 = 61;
let a3 = 60;
let resp = a1 + a2 + a3;

if (resp == 180) {
    console.log("É um triângulo!");

} else {
    console.log("Erro! Não é um triângulo");
}

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop -> diagonals

let peca = "BisPo";

switch (peca.toLowerCase()) {
    case 'peão':
        console.log("Move uma ou duas casas a frente, derreuba peças na diagonal.")

        break;
    case 'cavalo':
        console.log("Se movimenta em L.");

        break;
    case 'bispo':
        console.log("Se movimenta na diagonal.");
        break;
    case 'torre':
        console.log("Se movimentar sempre em linha reta, quantas casas forem necessárias.");

        break;
    case 'rainha':
        console.log("Se movimenta em qualquer direção, quantas casas forem necessárias.");

        break;
    case 'rei':
        console.log("Se movimenta em qualquer direção, apenas uma casa por turno.");

        break;

    default:
        console.log("Peça não existe no Xadrez.");
}

//7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F

//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 100;

if (nota >= 0 && nota <= 100) {

    if (nota >= 90) {

        console.log("A");
    } else if (nota >= 80) {
        console.log("B");

    } else if (nota >= 70) {

        console.log("C");
    } else if (nota >= 60) {
        console.log("D");

    } else if (nota >= 50) {
        console.log("E");

    }
    else {
        console.log("F");
    }

} else {
    console.log("Valor deve ser estar entre 0 e 100");
}

//8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

let n1 = 5;
let n2 = 7;
let n3 = 7;
let vBool = false;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
    vBool = true;
    console.log(vBool);
} else {
    console.log(vBool);
}

//9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
//Bonus: use somente um if.

let n3 = 8;
let n4 = 8;
let n5 = 8;
let vBool2 = false;

if (n3 % 2 == 0 || n4 % 2 == 0 || n5 % 2 == 0) {
    vBool2 = true;
    console.log(vBool2);
} else {
    console.log(vBool2);
}

//10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorCusto = 200;
let valorVenda = 300;
let impostoSobreOCusto = 0.20;
let valorCustoTotal = valorCusto + (valorCusto * impostoSobreOCusto);
let lucro = (valorVenda - valorCustoTotal) * 1000;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Valores de entrada, incorretos.")
} else {
    console.log("R$ " + lucro);
}

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
//Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//INSS

//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//IR

//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

//Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

//O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//R$ 2.670,00: salário com INSS já deduzido;
//7.5%: alíquota de imposto de renda;
//R$ 142,00 parcela a se deduzir do imposto.
//Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

//Resultado: R$ 2.612,55.

//Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salario = 3000;
let aliquota = 0;

if (salario <= 1556.94) {

    aliquota = salario * 0.08;

} else if (salario >= 1556, 95 && salario <= 2594.92) {

    aliquota = salario * 0.09;

} else if (salario >= 2594.93 && salario <= 5189.82) {

    aliquota = salario * 0.11;

} else {

    aliquota = 570.88;

}

let salarioBase = salario - aliquota;


if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {

    salarioBase -= (salarioBase * 0.075) - 142.8;

} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {

    salarioBase -=  (salarioBase * 0.15) - 354.8;


} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {

    salarioBase -= (salarioBase * 0.225) - 636.13;

} else {
    
    salarioBase -= (salarioBase * 0.275) - 869.36;

}

console.log(salarioBase);




