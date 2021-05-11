// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const Author = require('./controllers/Author');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/author/:id', Author.findById);
app.post('/authors', Author.create);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
