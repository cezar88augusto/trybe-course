//Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. 
//Utilizando o mock, defina o retorno padrão como 10. 


const randomNumber = () => (Math.ceil(Math.random() * 100))

const isDivisible = (number) => (randomNumber() % number) === 0;