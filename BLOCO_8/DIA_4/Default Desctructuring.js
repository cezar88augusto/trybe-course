//Incluir uma propriedade para person:

const person = {
    name: "João",
    lastName: "Jr",
    age: 34
}

const { nationality = "Brazilian" } = person
console.log(nationality) // Brazilian

//Analogamente, o mesmo pode ser feito na hora de desestruturar um array:

const position2d = [1.0, 2.0, 7.0]
const [x, y, w, z = 0] = position2d

console.log(x) // 1
console.log(y) // 2
console.log(w) // 7
console.log(z) // 0

//Exercício:

//Do jeito que está, a chamada nationality(person) retorna João is undefined.😭
//Ajuste a arrow function nationality para que a chamada de nationality(person) retorne João is Brazilian.

const result = ({ firstName, person }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const {nationality = 'Brazilian'} = person;

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(result(otherPerson)) // Ivan is Russian
console.log(result(person))