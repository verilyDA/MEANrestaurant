const Comm = require('mongoose').model('Comm'); 

module.exports = {
    index(req, res) {
        // get all resources
        Comm.find({"for_rest": req.params.rest_id})
            .then(comms => res.json(comms))
            .catch(console.log);
    },
    create(req, res) {
        // create resource
        Comm.create(req.body)
            .then(comm => res.json(comm))
            .catch(error => {
                res.status(500)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                    );
            });
    },
    read(req, res) {
        // get one resource
        Comm.findById(req.params.comment_id)
            .then(comm => res.json(comm))
            .catch(console.log);
    },
    update(req, res) {
        // update resource
        Comm.findByIdAndUpdate(req.params.comment_id, req.body, { new: true })
            .then(comm => res.json(comm))
            .catch(console.log);
    },
    delete(req, res) {
        // delete resource
        Comm.findByIdAndRemove(req.params.comment_id)
            .then(comm => res.json(comm))
            .catch(console.log);
    },
};

