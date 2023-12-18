function visOversikt(){
    let txt = "<h3>Oversikt over gjester og rom</h3><hr>";
    for (let i=0; i<rommene.length; i++){
        let nr = i + 1;
        let gjest = rommene[i];
        txt += `Rom ${nr}: ${gjest} <br>`;
    }
    txtUt.innerHTML = txt;
}
function sjekkInn(){
    let navn = inpNavn.value;
    // Finn første ledige rom
    let romIndex = forsteLedigeIndex();
    if (romIndex === -1){
        txtUt.textContent = "Ingen ledige rom. Prøv igjen senere.";
        return;  // Avslutter funksjonen
    }
    
    // Plasser gjesten på korrekt index
    rommene[romIndex] = navn;
    // Lag tilbakemelding
    let romNr = romIndex + 1;
    txtUt.textContent = `Gjesten ${navn} fikk rom nr. ${romNr}`;
}

function sjekkUt(){
    let navn = inpNavn.value;
    let romNr = inpRomnr.value;

    let romIndex = romNr - 1;
    if (navn === rommene[romIndex]){
        // Navn og romnr stemmer overens
        rommene[romIndex] = "";
        txtUt.textContent = `${navn} ble sjekket ut av rom ${romNr}`;
    } else{
        txtUt.textContent = "Romnr og navn stemmer ikke. Prøv igjen.";
    }
}
function forsteLedigeIndex(){
    // Returnerer første ledige index, hvis et rom er ledig.
    // Returnerer -1 ellers
    for (let i=0; i<rommene.length; i++){
        if (rommene[i] === ""){
            return i;
        }
    }
    // Ledig rom ikke funnet, returnerer -1
    return -1;
}

// Hotellet har 5 rom
// I begynnelsen bor jens på rom 1 (index 0)
// arne bor på rom 4 (index 3)
// De andre rommene er ledige
// rommene og gjestene er objektarray fra hotelldatabase.js


let inpNavn = document.getElementById("inpNavn");
let inpRomnr = document.getElementById("inpRomnr");
let txtUt = document.getElementById("txtUt");



