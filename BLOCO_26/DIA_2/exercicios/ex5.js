// Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const fs = require('fs');
const arquivo = 'simpsons.json'

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
async function readFile(archive) {
    const simpsons = await JSON.parse(fs.readFileSync(archive, 'utf-8'));
    simpsons.forEach(simpson => {
        console.log(simpson.id + " - " + simpson.name)
    });
}

// readFile(arquivo);

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function overrideFile(id) {
    const simpsons = await JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

    const isThereId = simpsons.some(simpson => {
        return simpson.id == id
    });

    const promise = new Promise((resolve, reject) => {
        if (!isThereId) {
            reject(new Error("Id não encontrado"));
        } else {

            const character = simpsons.filter(simpson => {
                if (simpson.id == id) {
                    return simpson;
                }
            })
            resolve(character);
        }
    });
    return promise;
}

/* overrideFile(15)
    .then(response => console.log(response))
    .catch(error => console.log(error)); */


// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function removeCharacter() {
    const simpsons = await JSON.parse(fs.readFileSync(arquivo, 'utf-8'));
    const removeCharacters = simpsons.filter(simpson => {
        if (simpson.id !== '6' && simpson.id !== '10') {
            return simpson;
        }
    })
    const removeCharacterToString = JSON.stringify(removeCharacters);
    fs.writeFileSync('./simpsons.json', removeCharacterToString);
};

/* removeCharacter();
readFile(arquivo); */

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

async function createArchive() {
    const simpsons = await JSON.parse(fs.readFileSync(arquivo, 'utf-8'));
    const simpsons1a4 = simpsons.filter(simpson => {
        if (parseInt(simpson.id) <= 4) {
            return simpson;
        };
    });

    const simpsons1a4ToString = JSON.stringify(simpsons1a4);
    fs.writeFileSync('./simpsonFamily.json', simpsons1a4ToString);
};

// createArchive();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

async function addCharacter() {
    const simpsons = await JSON.parse(fs.readFileSync('./simpsonFamily.json', 'utf-8'));
    simpsons.push({ id: '5', name: 'Neslon Muntz' });
    console.log(simpsons);
}

addCharacter();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

async function overrideCharacter() {
    const simpsons = await JSON.parse(fs.readFileSync('./simpsonFamily.json', 'utf-8'));
    const changedSimpson = simpsons.filter(simpson => {
        if( simpson.name === 'Neslon Muntz'){
           return simpson.name = 'Maggie Simpson';
        }
        return simpson;
    })
    console.log(changedSimpson);
};

overrideCharacter();