//SEM FIND
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 5 === 0) {
        firstMultipleOf5 = numbers[i];
        break;
    }
}

console.log(firstMultipleOf5);

//COM FIND
//ENCOTRA O PRIMEIRO ELEMENTO!
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf5);

//---------------
//Outro exemplo:

const users = [
    { name: 'Cézar', isDriver: true },
    { name: 'MC', isDriver: false },
    { name: 'Luísa', isDriver: true },
    { name: 'x', isDriver: false },
];

const resp = users.find((user) => {
    return user.isDriver === false;
})

console.log(resp);