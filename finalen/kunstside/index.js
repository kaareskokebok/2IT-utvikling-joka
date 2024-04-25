import express from "express";

const app = express();
const port = 3000;

// For at stilfiler og liknende skal oppdages
app.use(express.static("public"));  
// For å hente skjemadata ved req.query.name, req.query.email osv.
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/test", (req, res) => {
    console.log(req.query);
    res.send("Du sa " + req.query.melding);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});