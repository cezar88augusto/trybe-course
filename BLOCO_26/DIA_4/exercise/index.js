/* 1 - Inicie os exercícios criando uma aplicação NodeJS, com os comandos já aprendidos. */

// npm init -y
// npm i express
// npm i nodemon -D
// npm i body-parser
// Mudar o package.json e adicionar uma chave em script.
// Opcional: para testar os links no terminar instalar:
// sudo apt install httpie

/* 2 - Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e retorne o JSON { "message": "Pong!" } . */

const express = require('express');
const app = express();

app.listen(3000);

app.get('/ping', (_req, res) => {
    res.send(
        { message: "Pong!" }
    );
});


/* 3 - Crie um endpoint que receba requisições do tipo POST no caminho /hello , 
// contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" } . */

// 4 - Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" } . 
// Caso o usuário tenha idade superior a 17 anos, retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 . Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401 ;

// POST precisa de instalar o pacote: body-parser
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
    const nome = req.body.name;
    const idade = req.body.age;

    if (parseInt(idade) > 17) {
        return res.status(401).json({ "message": `Hello ${nome}` })
    } else {
        return res.status(200).json({ "message": `Unauthorized` })
    }
});

//Rodar no terminal: http POST :3000/hello name=cezar

// 5 - Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o 
// JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" } 

app.put('/users/:name/:age', (req, res) => {
    res.json(`Seu nome é ${req.body.name} e você tem ${req.body.age} anos de idade`)
})

