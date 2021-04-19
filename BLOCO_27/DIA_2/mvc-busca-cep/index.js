const express = require('express');
const app = express();
const PORT = 3000;

const Address = require('./controller/index')

app.get('/cep/:cep', Address.getAddressByCep);

app.listen(PORT, () => {
    console.log(`Conectado! Porta: ${PORT}`);
});