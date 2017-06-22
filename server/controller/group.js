module.exports = {
  create(req, res) {
    return groups
      .create({
        title: req.body.title,
      })
      .then(groups => res.status(201).send(groups))
      .catch(error => res.status(400).send(error));
},
};