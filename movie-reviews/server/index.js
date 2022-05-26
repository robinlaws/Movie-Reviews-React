const path = require('path');

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const movieModel = require('./models/movieModels')
const cors = require('cors');
const multer = require('multer');
const { db } = require('./models/movieModels');


const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/movieImages/');
    }, 
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        },

    });
const upload = multer({
    storage: fileStorageEngine
});
app.use(express.static(path.join(__dirname, '/build')))
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

app.post("/api/uploadJSON", upload.single("JSON"), async (req, res) => {
    const body = req.file;
    console.log(body)
    movieModel.insertMany({body}, function(err, result) {
        if(err){
            res.json(err);
        } else{
            res.json(result)
        }

        db.close();
    })
});

app.post("/api/createMovie", upload.single("image"),  async (req, res) => {
    const newMovie = new movieModel({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        actors: req.body.actors,
        release: req.body.release,
        rating: req.body.rating,
        image: req.file.filename
    })
    await newMovie.save();
    res.json(newMovie);
});

app.post("/api/updateMovies", async (req, res) => {
    const movieTitle = req.body.title;
    movieModel.findOneAndDelete({title: movieTitle} , function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log("Server running. Listening on 8000"));


