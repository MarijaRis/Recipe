import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';

import indexRouter from './indexRouter/index';

const app = express();
const port = process.env.PORT || 3001;


app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.use(indexRouter);


app.get('/', (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`app is running on port ${port}`));