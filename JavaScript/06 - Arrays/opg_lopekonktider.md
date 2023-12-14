# Utvikling av en nettside for løpetidsregistrering
#### Mål:
Lag en nettside hvor brukere kan registrere navn og løpetider for en 3 km løp. Nettsiden skal også kunne vise en oversikt over alle deltakere og tider, samt finne ut hvem som er vinneren.
##### JavaScript-pensum:
Array, betingelser, variabler og løkker.
### Steg 1: Grunnleggende HTML-Struktur
Opprett en enkel HTML-fil med et tekstfelt for navn, et nummerfelt for tid, og en knapp for å registrere deltakere.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Løpetidsregistrering</title>
</head>
<body>
    <input type="text" id="navnInput" placeholder="Deltakers navn">
    <input type="number" id="tidInput" placeholder="Tid i minutter">
    <button id="registrerKnapp">Registrer Deltaker</button>
</body>
</html>
```

### Steg 2: Legge til CSS
Inkluder enkel CSS for å style siden. Legg til dette i `<head>`-delen.

```html
<style>
    /* Ditt CSS her */
</style>
```

### Steg 3: Opprette Tomme Arrays
I JavaScript, opprett to tomme arrays `deltakere` og `lopetider`.

```javascript
let deltakere = [];
let lopetider = [];
```



### Steg 4: Vis Oversikt Knapp og Funksjon
Legg til en ny knapp for å vise oversikten. Skriv en funksjon `visOversikt` som itererer gjennom arrays og viser informasjonen.

```html
<button id="visOversiktKnapp">Vis Oversikt</button>
```

```javascript
document.getElementById('visOversiktKnapp').addEventListener('click', visOversikt);

function visOversikt() {
    // Skriv ut hver deltakers navn og tid
}
```

### Steg 5: Implementere `visOversikt` Funksjonen
Her er hele `visOversikt`-funksjonen:

```javascript
function visOversikt() {
    let resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = '';

    for(let i = 0; i < deltakere.length; i++) {
        resultatDiv.innerHTML += deltakere[i] + ': ' + lopetider[i] + ' min<br>';
    }
}
```

### Steg 6: Legge til Resultat Div
Legg til en `<div>` i HTML for å vise resultatene av `visOversikt`.

```html
<div id="resultat"></div>
```

### Steg 7: Legge til JavaScript for Registreringsknappen
Legg til en event listener for `registrerKnapp` som kaller en funksjon `leggTilDeltaker`.

```javascript
document.getElementById('registrerKnapp').addEventListener('click', leggTilDeltaker);
```

### Steg 8: Implementere `leggTilDeltaker` Funksjonen
Skriv funksjonen `leggTilDeltaker` som henter verdiene fra tekstfeltene og legger dem til i de tilsvarende arrays. Rens tekstfeltene etterpå.

```javascript
function leggTilDeltaker() {
    // Hent navn og tid fra input-feltene og legg dem til i arrays
    // Rens input-feltene etterpå
}
```

### Steg 9: Finn Vinner Knapp
Legg til en knapp for å finne vinneren og en tom funksjon `finnVinner`.

```html
<button id="finnVinnerKnapp">Finn Vinner</button>
```

```javascript
document.getElementById('finnVinnerKnapp').addEventListener('click', finnVinner);

function finnVinner() {
    // Finn vinneren og vis navn og tid
}
```

### Steg 10: Implementere Logikken for å Finne Vinneren
Legg til logikk i `finnVinner` for å finne deltakeren med kortest løpetid. 
*Tips: Anta at den første deltakeren har kortest tid, sammenlign denne med de andre, og lagre den korteste tiden funnet.*

```javascript
function finnVinner() {
    // Implementer logikk for å finne vinneren
}
```

### Steg 11: Testing og Feilsøking
Test siden grundig og rett eventuelle feil.

### Steg 12: Tilpasninger og Forbedringer
Til slutt, gjør tilpasninger og forbedringer etter behov. Utforsk muligheten for å legge til flere funksjoner som for eksempel sortering av tider.

### Ekstra steg 1: Sortering av Resultater
Oppgave: Utvid `visOversikt` funksjonen til å sortere deltakerne etter løpetid, fra kortest til lengst.

- Elevene må lære hvordan man sorterer et array basert på tilknyttede verdier i et annet array. 
- Introduser en funksjon som kan sortere både `deltakere` og `lopetider` arrays samtidig, slik at navnene og tidene fortsatt korresponderer med hverandre etter sorteringen.

### Ekstra steg 2: Lagring av Data i Lokal Lagring
Oppgave: Lagre deltakernes data i nettleserens lokal lagring, og last inn disse dataene når nettsiden lastes.

- Dette vil introdusere elevene for konseptet med web lagring.
- De må skrive kode for å lagre deltakernes navn og tider i `localStorage` og hente disse dataene når siden lastes, slik at informasjonen ikke går tapt selv om siden blir oppfrisket.

---
Lykke til med utviklingen! 
Husk at programmering handler om å eksperimentere og lære gjennom praksis.
