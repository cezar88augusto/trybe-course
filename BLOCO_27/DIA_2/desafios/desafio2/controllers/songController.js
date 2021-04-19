const Song = require("../models/songModel");
const songService = require("../services/songService");

const getAllSongs = async (req, res) => {
	try {
		const results = await songService.getAllWithArtist();

		res.status(200).json(results);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const getSongById = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await songService.getByIdWithArtist(id);
		console.log(result);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const createSong = async (req, res) => {
	try {
		const { name, album, artist } = req.body;
		const result = await songService.createSongWithArtist(name, album, artist);

		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

const updateSong = async (req, res) => {
	try {
		const { name, album, artist } = req.body;
		const { id } = req.params;

		const result = await songService.updateSongWithArtist(id, name, album, artist);
		if (!result) {
			res.status(404).json({ message: "Música não encontrada :(" });
			return;
		}

		res.status(200).json({ id, name, album, artist });
	} catch (err) {
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
