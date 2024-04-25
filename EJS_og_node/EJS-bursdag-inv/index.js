import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // navn, navnGjest, alder, tid, sted
    res.render("index.ejs", 
        {
            navn: "Sara",
            navnGjest: "Per",
            alder: 25,
            tid: "kl. 1300 på lørdag",
            sted: "Jessheimbadet"
        }
    );

});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});