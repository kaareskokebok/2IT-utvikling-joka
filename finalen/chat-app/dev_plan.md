# Chat App Developemtn Guide

This guide will help you enhance your chat app by adding user authentication, message timestamping, and persistent storage using MySQL.

## Step 1: Set Up the MySQL Database

1. **Install MySQL**: Make sure MySQL is installed on your machine. If not, install it.
2. **Create a Database**:
    ```sql
    CREATE DATABASE chat_app;
    ```
3. **Create Tables**:
    ```sql
    USE chat_app;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        message TEXT,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
    ```

## Step 2: Install Necessary Packages

In your project directory, run the following commands to install necessary packages:
```bash
npm install mysql2
npm install express-session
```

## Step 3: Configure Database Connection

Create a file named `db.js` for database connection:
```js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

export default pool;
```

Add environment variables in a `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=chat_app
```

## Step 4: Set Up User Registration and Login

Modify `app.js` to handle user registration and login:
```js
import express from 'express';
import session from 'express-session';
import pool from './db.js';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'yourSecret',
  resave: false,
  saveUninitialized: true
}));

app.set("view engine", "ejs");

let meldinger = ["Morn dere", "Har dere gjort leksene", "Nei, det var kjedelig."];
let navnene = ["Per", "Jens", "Sara"];

app.get("/", (req, res) => {
  if (req.session.user) {
    res.render("index.ejs", {meldinger, navnene});
  } else {
    res.redirect('/login');
  }
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [result] = await pool.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);
    res.redirect('/login');
  } catch (error) {
    res.send('Error creating user');
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);

  if (rows.length > 0) {
    const user = rows[0];

    if (password === user.password) {
      req.session.user = user;
      res.redirect('/');
    } else {
      res.send('Incorrect password');
    }
  } else {
    res.send('User not found');
  }
});

app.post("/nymelding", async (req, res) => {
  if (req.session.user) {
    let nyMelding = req.body.melding;
    let navn = req.session.user.username;

    await pool.query("INSERT INTO messages (user_id, message) VALUES (?, ?)", [req.session.user.id, nyMelding]);
    
    const [rows] = await pool.query("SELECT messages.message, messages.timestamp, users.username FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.timestamp DESC");
    
    meldinger = rows.map(row => `${row.username}: ${row.message} (${row.timestamp})`);
    navnene = rows.map(row => row.username);
    
    res.render("index.ejs", {meldinger, navnene});
  } else {
    res.redirect('/login');
  }
});

app.get("/meldinger", (req, res) => {
  res.json({ meldinger, navnene });
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error logging out');
    }
    res.redirect('/login');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
```

## Step 5: Create EJS Views for Registration and Login

Create `register.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
  </head>
  <body>
    <h1>Register</h1>
    <form action="/register" method="post">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username" required><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" required><br>
      <button type="submit">Register</button>
    </form>
  </body>
</html>
```

Create `login.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
  </head>
  <body>
    <h1>Login</h1>
    <form action="/login" method="post">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username" required><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" required><br>
      <button type="submit">Login</button>
    </form>
  </body>
</html>
```

## Step 6: Modify Index View to Display Messages with Timestamp

Update `index.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat App</title>
  </head>
  <body>
    <h1>2IT Kose-Chat</h1>
    <a href="/logout">Logout</a>
    <form action="/nymelding" method="post" id="meldingForm">
      <label for="inpMelding">Skriv ny melding:</label><br />
      <input type="text" id="inpMelding" name="melding" />
    </form>

    <% if(locals.meldinger) { %>
    <div class="meldingerContainer">
      <% for(let i=meldinger.length-1; i >= 0; i--) { %>
        <p><%= meldinger[i] %></p>
      <% } %>
    </div>
    <% } %>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var input = document.getElementById("inpMelding");
        input.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector(".meldingerContainer").innerHTML = "";
            document.getElementById("meldingForm").submit();
          }
        });
      });
    </script>
  </body>
</html>
```

## Step 7: Store and Retrieve Messages from Database

Update `app.js` to store messages in the database:
```js
app.post("/nymelding", async (req, res) => {
  if (req.session.user) {
    let nyMelding = req.body.melding;
    let navn = req.session.user.username;

    await pool.query("INSERT INTO messages (user_id, message) VALUES (?, ?)", [req.session.user.id, nyMelding]);
    
    const [rows] = await pool.query("SELECT messages.message, messages.timestamp, users.username FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.timestamp DESC");
    
    meldinger = rows.map(row => `${row.username}: ${row.message} (${row.timestamp})`);
    navnene = rows.map(row => row.username);
    
    res.render("index.ejs", {meldinger, navnene});
  } else {
    res.redirect('/login');
  }
});
```

## Step 8: Display Timestamps

Modify `index.ejs` to display timestamps:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta

 name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat App</title>
  </head>
  <body>
    <h1>2IT Kose-Chat</h1>
    <a href="/logout">Logout</a>
    <form action="/nymelding" method="post" id="meldingForm">
      <label for="inpMelding">Skriv ny melding:</label><br />
      <input type="text" id="inpMelding" name="melding" />
    </form>

    <% if(locals.meldinger) { %>
    <div class="meldingerContainer">
      <% for(let i=meldinger.length-1; i >= 0; i--) { %>
        <p><%= meldinger[i] %></p>
      <% } %>
    </div>
    <% } %>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var input = document.getElementById("inpMelding");
        input.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector(".meldingerContainer").innerHTML = "";
            document.getElementById("meldingForm").submit();
          }
        });
      });
    </script>
  </body>
</html>
```

## Step 9: Add Logout Functionality

Update `app.js` to handle logout:
```js
app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error logging out');
    }
    res.redirect('/login');
  });
});
```

Add a logout link to `index.ejs`:
```html
<a href="/logout">Logout</a>
```

## Step 10: Clean Up and Test

Ensure all new routes and functionalities are working correctly. Test the registration, login, messaging, and logout functionalities thoroughly.

By following these steps, you'll have a chat app with user authentication, persistent messaging with timestamps, and basic security measures in place.