document.addEventListener("DOMContentLoaded", () => {
    // Når nettsideinnholde er lastet inn, gjør følgende:
    // 1. Finn ut hvilken side vi er på, og endre stilen til
    // a-elementet
    checkCurrentPage();
    // 2. Hent kategoriene fra tabellen kategorier i databasen og
    // fyll select-boksen med disse.
    fyllSelectMedKategorier();
});

function fyllSelectMedKategorier(){
    
}
function checkCurrentPage(){
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    console.log(currentLocation);
    navLinks.forEach(link => {
        if(link.href.includes(currentLocation)) {
            link.classList.add('active');
        }
    });
}