//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula. 

const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((concat, element) => concat += element).split('').reduce((acc, letter) => {
        if (letter == 'a' || letter == 'A') {
            return acc + 1;
        } else {
            return acc;
        }

    }, 0);
}

console.log(containsA());

assert.deepEqual(containsA(), 20);
