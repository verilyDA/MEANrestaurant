const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const sessionConfig = {
    saveUninitialized: true,
    secret: 'supersecretsquirrelstuff',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 36000,
    }
}

require('./server/config/database');


app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(logger('dev'))
    .use(express.static(path.join(__dirname, 'dist/deployment')))
    .use(session(sessionConfig))
    .use(cookieParser('supermansmomismarthasoisbatmansinstabesties'))
    .use('/api/', require('./server/routes'))
    .use(require('./server/routes/catchAllRoutes'));

app.listen(port, () => console.log('Express listening on port: ' + port));
