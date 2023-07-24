const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const logger = require('./middlewares.js');
const routes = require('./routes/routes.js')

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(logger);
app.use(routes);

function start() {
    try {
        app.get('/', (req, res) => {
            res.send('hello bro')
        })
        app.listen(PORT, () => console.log('Сервер успешно запущен на', PORT));
    } catch (err) {
        console.log(err);
    }
}

start();