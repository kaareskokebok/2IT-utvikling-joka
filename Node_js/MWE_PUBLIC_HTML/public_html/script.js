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

function visAlleKunder(){
    fetch('/allekundenavn')
    .then(response => response.json()) // Konverterer responsen til json
    .then(kunder => {
        console.log(kunder);
        let txt = "";
        for(let kunde of kunder){
            txt += kunde.name + "<br>";
        }
        txtUt.innerHTML = txt;
    });
}

function visForsteKunde(){
    fetch('/forstekunde')
    .then(response => response.json())
    .then(kunde => {
        console.log(kunde);  // array med 1 verdi
        console.log(kunde[0]);  // objekt med to nøkler (name, address)
        console.log(kunde[0].name);  // String (tekst)

        let minKunde = kunde[0];
        txtUt.textContent = `Navn: ${minKunde.name}, adresse: ${minKunde.address}`;
    })
}

let txtUt = document.getElementById("txtUt");
btnVisElever.onclick = visAlleKunder;
btnVisForste.onclick = visForsteKunde;

// TODO: Skrive ut den første kunden med navn
// og adresse. 
// 1. Ny knapp på index.html
// 2. app.get på server.js
// 3. Funksjon knyttet til knappen i script.js:
// Denne bruker fetch for å hente ruten fra app.get
// 4. Pakke ut dataene og presentere de i txtUt på
// formen 'Arne Pettersen, Rådyrvegen 25'.
