import express from "express";

const app = express();
const port = 3000;

// Henter stilfiler, js-filer, bilder osv. fra public
app.use(express.static("public"));
// Lar oss bruke req.body for å hente skjemadata
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // Vise fram index.ejs ved localhost:3000/
    res.render("index");
});
// Skjema
app.post("/submit", (req, res) => {
    console.log(req.body);
    let data = {
        melding: req.body.melding
    };
    res.render("index", data);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
