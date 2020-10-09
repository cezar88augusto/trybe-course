//Exemplo 1:
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

//Exemplo 2:

const increment = (number, value = 1) => number + value;


console.log(increment(5,2)); //7
console.log(increment(5)); //6