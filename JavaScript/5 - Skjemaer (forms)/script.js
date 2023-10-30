function bestill(event){
    event.preventDefault();
    let dest = document.querySelector("#billettForm select").value;
    alert(dest);
}

let skjema = document.getElementById("billettForm");
skjema.addEventListener("submit", bestill);