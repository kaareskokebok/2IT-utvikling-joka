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

function visNavnSky(){
    fetch('/hentsky')
    .then(response => response.json())
    .then(kunde => {
        console.log(kunde);
        // TODO: skriv ut 'xxx bor på Sky st 331'.
    })
}

function sokNavn(){
    // Lese inn søkenavn fra input-boksen
    let navn = inpNavn.value;
    console.log(navn);
    // Sende inn inn navnet som en del av fetch
    fetch(`/sok-kunde?name=${encodeURIComponent(navn)}`)
    .then(response => response.json())
    .then(kunde => {
        console.log(kunde);
    })
}

let txtUt = document.getElementById("txtUt");
let inpNavn = document.getElementById("inpNavn");

btnVisElever.onclick = visAlleKunder;
btnVisForste.onclick = visForsteKunde;
btnVisNavnSky.onclick = visNavnSky;
btnSokNavn.onclick = sokNavn;

