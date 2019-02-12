const itemsController = require('../controllers').items;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the items API!',
  }));

  app.post('/api/items', itemsController.create);
};