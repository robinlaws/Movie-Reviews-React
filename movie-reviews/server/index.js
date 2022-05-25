const express = require("express");
const app = express();
const mongoose = require('mongoose');
const movieModel = require('./models/movieModels')
const cors = require('cors');
const { db } = require("./models/movieModels");
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/public/movieImages");
    }, 
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    });
const upload = multer({
    storage: fileStorageEngine
});
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

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


app.post("/api/createMovie", upload.single("imageFile"),  async (req, res) => {
    const movie = req.body;
    console.log(movie);
    const fileDestination = movie.imageFile[0].destination;
    console.log(fileDestination);
    movie.image = fileDestination;
    const newMovie = new movieModel(movie);
    await newMovie.save();
    res.json(movie);
});

app.post("/api/updateMovies", async (req, res) => {
    const movie = req.body;
    await db.collection("movie").findOneAndDelete({title: movie.title});
    // let doc = movieModel.findOneAndDelete({ title: movie.title}, (err, result) => {
    //     if (err) {
    //         res.json(error);
    //     } else {
    //         res.json("Deleted from database.");
    //     }
    // }).then()
});

app.listen(8000, () => console.log("Server running. Listening on 8000"));