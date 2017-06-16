module.exports = {
  create(req, res) {
    return messages
      .create({
        content: req.body.content,
        })
      .then(messages=> res.status(201).send(messages))
      .catch(error => res.status(400).send(error));
},

};