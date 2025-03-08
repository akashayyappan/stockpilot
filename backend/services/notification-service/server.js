import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Notification service');
});

app.listen(3001, async () => {
    console.log('Server is running on port 3003');
});
