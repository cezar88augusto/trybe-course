const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;

    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' ');

    return {
        id,
        firstName,
        middleName,
        lastName,
        name: fullName,
    };
};

const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
        .then((authors) =>
            authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}

const findById = async (id) => {
    if (id.toString().length < 24) return null;
    const authorData = await connection()
        .then((db) => db.collection('authors').findOne(ObjectId(id)))

    console.log(typeof (ObjectId(id)));

    if (!authorData) return null;
    const { _id, firstName, middleName, lastName } = authorData;
    return getNewAuthor({
        id: _id,
        firstName,
        middleName,
        lastName,
    });
};

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => {
    await connection().then()
        .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
}


module.exports = { getAll, findById, create, isValid };