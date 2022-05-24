import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';

const app = express();

app.use(bodyParser.json());

const withDB = async(operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client('movies');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', err});
    }
}

app.get('/api/getMovies', async(req, res) => {
        withDB(async(db) => {
            const movieJSON = await db.collection('movie').find({});
            console.log(movieJSON);
        while (movieJSON.hasNext()){
            movieList.push(movieInfo);
        }
        console.log(movieList);
        res.status(200).json(movieInfo);
    }, res)
})

app.listen(8000, () => console.log('Listening on port 8000'));