SELECT * FROM students;
SELECT name FROM students;

-- @block
CREATE TABLE USERS(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);
-- @block
ALTER TABLE USERS
MODIFY id INT NOT NULL AUTO_INCREMENT FIRST;

-- @block
INSERT INTO Users (email, bio, country) VALUES 
('user1@example.com', 'Bio of user 1', 'US'),
('user2@example.com', 'Bio of user 2', 'GB'),
('user3@example.com', 'Bio of user 3', 'CA'),
('user4@example.com', 'Bio of user 4', 'AU'),
('user5@example.com', 'Bio of user 5', 'DE'),
('user6@example.com', 'Bio of user 6', 'FR');

-- @block
SELECT * FROM users;

-- @block
SELECT id, email FROM users;

-- @block
SELECT email, id FROM users LIMIT 2;

-- @block
SELECT email, country FROM users 
ORDER BY country ASC
LIMIT 4;

-- @block
SELECT email, country, id FROM users 
ORDER BY id DESC
LIMIT 3;

-- @block
SELECT * FROM users
WHERE country = 'US'
ORDER BY id DESC;

-- @block
SELECT * FROM users
WHERE country = 'US'
AND id < 8;

-- @block
SELECT * FROM users
WHERE country = 'US'
OR id >= 4;

-- @block
SELECT * FROM users
WHERE country = 'US'
OR country LIKE 'A%';

-- @block
SELECT * FROM users
WHERE country = 'US'
OR country LIKE 'A%'
OR country LIKE '%A';

-- @block
INSERT INTO Users (email, bio, country) VALUES 
('user7@example.com', 'Bio of user 7', 'US'),
('user8@example.com', 'Bio of user 8', 'US');

-- index for raskere søk i databasen
-- @block
CREATE INDEX email_index ON Users(email);

-- @block
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);

-- @block
INSERT INTO Rooms (owner_id, street)
VALUES
    (1, 'san diego sailboat'),
    (1, 'nantucket cottage'),
    (1, 'vail cabin'),
    (1, 'sf cardboard box');

-- @block
SELECT * FROM users
INNER JOIN rooms
On Rooms.owner_id = Users.id;

-- @block
SELECT * FROM users
RIGHT JOIN rooms
On Rooms.owner_id = Users.id;

-- @block
CREATE TABLE Bookings(
    id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (guest_id) REFERENCES Users(id),
    FOREIGN KEY (room_id) REFERENCES Rooms(id)
);