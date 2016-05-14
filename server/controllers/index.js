var models = require('../models');

/*
Controllers handle web requests and interact w/ models to process 
and retrieve data.
- controller should NEVER directly access the database
*/

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(msgs) {
        res.json(msgs);
      });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {} 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(allUsers) {
        res.json(allUsers);
      });
    },
    post: function (req, res) {}
  }
};

