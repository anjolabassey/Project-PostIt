const messages = require('../models').messages;

module.exports = {
  create(req, res) {
    if(!req.body.content ){
        res.json({message:"enter the message content"})
      }
      else if (!req.body.group_id){
        res.json({message:"select the group for the message"})
      }
      else
      { 
    return messages
      .create({
        content: req.body.content,
        group_id: req.body.group_id,
      })

      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
}
  },
};