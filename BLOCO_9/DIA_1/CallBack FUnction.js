//Fonte: https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22

//Exemplo:

let salarioBruto = 3000;
let salarioLiquido;

getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O salário liquido é ${salarioLiquido}`);
});

function getSalario(salarioBruto, callback) {
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;

    return callback(liquido);
}

//Exercício 1:

//No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. 
//Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
    const userToReturn = {
        firstName: "Ivan",
        lastName: "Ivanovich",
        nationality: "Russian"
    };

    return userNationality(userToReturn);

};

//assert.equal(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser

//Exercício 2:

//No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. 
//Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
    setTimeout(() => {
        const user = {
            firstName: "Ivan",
            lastName: "Ivanovich",
            nationality: "Russian"
        };
        console.log(userFullName(user));
        console.log(userNationality(user));
    }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

//Exercício 3:

//A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. 
//Adicione um outro callback para getCountry, de forma que trate a mensagem de erro retornada.

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, printErrorMessage) => {
    setTimeout(() => {
        const didOperationSucceed = Math.random() >= 0.5;
        if (didOperationSucceed) {
            const country = {
                name: "Brazil",
                hdi: 0.759,
                currency: "Real",
            };
            return onSuccess(country);
        }
        else {
            const errorMessage = "Country could not be found";
            return printErrorMessage(errorMessage);
        }
    }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);