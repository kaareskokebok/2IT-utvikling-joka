function loggInn(event){
    event.preventDefault();
    let bruker = inpUser.value;
    let pass = inpPass.value;
    let str = `/login?username=${encodeURIComponent(bruker)}&password=${encodeURIComponent(pass)}`; 

    fetch(str)
    .then(response => response.json())
    .then(bruker => {
        console.log(bruker);
        // Sjekke om pw og user er riktig!
        if (bruker.length === 0){
            alert('Feil brukernavn eller passord. Prøv igjen!');
            return;  // Avslutt loggInn
        }
        // Lag en knapp i btnContainer for å se egen info
        // let  btnInfo = document.createElement("button");
        // btnInfo.innerHTML = "Vis min info";
        // btnInfo.onclick = visInfo;
        txtUt.innerHTML = "<h2>Min info</h2>";
        txtUt.innerHTML += `<p>${bruker[0].fornavn} ${bruker[0].etternavn}</p>`;
        txtUt.innerHTML += `<p>${bruker[0].epost}</p>`;
        txtUt.innerHTML += `<p>${bruker[0].bruker_info}</p>`;

        // TODO: fiks knapper
        fiksLoggInnUtKnapper();
        // Admin-knapp
        if  (bruker[0].er_admin) { // 0 regnes som false, og ikke 0 som true
            settOppAdminKnapp();
        }
    });
    
}

function settOppAdminKnapp(){
    const adminBtn = document.createElement('button');
    adminBtn.textContent = 'admin vis alle';
    btnContainer.appendChild(adminBtn);
    adminBtn.onclick = showUsers;
}

function showUsers(){
    fetch('/allUsers') 
    .then(res => res.json())  
    .then(brukere =>{
        console.log(brukere);
        let liste = document.createElement('ul');
        for(let bruker of brukere){
            let listeItem = document.createElement('li');
            listeItem.textContent = `${bruker.fornavn} ${bruker.etternavn}. ${bruker.bruker_info}`;
            liste.appendChild(listeItem);
        }
        txtUt.innerHTML = "<h2>Alle brukere</h2>";
        txtUt.appendChild(liste);
    } );
}
function fiksLoggInnUtKnapper(){
    // Skru av logginn-knappen
    btnLoggInn.disabled = true;
    btnLoggInn.style.opacity= '0.5';

    // Legg til loggUt-knapp
    let btnLoggUt = document.createElement('button');
    btnLoggUt.textContent = "Logg ut";
    btnContainer.appendChild(btnLoggUt);
    btnLoggUt.addEventListener('click', function(){
        txtUt.textContent = "Du er nå logget ut.";
        btnContainer.innerHTML = "";
        // Etter 3 sek. tøm txtUt og 
        // sett loggInn-knapp til enabled
        setTimeout(function() {
            txtUt.innerHTML = ""; 
            
            btnLoggInn.disabled = false;
            btnLoggInn.style.opacity= '1';
        }
        , 3000);
        }
    );
}