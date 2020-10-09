//SEM
const createPerson = (name, age, gender) => {
    "use strict";
    return {
        name: name,
        age: age,
        gender: gender
    };
};

//COM
const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};
