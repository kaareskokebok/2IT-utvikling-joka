import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
// Husk å endre type til module i package.json

const app = express();
const port = 3000;

// dotenv config og uthenting av data
dotenv.config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
// Koble til MySQL-databasen
const db = mysql.createConnection({
    host: 'localhost',
    user: dbUser,
    password: dbPass,  // Erstatt med ditt passord
    database: 'skole'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Sett opp EJS som view engine
app.set('view engine', 'ejs');

// Route for å hente og vise elever
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM elever';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result[0].fornavn);  // Jens
        res.render('index', {
            elever: result
        });
    });
});

// Start serveren
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});