const express = require('express');
const mysql = require('mysql');

// Set up connection to database.
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jensern',
  password : 'Uctoi7p83',
  database : 'bruker_db'
});


const app = express();
// Bruk index.html i public_html mappa
app.use(express.static('public_html'));
const PORT = 80;

// Test node-server med localhost:80/test
app.get('/test', (req, res) => {
    res.send("Koko på do");
});

// Enkel database-test med localhost/testdb
app.get('/testdb', (req, res) => {
    let sql = "SELECT fornavn FROM users;" ;
    connection.query(sql, [], (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
});

// Denne kobles til f.eks. fetch(`/login?username=jens&password=jens123`)
app.get('/login', (req, res) => {
    let  username = req.query.username;
    let  password = req.query.password;
    let sql = "SELECT * FROM users WHERE brukernavn=? AND passord=?" ;
    let login_info = [username, password];
    // Sender SQL-spørringen til databasen
    connection.query(sql, login_info, (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
});

app.get('/allUsers', (req, res) => {
    let sql = `SELECT * FROM users`;
    connection.query(sql , (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
      });
});

app.listen(PORT, function (){
    console.log('Server kjører på port ' + PORT);
});