const Items = require("../models").Items;

/*
  This will be in charge if modifications to the items in the DB
  TODO: Listing all items in the DB using its ID
  TODO: Update a item using its ID
  TODO: Delete a item using its ID
*/

module.exports = {
  // Create items and add them to the DB
  create(req, res) {
    return Items.create({
      title: req.body.title
    })
      .then(items => res.status(201).send(items))
      .catch(error => res.status(400).send(error));
  },

  // List all items created
  list(req, res) {
    return Items.all()
      .then(items => res.status(201).send(items))
      .catch(error => res.status(400).send(error));
  }

  // Delete an item from the DB using its ID

  // Update an items informtion using its id
};
