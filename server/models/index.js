var db = require('../db');

// models are the files where you interact w/ the db

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryString = 'SELECT m.message, m.roomname, m.userid, users.id \
      FROM messages m left outer join users ON m.userid = users.id';

      db.query(queryString, function(err, results) {
        if (err) {
          console.error('Error in retrieving messages: ', err);
        }
        callback(err, results);
      });
    }, 

    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages (userid, message, roomname) VALUES (?, ?, ?)';
      console.log('>>>>>params inside messages model of post: ', params);
      var queryArgs = [params.userid, params.message, params.roomname];
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
        callback(err, results);
      });
    },

    post: function (params, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      var queryArgs = [params.username];
      db.query(queryString, queryArgs, function(err, response) {
        if (err) {
          console.error('Error in posting user to database: ', err);
        }
        console.log('user successfully inserted into database!');
      });
    }
  }
};

