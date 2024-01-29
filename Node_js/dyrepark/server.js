const express = require('express');
const mysql = require('mysql');

// Set up connection to database.
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'teacher1',
  password : 'Uctoi7p83',
  database : 'dyrepark'
});

const app = express();
// Bruk index.html i public_html mappa
app.use(express.static('public_html'));
const PORT = 80;

// Test node-server med localhost:80/test
app.get('/test', (req, res) => {
    res.send("Koko på do");
});

// Query til databasen
app.get('/alledyrnavn', (req, res) => {
    let sql = 'SELECT navn FROM dyr;';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
})

// Query til databasen
app.get('/alleartsnavn', (req, res) => {
    let sql = 'SELECT navn FROM art;';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
});

// Henter ut alle dyr med beskrivelsen
app.get('/dyrmedbeskrivelse', (req, res) => {
    let sql = 'SELECT navn, beskrivelse FROM dyr;';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
})

app.listen(PORT, function (){
    console.log('Server kjører på port 80');
});