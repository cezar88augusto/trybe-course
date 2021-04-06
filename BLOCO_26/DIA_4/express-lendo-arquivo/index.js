const fs = require('fs');
const express = require('express');
const app = express();

app.listen(3000);

// Utilize o modulo fs do Node para ler/escrever arquivos.
async function readFile() {
    const simpsons = await JSON.parse(fs.readFileSync('simpsons.json', 'utf-8'));
    return simpsons;
}

// Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
app.get('/simpsons', async (_req, res) => {
    const result = await readFile();
    res.status(200).send(result);
});

// Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
app.use(function (err, _req, res, _next) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

// Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.

async function getSimpsonById(id) {
    const simpsons = await JSON.parse(fs.readFileSync('simpsons.json', 'utf-8'));
    const filteredSimpson = simpsons.filter((simpson) => {
        if (simpson.id === id) {
            return simpson;
        }
    })
    return filteredSimpson;
}

app.get('/simpsons/:id', async (req, res) => {
    const result = await getSimpsonById(req.params.id);
    res.status(200).send(result);
  });

  //Terminal: http GET :3000/simpsons/5