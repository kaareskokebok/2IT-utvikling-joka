function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(`/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
    .then(response => response.json())
    .then(bruker => {
        if(bruker.length === 0) {
            alert("Feil brukernavn eller passord");
            return;
        }
        console.log(bruker);
        loginBtn.disabled=true;
        // Innlogging vellykket, legger til knapper
        btnContainer.innerHTML = "";
        const button1 = document.createElement('button');
        button1.textContent = 'Logg ut';
        btnContainer.appendChild(button1);
        button1.onclick = test;

        if (bruker[0].er_admin){
            const adminButton = document.createElement('button');
            adminButton.textContent = "admin-knapp";
            btnContainer.appendChild(adminButton);
            adminButton.onclick = showUsers;
        };
    })
    .catch(error => console.error('Feil:', error));
}

function test(){
    btnContainer.innerHTML = "";
    txtUt.innerHTML = "Du er nå logget ut.";
    // Skru på login knappen
    
    setTimeout(()=>{
        txtUt.innerHTML=""; 
        loginBtn.disabled=false;}, 
    3000);

}

function showUsers(){
    
    fetch('/allUsers')
    .then(response => response.json())
    .then(data => {
       console.log(data);
       txtUt.innerHTML = JSON.stringify(data) + '<br>';
    // TODO: Gjør utskriften pen 
    });
}