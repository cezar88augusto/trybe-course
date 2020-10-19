//Exemplo 1:
const enviarEmail = (pessoaAprovada) => {
    const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
    const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
    console.log(mensagem);
}

const listaDePessoasAprovadas = [
    { nome: 'A', email: 'a@a.com', nota: 51 },
    { nome: 'B', email: 'b@b.com', nota: 50 },
    { nome: 'C', email: 'c@c.com', nota: 0 },
    { nome: 'D', email: 'd@d.com', nota: 0 },
    { nome: 'E', email: 'e@e.com', nota: 0 },
    { nome: 'F', email: 'f@f.com', nota: 0 },
];

//A variável pessoasFiltradas receberá o resultado do filtro.
//A função filter, pode receber três parâmetros: elemento, index e o próprio array.
const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa) => pessoa.nota >= 100);
console.log(pessoasFiltradas);

pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));

//Exemplo 2:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2);

//Exemplo 3:

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));

//Exemplo 4:
//Outra forma de se usar o filter é retornar um array sem o elemento desejado. 
//É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
    return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
