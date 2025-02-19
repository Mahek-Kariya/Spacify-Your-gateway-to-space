import express from 'express';
import axios from 'axios';
import { title } from 'process';

const app = express();
const port = 3000;
const api_key = "icVRIGcvE2LkaOAYtvR292zcfffJ3JhpjdfPGHC6";

app.use(express.static("public"));

app.get("/pictureOfTheDay", async (req, res) => {
    try {
        const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
        console.log(result);
        res.render("pod.ejs",{
            date: result.data.date,
            title: result.data.title,
            image: result.data.url,
            explanation: result.data.explanation,
        })
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
});


app.listen(port, () => {
    console.log (`listening on port ${port}`);
});