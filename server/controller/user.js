const user = require('../models').user;

module.exports = {
  create(req, res) {
    if(!req.body.name){
      res.json({message:"username is required"})
    }
    else if (!req.body.email){
      res.json({message:"email is required"})
    }
    else if(!req.body.password){
      res.json({message:"password is required"})
    }
    else if(req.body.password != req.body.confirmpassword){
      res.json({message:"please ensure the password match"})
    }
    else
    {}
    return user
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
},
  },
};