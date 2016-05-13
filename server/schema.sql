DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  userid INTEGER NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  msg VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

