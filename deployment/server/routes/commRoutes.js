const { commentController } = require('../controllers');
//const commentController = require('../controllers/commentController); this is the non barrel version

const router = require('express').Router();

// /comments/:comment_id

module.exports = router
    .get('/:rest_id', commentController.index)
    .post('/', commentController.create)
    .get('/:comment_id', commentController.read)
    .put('/:comment_id', commentController.update)
    .delete('/:comment_id', commentController.delete)