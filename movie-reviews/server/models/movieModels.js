const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    release: {type: String, required: true},
    actors: {type: String, required: true},
    image: {type: String, required: true},
    rating: {type: String, required: true},
});

const movieModel = mongoose.model("movies", movieSchema, 'movie');
module.exports = movieModel;

