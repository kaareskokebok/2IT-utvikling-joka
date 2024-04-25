import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send("<h1>Morn</h1>");
    // ejs-filer ligger som standard i views-mappa
    // TODO: bruk getDay for å finne ut om det er hverdag eller
    // helg, og endre dagtype og aktivitet deretter
    // Skriv koden her
    var dato = new Date();
    var dag = dato.getDay();
    var _dagtype = "ukedag";
    var _aktivitet = "Du må jobbe!";
    // Sjekk om helg
    dag = 6;
    if (dag === 0 || dag === 6){
        // Hvis lørdag eller søndag
        _dagtype = "helg";
        _aktivitet = "Du kan slappe av";
    }
    res.render("index.ejs", 
        {
            dagtype: _dagtype,
            aktivitet: _aktivitet
        }
    );
    // Plukkes opp i ejs ved <%= dagtype %>
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});