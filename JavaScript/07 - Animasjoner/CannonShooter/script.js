function sjekkKollisjon(){

}

function flyttKula(){
    if (!erILufta){
        // Stopp animasjon når kula er utenfor skjermen
        skytBtn.disabled = false;
        return;
    }
    xpos += xfart;

    kule.style.left = xpos + "px";

    sjekkKollisjon();

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
    let lyd = new Audio("shoot.mp3");
    lyd.play();
    setTimeout(flyttKula,500);

}
let xpos = 250;
let ypos = 440;
let xfart = 10;
let radiusK = 17.5;
let erILufta = false;

// Fiendekule
let xposF = 750;
let yposF = 440;
let radiusF = 50;

skytBtn.addEventListener("click", skyt);

