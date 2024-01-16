# Første server med node.js

## Nedlastning og installering
1. [nodejs.org](https://nodejs.org/en)
2. Installer node.js
3. Åpne VS code og lag en ny mappe 'First nodejs'.
4. Velg 'First nodejs' som mappe i VS code.
5. Velg ´Terminal´ i VS code og skriv ´npm init´. Trykk ENTER for å la alle valg være default.
6. I terminalen skriv nå ´npm install mysql´.
7. Skriv så ´npm install express´.

# MWE av node.js lokal server
1. Lag en fil 'server.js'.
2. Rediger fila og skriv følgende:
```
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Min først node.js server, velkommen!</h1>");
})
```
3. Lagre fila.
4. I terminalen skriver du så 