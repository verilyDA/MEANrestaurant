const router = require('express').Router();
const path = require('path');

router.all('*', function(req, res) {
    res.sendFile(path.resolve('dist/deployment/index.html'));
    //res.sendFile(path.join(__dirname, '../../dist/ims/index.html'))
});

module.exports = router;