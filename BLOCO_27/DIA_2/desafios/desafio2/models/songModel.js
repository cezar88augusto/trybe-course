const connection = require("../config/conn");

const { ObjectId } = require("mongodb");

const getAll = async () =>
	connection()
        .then((db) => db.collection("songs").find().toArray());

const getById = async (id) => {
	if (!ObjectId.isValid(id)) return null;

	return connection().then((db) =>
		db.collection("songs").findOne(ObjectId(id))
	);
};

const create = async ({ name, album, artist }) => {
	const song = await connection().then((db) =>
		db
			.collection("songs")
			.insertOne({ name, album, artist })
	);

	return { _id: song.insertedId, name, album, artist };
}

const update = async ({ id, name, album, artist }) => {
	if (!ObjectId.isValid(id)) return null;

	const song = await connection().then((db) =>
		db
			.collection("songs")
			.updateOne({ _id: ObjectId(id) }, { $set: { name, album, artist } })
	);
	return song;
};

const exclude = async (id) => {
	if (!ObjectId.isValid(id)) return null;

	return connection().then((db) => {
		return db.collection("songs").deleteOne({ _id: ObjectId(id) });
	});
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	exclude
};
