//1 - Dada uma matriz de matrizes, transforme em uma única matriz.   
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const concat = (result, position) => result.concat(position);

function flatten() {
    return arrays.reduce(concat);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);