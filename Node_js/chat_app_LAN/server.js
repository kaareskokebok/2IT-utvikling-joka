const express = require('express');
const mysql = require('mysql');

// Set up connection to database.
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'teacher1',
  password : 'Uctoi7p83',
  database : 'chatapp'
});

// Connect to database.
connection.connect();

const app = express();

// Bruk index.html i public_html mappa
app.use(express.static('public_html'));

// med request
// fetch(`/login?username
app.get('/login', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    let sql = 'SELECT * FROM users WHERE user_name = ? AND pw = ?;';
    connection.query(sql, [username, password], (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
})

const PORT = 80;


app.listen(PORT, function (){
    console.log('Server kjører på port 80');
})