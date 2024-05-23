import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
// Husk å endre type til module i package.json

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// dotenv config og uthenting av data
dotenv.config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
// Koble til MySQL-databasen
const db = mysql.createConnection({
    host: 'localhost',
    user: dbUser,
    password: dbPass, 
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

// Route for startside
app.get('/', (req, res) => {  
    res.render('index');
});
// Elev-side
app.get("/elevlogin", (req, res) => {
    res.render('elev');
})
// Elev logger seg inn
app.post("/elevloginsubmit", (req, res) => {
    // 1. Lese inn brukernavn og passord
    console.log(req.body);
    let username = req.body.brukernavn;
    let userpass = req.body.passord;
    // 2. Sjekke mot databasen
    const query = 'SELECT * FROM elever WHERE brukernavn = ? AND passord = ?';
    db.query(query, [username, userpass], (err, results) => {
    // 3. Gi feilmelding, eller vise all elevinfo
    if (err) throw err;
    if (results.length > 0) {
        const studentId = results[0].id;

            // Fetch courses and grades for this student
            const coursesQuery = `
                SELECT k.kursid, k.kursnavn, ek.karakter 
                FROM elever_kurs ek
                JOIN kurs k ON ek.kursid = k.kursid
                WHERE ek.elev_id = ?
            `;
            db.query(coursesQuery, [studentId], (err, courseResults) => {
                if (err) throw err;
                console.log(courseResults, courseResults[0]);
                // 3. Show all student info and courses with grades
                res.render('elev', 
                    {elevdata: results[0],
                        courses: courseResults
                    });
                        
                    
                });
            }
            else {
                res.send('<h3>Invalid username or password</h3>');
              }
        });

    });


app.get('/showStudents', (req, res) => {
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