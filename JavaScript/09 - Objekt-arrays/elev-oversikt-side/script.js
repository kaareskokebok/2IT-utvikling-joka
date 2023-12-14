function visElever(){
    klasseContainer.innerHTML = "";
    
    for (elev of elever){
        
        // 1. Lag elementene
        let figEl = document.createElement("figure");
        let bildeEl = document.createElement("img");
        let bildeTxt = document.createElement("figcaption");

        // 2. Endre elementene
        bildeEl.src = elev.bildeURL;

        let txt = `${elev.fornavn} ${elev.etternavn}<br>
        Alder: ${elev.alder}<br>
        Klasse: ${elev.klasse}`;

        bildeTxt.innerHTML = txt;

        // 3. Plasser elementene på riktig sted i HTML-dok
        figEl.appendChild(bildeEl);
        figEl.appendChild(bildeTxt);
        klasseContainer.appendChild(figEl);
        
    }
    
}