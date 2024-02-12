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

// Test node-server med localhost/test
app.get('/test', (req, res) => {
    let sql = 'SELECT fornavn FROM users LIMIT 2;'
    connection.query(sql, [], (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    });
});

// f.eks. localhost/bruker?username=Ola
app.get('/bruker', (req, res) =>{
    let username  = req.query.username;
    let sql = 'SELECT * FROM users WHERE brukernavn = ?;'
    connection.query(sql, [username], (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    });
});

// f.eks. localhost/login?username=Ola&password=p123
app.get('/login', (req, res) =>{
    let username  = req.query.username;
    let sql = 'SELECT * FROM users WHERE brukernavn = ?;'
    connection.query(sql, [username], (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    });
});


const PORT = 80;
app.listen(PORT, function (){
    console.log('Server kjører på port ' + PORT);
});