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
  },

  // // Returns the item using its Id
  retrive(req, res) {
    return Items
    .findAll(req.params.id, {
      // Sequlize query command bellow
      // TODO: get the where clause working so i can search using id 
      /*FIXME: currently not working. need to work out how to make a custome query call 
               SELECT * FROM DB WHERE ID = 1;
      */
      include: [
        {
          model: items,
          as: 'items',
          where: {
            'items.id':id
          }
        }
      ]
    })
      .then(items => {
        if (!items) {
          return res.status(404).send({ message: "Item not found" });
        }
        return res.status(201).send(items);
      })
      .catch(error => res.status(400).send(error));
    //For debuging reasons
    //res.status(400).send({ message: "This is a bad reqest" })
  }

 // Delete an item from the DB using its ID

  //Update an items informtion using its id
};
