const Song = require('../models/songModel');
const Artist = require('../models/artistModel');

const getAllWithArtist = async () => {

    const songs = await Song.getAll();
    const songsWithArtist = await Promise.all(songs.map(async (song) => {
        const artist = await Artist.getById(song.artist);

        return { ...song, artist: { name: artist.name }};
    }));

    return songsWithArtist;
};

const getByIdWithArtist = async (id) => {

    const objSong = await Song.getById(id);
    if(!objSong) {
        return null;
    }

    const artist = await Artist.getById(objSong.artist);

    return { ...objSong, artist: { name: artist.name }};

};

const createSongWithArtist = async (name, album, artist) => {

    let objArtist = await Artist.getByName(artist);
    if(!objArtist) {
        objArtist = await Artist.create(artist);
    }

    const songWithArtistId = { name, album, artist: objArtist._id };
    const newSong = await Song.create(songWithArtistId);

    return newSong;
};

const updateSongWithArtist = async (id, name, album, artist) => {

    const objSong = await Song.getById(id);
    if(!objSong) {
        return null;
    }

    let objArtist = await Artist.getByName(artist);
    if(!objArtist) {
        objArtist = await Artist.create(artist);
    }

    const songWithArtistId = { id, name, album, artist: objArtist._id };
    const updateSong = await Song.update(songWithArtistId);

    return updateSong;
};

module.exports = {
    getAllWithArtist,
    getByIdWithArtist,
    createSongWithArtist,
    updateSongWithArtist,
};