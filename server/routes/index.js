// const that is set to require Route.items object
const itemsController = require('../controllers').items;

/*TODO: Create item Routes for:

  //TODO: Create a Route that gets all items from DB: {id, item,name, emount, quility}

  //TODO: Create Route to update item using item ID 

  //TODO: Create Route to delete item using item ID

  //TODO: Retivie item using item ID to list all its attributes */

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the items API!',
  }));

  // Add items to the item controller from ../controllers using the post method
  app.post('/api/items',itemsController.create);

  // Get and list all items from the DB 
  app.get('/api/list',itemsController.list);


};