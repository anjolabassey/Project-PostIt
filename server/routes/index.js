const user = require('../controllers').user;
const groups = require('./controller').group;
const messages = require('./messqges');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome!',
  }));

  app.post('/api/user', user.create);
  app.post('/api/group', group.create);
};