const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: {type: String},
    release: {type: String},
    actors: {type: String},
    image: {type: String},
    rating: {type: String},
}, {timestamps: true});

const movieModel = mongoose.model("movies", movieSchema, 'movie');
module.exports = movieModel;



