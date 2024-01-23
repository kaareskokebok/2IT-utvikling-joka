CREATE DATABASE chatapp;

USE chatapp;

CREATE TABLE users(
id INT AUTO_INCREMENT,
user_name VARCHAR(255),
email VARCHAR(255),
pw VARCHAR(255),
PRIMARY KEY(id)
);

CREATE TABLE thread(
id INT AUTO_INCREMENT,
title VARCHAR(255),
created_at DATETIME,
user_id INT,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE message(
id INT AUTO_INCREMENT,
content TEXT,
created_at DATETIME,
user_id INT,
thread_id INT,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY(thread_id) REFERENCES thread(id)
);

INSERT INTO users (email, user_name, pw) VALUES
('jens@jens.no', 'jens', 'jens123'),
('marcus@marcus.no', 'marcus', 'marcus123');


INSERT INTO users (email, user_name, pw) VALUES
('herman@herman.no', 'herman', 'herman123');