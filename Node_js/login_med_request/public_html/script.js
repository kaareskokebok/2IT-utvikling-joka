function loggInn(event){
    event.preventDefault();
    let bruker = inpUser.value;
    let pass = inpPass.value;
    let str = `/login?username=${encodeURIComponent(bruker)}&password=${encodeURIComponent(pass)}`; 

    fetch(str)
    .then(response => response.json())
    .then(bruker => {
        console.log(bruker);
    });
    
}