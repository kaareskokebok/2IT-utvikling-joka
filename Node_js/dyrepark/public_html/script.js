function visArterNavn(){
    // alert("KOKO");
    fetch('/alleartsnavn')
    .then(respons => respons.json())
    .then(artsnavnArray => {
        // console.log(artsnavn);
        let liste = document.createElement('ul');
        for(let artsnavn of artsnavnArray){
            console.log(artsnavn.navn);
            // Lag et listeelement
            let li = document.createElement('li');
            li.textContent = artsnavn.navn;
            // Legg elementet til i lista
            liste.appendChild(li);
        }
    artTxtUt.appendChild(liste);
    }) 
}

function visDyrOgBeskrivelse(){
    fetch('/dyrmedbeskrivelse')
    .then(respons => respons.json())
    .then(dyr => {
        console.log(dyr);

        let htmldyr = "<h2>Våre dyr</h2> <hr />";
        for (let nesteDyr of dyr){
            htmldyr += `<h3>${nesteDyr.navn}</h3>`;
            htmldyr += `<p>${nesteDyr.beskrivelse}</p>`;
        }
        dyrTxtUt.innerHTML = htmldyr;
    }) 
}
let btnVisDyr = document.getElementById("btnVisDyr");
btnVisDyr.onclick = visDyrOgBeskrivelse;

let btnVisArterNavn = document.getElementById("btnVisArterNavn");
btnVisArterNavn.onclick = visArterNavn;
// btnVisArterNavn.addEventListener("click", visArterNavn);
let artTxtUt = document.getElementById("artTxtUt");