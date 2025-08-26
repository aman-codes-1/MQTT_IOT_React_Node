import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoute from './routes/api.js';
import webRoute from './routes/web.js';

const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(apiRoute);
app.use(webRoute);

app.listen(PORT, () => { console.log(`Server started at http://localhost:${PORT}`); });