const { restController } = require('../controllers');
//const restController = require('../controllers/restController); this is the non barrel version

const router = require('express').Router();

// /rests/:rest_id

module.exports = router
    .get('/', restController.index)
    .post('/', restController.create)
    .get('/:rest_id', restController.read)
    .put('/:rest_id', restController.update)
    .delete('/:rest_id', restController.delete)