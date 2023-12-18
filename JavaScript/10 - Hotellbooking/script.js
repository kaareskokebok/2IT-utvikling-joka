
function sjekkInn(){
    let navn = inpNavn.value;
    // Finn første ledige rom
    let romIndex = forsteLedigeIndex();
    if (romIndex === -1){
        txtUt.textContent = "Ingen ledige rom. Prøv igjen senere.";
        
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
    return -1
}

// Hotellet har 5 rom
// I begynnelsen bor jens på rom 1 (index 0)
// arne bor på rom 4 (index 3)
// De andre rommene er ledige
let rommene = ["jens","","","arne",""];

let inpNavn = document.getElementById("inpNavn");
let inpRomnr = document.getElementById("inpRomnr");



