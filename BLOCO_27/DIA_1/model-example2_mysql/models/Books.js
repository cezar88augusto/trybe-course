const connection = require('./connection');
const Authors = require('./Authors')

const getAll = async () => {
    // Está chegando um array dentro do outro, coloca-se o [] para descontruir e transformar em um array apenas.
    const [books] = await connection.execute('SELECT * FROM books');
    return books;
};

const getByAuthorId = async (authorId) => {
    // Utilizamos o `id` informado para buscar livros no banco
    const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
    // O caractere `?` na query será substituído pelo `authorId` que informamos no Array.
    const [books] = await connection.execute(query, [authorId]);

    // Após obter os livros, convertemos os nomes dos campos e retornamos o resultado.
    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id
    }));
};

const getById = async (id) => {
    const query = 'SELECT * FROM model_example.books WHERE id=?;'
    // Utilizamos o Id recebido por parâmetro para executar a query e buscar o livro espeficicado.
    const [books] = await connection.execute(query, [id]);
    // Caso nenhum livro tenha sido encontrado, retornamos `null`.
    if (books.length === 0) return null;
    // Para os livros que encontramos, convertemos as colunas do banco para propriedades da nossa entity.
    // E retornarmos os resultados.
    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id
    }))[0];
};



const isValid = async(title, authorId) => {

    const x = await Authors.getByAuthorId(authorId);

    if (!x) return false;
    if (!title || typeof title !== 'string') return false;
    if (!authorId || typeof authorId !== 'string') return false;

    return true;
};

const create = async (id, title, authorId) => connection.execute(
    'INSERT INTO model_example.books (id, title, author_id) VALUES (?,?,?)',
    [id, title, authorId]
);

module.exports = {
    getAll,
    getByAuthorId,
    getById,
    isValid,
    create
};