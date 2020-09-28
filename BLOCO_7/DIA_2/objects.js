//Parte I - Adicionando novas chaves (keys)
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

//Prática

const employee = {
    name: 'Cézar',
    company: 'Google',
    position: 'Systems Analyst'
}

function addPropreties(object, keyNameParameter, salary) {
    let keySalary = keyNameParameter;
    object[keySalary] = salary;
    return console.log(object);
}

addPropreties(employee, 'wage', 1000);

//Parte II - Object.keys
// Obs.: Retona as chaves de um objeto.
//Objects.value são os valores do objeto.

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (i in arrayOfSkills) {
        console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
    }
    console.log();
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

//Parte III - Object.values

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }

    return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

//Parte IV - Object.entries

//Observe que o retorno dele é um array e que cada um de seus elementos é um outro array com apenas dois dados, a chave do objeto e o seu valor. 
//Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

//Parte V - Object.assign

//Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!
//Como você pode ver, ele recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.

//Ex 1:
const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

const info = {
    age: 23,
    job: 'engenheiro',
};

const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

//Ex: 2
const person = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

//Observação:
//Clonar um objeto e não mudar as propriedades do objeto o qual está sendo clonado.

const person = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
