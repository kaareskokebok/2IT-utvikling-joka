const express = require("express");
const app = express();
// req = request, res = response
app.get("/", (req, res) => {
    res.send("<h1>Min først node.js server, velkommen!</h1>");
});

const port = 3000;
const hostname = "10.245.35.68";
app.listen(port, hostname, () => {
    console.log("Server startet på port 3000")
});

// 1. Skriv 'node server.js' i terminalen.
// 2. Åpne localhost:3000 i nettleseren