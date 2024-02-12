const express = require('express');
const mysql = require('mysql');

// Connection to database
const connection = mysql.createConnection({
    host:'localhost',
    user:'jensern',
    password:'Uctoi7p83',
    database:'datakomponenter'
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
});

// Lag en knapp som lar deg hente ut
// navnet til personen som har adresse
// 'Sky st 331'
app.get('/hentsky', (req, res) => {
    let sql = 'SELECT name FROM customers WHERE address="Sky st 331";';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
})

// med request
// fetch(`/sok-kunde?name
function getKatIdByKatName(kat){
    return new Promise((resolve, reject) => {
        let sql = 'SELECT id FROM kategorier WHERE kategori_navn = ?';
        connection.query(sql, [kat], (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // resolve(result[0].id);
                console.log(result);
                console.log(result[0].id);
                resolve(result[0].id);
            }
        });
    });
}

app.get('/produkt-kat', (req, res) => {
    let kat = req.query.name;
    getKatIdByKatName(kat).then(kat_id => {
        let sql = 'SELECT navn,pris,beskrivelse FROM produkter WHERE kategori_id = ?';
        connection.query(sql, [kat_id], (error, results) => {
            if (error) throw error;
            else{
                res.send(results);
            }
        });
    }).catch(error => {
        console.error('Database query error:', error);
        res.status(500).send('An error occurred');
    });
});



const PORT = 80;


app.listen(PORT, function (){
    console.log('Server kjører på port 80');
})