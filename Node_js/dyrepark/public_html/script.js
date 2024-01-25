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

let btnVisArterNavn = document.getElementById("btnVisArterNavn");
btnVisArterNavn.onclick = visArterNavn;
// btnVisArterNavn.addEventListener("click", visArterNavn);
let artTxtUt = document.getElementById("artTxtUt");