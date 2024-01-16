const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Min først node.js server, velkommen!</h1>");
});

const port = 3000;
app.listen(port, () => {
    console.log("Server startet på port 3000")
});



