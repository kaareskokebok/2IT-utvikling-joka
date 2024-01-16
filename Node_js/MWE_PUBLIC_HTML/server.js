const express = require('express');
const app = express();

// Bruk index.html i public_html mappa
app.use(express.static('public_html'));

// Sende data gjennom node
app.get('/test', (req, res) => {
    res.send("Koko på do");
});

const PORT = 80;


app.listen(PORT, function (){
    console.log('Server kjører på port 80');
})