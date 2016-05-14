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
      models.messages.post({
        userid: req.body.userid,
        message: req.body.message,
        roomname: req.body.roomname
      }, function(err, result) {
        res.send(result);
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
      models.users.post({
        username: req.body.username
      }, function(err, result) {
        res.send(result);
      });
    }
  }
};

