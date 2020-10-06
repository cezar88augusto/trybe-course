//Função map: manipula um array e cria outro array.
//Serve para trocar um variável, propriedade de um objeto, adicionar uma string nova, criar um nova regra de negócio.

let listaDePessoasAprovadas = [
    { email: 'a@a.com' },
    { email: 'b@b.com' },
    { email: 'c@c.com' },
    { email: 'd@d.com' },
    { email: 'e@e.com' },
    { email: 'f@f.com' },
];

const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`)
};

let listaDeEmails;
listaDeEmails = listaDePessoasAprovadas.map((email) => {
    return { email: email.email, nota: 10 };
});

console.log(listaDeEmails);

listaDeEmails.forEach(element => {
    enviarEmail(element);
});

//EXEMPLO SEM FUNÇÃO MAP:

const persons = [
    { firstName: "Maria", lastName: "Ferreira" },
    { firstName: "João", lastName: "Silva" },
    { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for (let i = 0; i < persons.length; i += 1) {
    fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);

//EXEMPLO COM FUNÇÃO MAP

const persons = [
    { firstName: "Maria", lastName: "Ferreira" },
    { firstName: "João", lastName: "Silva" },
    { firstName: "Antonio", lastName: "Cabral" },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames);