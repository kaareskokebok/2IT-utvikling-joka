function loggInn(e) {
    // Forhindrer at skjemaet sendes på standardmåten
    e.preventDefault();

    let username = document.querySelector('input[name="username"]').value;
    let password = document.querySelector('input[name="password"]').value;

    // Logging til konsollen for demonstrasjon
    console.log('Brukernavn:', username, 'Passord:', password);
    
    fetch(`/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
    .then(response => response.json())
    .then(user => {
        console.log(user);
        if(user.length > 0){
            alert("Helt sinnsykt, du er logget på!");
            let id = user[0].id;
            visTraader(id);
        }else{
            alert("FEIL! prøv igjen.")
        }
    })
}

function visTraader(id){
    // Funksjonen skal vise frem tråder basert på tråder brukeren med
    // id er med i. De nyeste vises først
    let main = document.querySelector('main')
    main.opacity = 0;
    fetch('threads.html')
        .then(response => response.text())
        .then(html => {
            setTimeout(main.opacity = 1, 1000);
            main.innerHTML = html;
            setEventForThreads();
        })
        .catch(error => {
            console.error('Error loading threads:', error);
        });
}

function setEventForThreads(){
    // Velger alle elementer med klassen 'thread'
    var threads = document.querySelectorAll('.thread');

    threads.forEach(function(thread) {
        thread.addEventListener('click', function() {
                // Sjekker om det allerede finnes en textarea i denne tråden
            if (thread.querySelector('.nyMelding')) {
                return; // Avslutter funksjonen hvis en textarea allerede finnes
            }
                    // Velger alle elementer med klassen 'nyMelding'
        var elements = document.querySelectorAll('.nyMelding');

        // Itererer over hvert element og fjerner det fra dets forelder
        elements.forEach(function(element) {
            element.parentNode.removeChild(element);
        });
            // Setter opacity til 1 for det klikkede elementet
            this.style.opacity = '1';
    
            // Lager et nytt element der brukeren kan skrive
            let msg = document.createElement('textarea');
            msg.className = 'nyMelding'; // Rettet her
            msg.placeholder = 'Ny melding her';
            thread.appendChild(msg);
            
            // Fokus på det nye elementet
            // msg.setAttribute('tabindex', '-1');
            msg.focus();

            // Legg til lytter til msg for å lytte etter ENTER og BACKSPACE eller
            // delete
            msg.addEventListener('keydown', tastLytterMelding);
            
        });
    });

}

function tastLytterMelding(event){
    if (event.key === 'Enter') {
        event.preventDefault(); // Forhindrer standard Enter-tast oppførsel i textarea
        let nyMelding = event.target;
        let txt = nyMelding.value; // Bruk .value for å hente tekst fra textarea
        let thread = nyMelding.parentNode;

        if (txt !== '') {
            console.log('Enter-tasten ble trykket');
            let msg = document.createElement('div');
            msg.className = 'melding';
            msg.textContent = txt;
            thread.appendChild(msg);
            nyMelding.value = ''; // Tømmer textarea etter å ha lagt til meldingen
            thread.removeChild(nyMelding);
            let nyMsg = document.createElement('textarea');
            nyMsg.className = 'nyMelding'; // Rettet her
            nyMsg.placeholder = 'Ny melding her';
            thread.appendChild(nyMsg);
            
            // Fokus på det nye elementet
            // msg.setAttribute('tabindex', '-1');
            nyMsg.focus();
        

            // Legg til lytter til msg for å lytte etter ENTER og BACKSPACE eller
            // delete
            nyMsg.addEventListener('keydown', tastLytterMelding);
        }
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        let txt = event.target.value; // Bruk .value her også
        let thread = event.target.parentNode;
        let nyMelding = event.target;

        if (txt === ""){
            thread.removeChild(nyMelding);
        }
    }
}



let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', loggInn);


