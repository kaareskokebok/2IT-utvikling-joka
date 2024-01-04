function visOversikt(){
    let txt = "<h3>Oversikt over gjester og rom</h3><hr>";
    for (let rom of rommene) {
        txt += `Rom ${rom.romNr}: ${rom.status}.`;
        if (rom.status === "opptatt"){
            let gjest = finnGjestRomnr(rom.romNr);
            txt += ` Gjest: ${gjest.fornavn} ${gjest.etternavn}`;
        }
        txt += "<br>";
    }
    txtUt.innerHTML = txt;
}

function finnGjestRomnr(nr){
    /* Returnerer gjesteobjektet på romnr nr. 
    Dersom ingen gjest ble funnet, returneres undefined
    */
    for (let gjest of gjestene){
        if (gjest.romNr === nr){
            return gjest;
        }
    }
    return undefined;
}
function sjekkInn(){
    let navn = inpNavn.value;
    // Finn første ledige rom
    let romnr = forsteLedigeRomnr();
    if (romnr === -1){
        txtUt.textContent = "Ingen ledige rom. Prøv igjen senere.";
        return;  // Avslutter funksjonen
    }
    let nyGjest = {fornavn: navn, etternavn:""}

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
function forsteLedigeRomnr(){
    // Returnerer første ledige index, hvis et rom er ledig.
    // Returnerer -1 ellers
    for (let rom of rommene){
        if (rom.status === "ledig"){
            return rom.romNr;
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



