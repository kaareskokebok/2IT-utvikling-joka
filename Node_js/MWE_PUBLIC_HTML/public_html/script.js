// // Sende data gjennom node.js
// app.get('/test', (req, res) => {
//     res.send("Koko på do");
// });

function visTest(){
    fetch('/test')
    .then(response => response.text()) // Konverterer responsen til tekst
    .then(text => {
        // console.log(text) 
        // Skrive ut text i elementet txtUt
        txtUt.textContent = text;
    }
    );
}
btnVisElever.onclick = visTest;

// TODO: legg til en knapp til, når den trykkes, hentes
// fetch('/nytekst) og teksten i txtUt endres til 
// Min nye tekst er fin!
// 1. Legg til knappen 'Kul knapp'
// 2. Legg til korrekt app.get i server.js
// 3. Legg til funksjon i script.js som kjøres når 
// knappen trykkes.
// 4. Skriv fetch-koden i funksjonen i js.