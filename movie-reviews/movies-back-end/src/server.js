import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const app = express();

app.use(bodyParser.json());

// app.get('/hello', (req, res) => res.send("hello"));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`))
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));

app.get('api/movies/:title', async(req, res) => {
    try {
    const movieTitle = req.params.title;
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('movies');
    const movieInfo = await db.collection('movies').findOne({ title: movieTitle});
    res.status(200).json(movieInfo);
    client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error});
    }
})

app.listen(8000, () => console.log('Listening on port 8000'));