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
      models.messages.get(function(err, msgs) {
        res.json(msgs);
      });
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('req.body in post of messages controller: ', req.body);
      var params = [req.body.userid, req.body.message, req.body.roomname];
      models.messages.post(params, function(err, result) {
        if (err) { console.error('error in posting msg to db in controller'); }
        res.sendStatus(201);
      });
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, allUsers) {
        res.json(allUsers);
      });
    },
    post: function (req, res) {
      console.log('req.body in post of users controller: ', req.body);
      var params = [req.body.username];
      models.users.post(params, function(err, result) {
        if (err) { console.error('error in posting user to db in controller'); }
        res.sendStatus(201);
      });
    }
  }
};

