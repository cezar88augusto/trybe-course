const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Aqui o body-parser entra convertendo o body para JSON

app.post('/', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
})

app.listen(3000, () => console.log('rodando na clássica 3000'));