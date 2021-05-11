const connection = require("../config/conn");
const { ObjectId } = require("mongodb");

const getAll = async () =>
	connection().then((db) => db.collection("artists").find().toArray());

const getById = async (id) => {
	return connection().then((db) => db.collection("artists").findOne({ _id: ObjectId(id) }));
};

const getByName = async (name) => {
	return connection().then((db) => db.collection("artists").findOne({ name }));
};

const create = async (name) => {
	const artist = await connection().then((db) =>
		db.collection("artists").insertOne({ name })
	);

	return { _id: artist.insertedId, name };
};

module.exports = {
	getAll,
	getById,
	getByName,
	create,
};
