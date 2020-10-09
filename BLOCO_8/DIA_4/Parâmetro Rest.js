//Com o uso do parâmetro rest, podemos reunir qualquer número de argumentos em um array e fazer o que quisermos com eles.
// https://www.geeksforgeeks.org/javascript-rest-operator/

//Exemplo 1
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2));
console.log(fun(10, 10, 10));
console.log(fun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//-------------------

//Exemplo 2
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan 
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ] 
    console.log(c[0]); //Lionel 
    console.log(c.length); //3 
    console.log(c.indexOf('Lionel')); //0 
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');

//-------------------

//Exemplo 3

const sum = (...args) => {

    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));
