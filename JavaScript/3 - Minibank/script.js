
let saldo = 10000;  // Initial balance

document.addEventListener("DOMContentLoaded", function() {
    // Hendelseslytter for innskudd-link
    document.getElementById("innskudd-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("innskudd.html");
    });
    
    // Hendelseslytter for saldo-link
    document.getElementById("saldo-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("saldo.html");
    });

    // Funksjon for å laste inn innhold
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("main-content").innerHTML = data;
                if (url === "saldo.html") {
                    // Add event listener for the show balance button only if the saldo.html content is loaded
                    document.getElementById("show-saldo-btn").addEventListener("click", function() {
                        document.getElementById("saldo-amount").textContent = saldo;
                    });
                }
            })
            .catch(error => {
                console.error("Error loading content:", error);
            });
    }
});
