// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const Author = require('./models/Author')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
    const authors = await Author.getAll();
    res.status(200).json(authors);
});

app.get('/author/:id', async (req, res) => {
    const { id } = req.params;
    const author = await Author.findById(id);
    if (!author) return res.status(404).json({ message: 'Author not found' })
    res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
    const { firstName, middleName, lastName } = await req.body;
    if (!Author.isValid(firstName, middleName, lastName)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }
    await Author.create(firstName, middleName, lastName);
    res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});