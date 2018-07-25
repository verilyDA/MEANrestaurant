const commRoute = require('./commRoutes');
const restRoute = require('./restRoutes');
const router = require('express').Router();

module.exports = router
    .use('/comm', commRoute)
    .use('/rest', restRoute);