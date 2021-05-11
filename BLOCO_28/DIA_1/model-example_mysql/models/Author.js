const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
    const fullName = [firstName, middleName, lastName].filter((name) => name).join(" "); //Join transforma o array em uma string separada por espaços.
    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName
    }
}

// Método para mudar as propriedades
const convertFields = (authorData) => {
    return {
        id: authorData.id,
        firstName: authorData.first_name,
        middleName: authorData.middle_name,
        lastname: authorData.last_name,
    }
}

const getAll = async () => {
    // EStá chegando um array dentro do outro, coloca-se o [] para descontruir e transformar em um array apenas.
    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
    return authors.map(convertFields).map(getNewAuthor);
};

module.exports = {
    getAll,
}