function flyttKula(){
    if (!erILufta){
        // Stopp animasjon når kula er utenfor skjermen
        skytBtn.disabled = false;
        return;
    }
    xpos += xfart;

    kule.style.left = xpos + "px";

    if (xpos > window.innerWidth + 50){
        // Flytt kula bak kanonen
        xpos = 250; 
        kule.style.left = xpos + "px";
        erILufta = false;

    }
    requestAnimationFrame(flyttKula);
}

function skyt(){
    erILufta = true;
    skytBtn.disabled = true;
    flyttKula();

}
let xpos = 250;
let ypos = 440;
let xfart = 10;

let erILufta = false;

skytBtn.addEventListener("click", skyt);

