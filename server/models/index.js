var db = require('../db');

// models are the files where you interact w/ the db

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, results) {
        if (err) {
          console.error('Error in retrieving messages: ', err);
        }
        callback(results);
      });
    }, 

    // a function which can be used to insert a message into the database
    post: function () {
      var queryString = 'INSERT INTO messages (userid, msg, roomname) VALUES (?, ?, ?)';
      var queryArgs = [1, 'Hello', 'main'];
      db.query(queryString, queryArgs, function(err, response) {
        if (err) {
          console.error('Error in posting message to database: ', err);
        }
        console.log('message successfully inserted into database!');
      });
    } 
  },

  users: {
    
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        if (err) {
          console.error('Error in retrieving users: ', err);
        }
        console.log('all users: ', results);
        callback(results);
      });
    },

    post: function () {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      var queryArgs = 'tegan';
      db.query(queryString, queryArgs, function(err, response) {
        if (err) {
          console.error('Error in posting user to database: ', err);
        }
        console.log('user successfully inserted into database!');
      });
    }
  }
};

