const Rest = require('mongoose').model('Rest');

module.exports = {
    index(req, res) {
        // get all resources
        Rest.find({})
            .then(rests => res.json(rests))
            .catch(console.log);
    },
    create(req, res) {
        // create resource
        Rest.create(req.body)
            .then(rest => res.json(rest))
            .catch(error => {
                res.status(500)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                    );
            });
    },
    read(req, res) {
        // get one resource
        Rest.findById(req.params.rest_id)
            .then(rest => res.json(rest))
            .catch(console.log);
    },
    update(req, res) {
        // update resource
        Rest.findByIdAndUpdate(req.params.rest_id, req.body, { new: true })
            .then(rest => res.json(rest))
            .catch(console.log);
    },
    delete(req, res) {
        // delete resource
        Rest.findByIdAndRemove(req.params.rest_id)
            .then(rest => res.json(rest))
            .catch(console.log);
    },
};

