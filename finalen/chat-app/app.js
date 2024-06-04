import express from "express";
import session from 'express-session';
import pool from './db.js';


const app = express();
const port = 3000;

// Henter stilfiler, js-filer, bilder osv. fra public
app.use(express.static("public"));
// Lar oss bruke req.body for å hente skjemadata
app.use(express.urlencoded({ extended: true }));
// View engine
// app.set("view engine", "ejs");

// Session
app.use(session({
    secret: 'yourSecret',
    resave: false,
    saveUninitialized: true
}));

// Meldinger lagres i et array
let meldinger = ["Morn dere", "Har dere gjort leksene", "Nei, det var kjedelig."];
let navnene = ["Per", "Jens", "Sara"];

app.get("/", (req, res) => {
    // Vise fram index.ejs ved localhost:3000/
    if(req.session.user) {
        res.render("index.ejs", {meldinger, navnene}); //{meldinger: meldinger}
    }else{
        res.redirect("/login");
    }
    
});

app.post("/register", async ( req, res) => {
    const {username, email, password } = req.body;
    try {
        // [results] extracts the first element from query, which is the result
        // the second element is metadata
        const [result] = await pool.query("INSERT INTO users(username, email, passwd) VALUES (?,?,?)", [username, email, password]);
        res.redirect("/login");
    } catch (error) {
        res.send("Error creating user");
    }
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})

app.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);

    if (rows.length > 0) {
        const user = rows[0];  // The user object

        if(password === user.passwd) {
            req.session.user = user;
            res.redirect("/");
        } else{
            res.send('User not found');
        }
    }
    
})
// Skjema
app.post("/nymelding", async (req, res) => {
    if( req.session.user) {
    // 1. Legg til nyeste melding i slutten av arrayet meldinger
    let nyMelding = req.body.melding;
    let navn = req.session.user.username;

    await pool.query("INSERT INTO messages (user_id, message) VALUES (?,?)", [req.session.user.id, nyMelding]);
    const [rows] = rows.map (row => `${row.username}: ${row.message} (${row.timestamp})`);
    let [alleMeldinger] = await pool.query(`
    SELECT users.username, messages.message, messages.timestamp
    FROM messages
    JOIN users ON messages.user_id = users.id
    ORDER BY messages.timestamp DESC
`);
    
    // 2. Kjør res.render med meldinger som data, og index.ejs som side.
    res.render("index.ejs", {alleMeldinger});
    } else {
        res.redirect("/login");
    }
});

app.get("/meldinger", (req, res) => {
    res.json({ meldinger, navnene });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
