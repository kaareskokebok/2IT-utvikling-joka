CREATE DATABASE bilutleie;
USE bilutleie;

CREATE TABLE bil(
id INT AUTO_INCREMENT,
regnr CHAR(7),
merke VARCHAR(30),
distanse_kjort FLOAT,
PRIMARY KEY(id)
);

CREATE TABLE utleie(
id INT AUTO_INCREMENT,
bil_id INT,
totalpris DOUBLE,
utleie_start DATETIME,
utleie_slutt DATETIME,
PRIMARY KEY(id),
FOREIGN KEY(bil_id) REFERENCES bil(id)
);