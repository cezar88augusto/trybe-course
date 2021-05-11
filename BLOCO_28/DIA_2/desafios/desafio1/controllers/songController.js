const Song = require("../models/songModel");

const getAllSongs = async (req, res) => {
	try {
		const results = await Song.getAll();

		res.status(200).json(results);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const getSongById = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await Song.getById(id);
		console.log(result);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const createSong = async (req, res) => {
	try {
		const { name, album } = req.body;
		const result = await Song.create(name, album);

		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const updateSong = async (req, res) => {
	try {
		const { name, album } = req.body;
		const { id } = req.params;

		const result = await Song.update({ id, name, album });
		if (!result) {
			res.status(404).json({ message: "Música não encontrada :(" });
			return;
		}

		res.status(200).json({ id, name, album });
	} catch (e) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const deleteSong = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await Song.exclude(id);

		res.status(204).end();
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};


module.exports = {
	getAllSongs,
	getSongById,
	createSong,
	updateSong,
	deleteSong
};
