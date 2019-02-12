const Items = require('../models').Items;

module.exports = {
  create(req, res) {
    return Items.create({
      title: req.body.title
    })
      .then(items => res.status(201).send(items))
      .catch(error => res.status(400).send(error));
  },
};
