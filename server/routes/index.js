const user = require('../controller').user;
const group = require('./controller').group;
const groupuser = require('./controller').groupuser;
const messages = require('./controller').messages;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome !',
  }));

  app.post('/api/user/signup', user.create);
  app.post('/api/group/creategroup', group.create);
  app.post('/api/group/id/groupuser', groupuser.create);
  app.post('/api/group/id/messages', messages.create);
};