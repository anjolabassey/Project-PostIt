const user = require('../models').user;

module.exports = {
  create(req, res) {
    return user
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
},
delete(req, res) {
    return user
      .delete({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(404).send(error));
  },
};