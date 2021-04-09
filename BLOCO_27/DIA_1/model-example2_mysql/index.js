// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Books = require('./models/Books')
const Authors = require('./models/Authors')

app.get('/books', async (req, res) => {
    // Obtém o ID do autor da query string
    const { author_id } = req.query;
    const books = (author_id)
        // Caso o ID tenha sido informado, busca livros daquele autor
        ? await Books.getByAuthorId(author_id)
        // Caso o ID não tenha sido infomado, busca todos os livros
        : await Books.getAll();
    // Agora, com os resultados em mão, enviamos o status http e os resultados.
    res.status(200).json(books);
});

// para buscar o id do autor no POSTMAN:
// selecionar PARAMS
// colocar a key como author_id 
// colocar value como 1 ou qualquer outro número.


app.get('/book/:id', async (req, res) => {
    // Extraímos o id da URL
    const { id } = req.params;
    // Pedimos para o model buscar um livro com esse ID.
    const book = await Books.getById(id);
    // Caso o retorno seja null, ou seja, o livro não existe
    // Retornamos o status 404 Not Found, e uma mensagem de erro
    if (!book) return res.status(404).json({ message: 'Book not found' })
    // Caso tenhamos encontrado um livro, retornamos o status 200 OK
    // E o livro encontrado.
    res.status(200).json(book);
});

// para buscar o id do autor no POSTMAN:
// basta coloca um número após /book/

app.post('/books', async (req, res) => {
    const { title, authorId } = req.body;
    if (Books.isValid(title, authorId)) {
        return res.status(400).json({ message: 'Dados de livro inválidos'})
    }
    await Books.create(null, title, authorId);
    res.status(201).json({ message: 'Livro criado com sucesso! '})
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;
    if (!Authors.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }
    await Authors.create(first_name, middle_name, last_name);
    res.status(201).json({ message: 'Autor criado com sucesso! ' });
});


app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
