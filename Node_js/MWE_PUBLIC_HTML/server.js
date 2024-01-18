const express = require('express');
const mysql = require('mysql');

// Connection to database
const connection = mysql.createConnection({
    host:'localhost',
    user:'jensern',
    password:'Uctoi7p83',
    database:'mydb'
});

const app = express();

// Bruk index.html i public_html mappa
app.use(express.static('public_html'));

// Lage rute for å hente kundenavn fra databasen
app.get('/allekundenavn', (req, res) => {
    connection.query('SELECT * FROM customers;', (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
})
// Hente første kunde med navn og adresse
app.get('/forstekunde', (req, res) => {
    connection.query('SELECT name, address FROM customers LIMIT 1;', (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
})


// Sende data gjennom node
// Arrow-function
app.get('/test', (req, res) => {
    res.send("Koko på do");
});
// vanlig function
// app.get('/test', function (req, res) {
//     res.send("Koko på do");
// });
const PORT = 80;


app.listen(PORT, function (){
    console.log('Server kjører på port 80');
})