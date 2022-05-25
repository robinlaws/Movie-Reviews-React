const express = require("express");
const app = express();
const mongoose = require('mongoose');
const movieModel = require('./models/movieModels')
const cors = require('cors');
const { db } = require("./models/movieModels");
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    }, 
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    });
const upload = multer({
    storage: fileStorageEngine
});
app.use('/uploads', express.static(__dirname + '/uploads'));
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


app.post("/api/createMovie", upload.single("image"),  async (req, res) => {
    console.log(req.file);
    const newMovie = new movieModel({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        actors: req.body.actors,
        release: req.body.release,
        rating: req.body.rating,
        image: req.file.path
    })
    await newMovie.save();
    res.json(newMovie);
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