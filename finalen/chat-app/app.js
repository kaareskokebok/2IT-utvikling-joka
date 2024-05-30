import express from "express";

const app = express();
const port = 3000;

// Henter stilfiler, js-filer, bilder osv. fra public
app.use(express.static("public"));
// Lar oss bruke req.body for å hente skjemadata
app.use(express.urlencoded({ extended: true }));
// View engine
// app.set("view engine", "ejs");

// Meldinger lagres i et array
let meldinger = ["Morn dere", "Har dere gjort leksene", "Nei, det var kjedelig."];
let navnene = ["Per", "Jens", "Sara"];

app.get("/", (req, res) => {
    // Vise fram index.ejs ved localhost:3000/
    res.render("index.ejs", {meldinger, navnene}); //{meldinger: meldinger}
});
// Skjema
app.post("/nymelding", (req, res) => {
    console.log(req.body);
    // 1. Legg til nyeste melding i slutten av arrayet meldinger
    let nyMelding = req.body.melding;
    let navn = req.body.navn;
    meldinger.push(nyMelding);
    navnene.push(navn);
    // 2. Kjør res.render med meldinger som data, og index.ejs som side.
    res.render("index.ejs", {meldinger, navnene});
});

app.get("/meldinger", (req, res) => {
    res.json({ meldinger, navnene });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
