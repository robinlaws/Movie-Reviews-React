const express = require("express");
const app = express();
const mongoose = require('mongoose');
const movieModel = require('./models/movieModels')
const cors = require('cors');
const { db } = require("./models/movieModels");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/movies');

app.get("/api/getMovies", (req, res) => {
    movieModel.find({}, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    });
});

app.post("/api/createMovie", async (req, res) => {
    const movie = req.body;
    const newMovie = new movieModel(movie);
    await newMovie.save();
    res.json(movie);
});

app.post("/api/updateMovies", async (req, res) => {
    const movie = req.body;
    await db.collection("movie").findOneAndDelete({title: movie.title});
    movieModel.findOneAndDelete({ title: movie.title}, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json("Deleted from database.");
        }
    });
});

app.listen(8000, () => console.log("Server running. Listening on 8000"));