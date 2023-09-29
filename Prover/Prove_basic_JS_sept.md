# Prøve i Utvikling: Grunnleggende JavaScript med løsning
### Del 1: Flervalgsdel

1. Hva gjør følgende JavaScript-kode?
    - a) Setter `x` til 15. **riktig**
    - b) Setter `x` til 5.
    - c) Legger til 5 til `x`.
    - d) Ingenting.

   ```javascript
   let x = 10;
   x += 5;
   ```

2. Hvilken HTML-tag brukes for å sette inn en hyperkobling?
   - a) `<hl>`  
   - b) `<link>`  
   - c) `<a>` **riktig**
   - d) `<lb>`


---

1. Hva returnerer følgende kode?
   - a) 105  
   - b) 15  
   - c) "105" **riktig**
   - d) "15"

   ```javascript
   "10" + 5
   ```

---

4. Hvilken funksjon brukes i JavaScript for å skrive ut til konsollen?
   - a) `print()`
   - b) `output()`
   - c) `display()`
   - d) `console.log()` **riktig**

---

5. Hvilken tag brukes for å lage en nummerert liste i HTML?
   - a) `<ol>` **riktig**
   - b) `<ul>`
   - c) `<li>`
   - d) `<il>`

---

6. Hva vil følgende kode vise?
   - a) 5  
   - b) 12 **riktig**
   - c) 6 
   - d) 24

   ```javascript
   let y = 5;
   y = y + 1;
   y = y * 2;
   alert(y);
   ```

---

7. Hvilken tag i HTML brukes for å sette inn et bilde?
   - a) `<picture>`
   - b) `<image>`
   - c) `<img>` **riktig**
   - d) `<src>`

---

8. Hva er riktig måte å kommentere ut flere linjer med kode i JavaScript?
   - a) <!-- Dette er en kommentar -->
   - b) // Dette er en kommentar
   - c) /* Dette er en kommentar */ **riktig**
   - d) -- Dette er en kommentar --

---

9. Hvilken metode i JavaScript brukes for å finne et HTML-element ved sin ID?
   - a) `locateElement()`
   - b) `getElementById()` **riktig**
   - c) `findElement()`
   - d) `querySelector()`

---

10. Hva er hovedformålet med HTML?
   - a) Lage spill.
   - b) Strukturere innhold på web. **riktig**
   - c) Manipulere data.
   - d) Lage mobilapper.

---

11. Hvordan definerer du en konstant variabel i JavaScript?
   - a) `const variableName = value;` **riktig**
   - b) `var variableName = value;`
   - c) `let variableName = value;`
   - d) `variable variableName = value;`

---

12. Hva er riktig måte å henvise til en ekstern JavaScript-fil kalt "script.js" i HTML?
   - a) `<script src="script.js">` **riktig**
   - b) `<script link="script.js">`
   - c) `<script href="script.js">`
   - d) `<javascript src="script.js">`

---

13. Hvordan tester du om en variabel `a` er lik en variabel `b` i JavaScript?
   - a) a = b
   - b) a == b **riktig**
   - c) a is b
   - d) a.equals(b)

---

14. Hvordan definerer du en funksjon i JavaScript?
   - a) `function:myFunction()`
   - b) `function = myFunction()`
   - c) `function myFunction()` **riktig**
   - d) `myFunction = function()`

## Del 2: Halvferdige programmer
---
### Oppgave 1:
Gitt følgende kode, fyll inn manglende del for å vise en alert med meldingen "Hei, verden!" når knappen trykkes:
```html
<button onclick="...">Trykk på meg</button>
```

**Løsning**
```html
<button onclick="alert('Hei, verden!')">Trykk på meg</button>
```
---

### Oppgave 2:
Fullfør koden slik at den viser en alert med summen av `a` og `b` når knappen trykkes:
```html
<button onclick="sum()">Sum</button>
<script>
let a = 5;
let b = 10;
function sum() {
    // ...
}
</script>
```
**Løsning**
```html
<button onclick="sum()">Sum</button>
<script>
let a = 5;
let b = 10;
function sum() {
    alert(a + b);
}
</script>
```
---


### Oppgave 3:
Fullfør koden slik at den sjekker om tallet er større enn 10 og viser en passende melding når knappen trykkes:
```html
<button onclick="sjekkTall()">Sjekk tall</button>
<script>
let tall = 12;
function sjekkTall() {
    // ...
}
</script>
```

**Løsning**
```html
<button onclick="sjekkTall()">Sjekk tall</button>
<script>
let tall = 12;
function sjekkTall() {
    if (tall > 10) {
        alert("Tallet er større enn 10!");
    } else {
        alert("Tallet er ikke større enn 10.");
    }
}
</script>
```
---

### Oppgave 4:
Når knappen trykkes, endre teksten i det følgende HTML-elementet til "Velkommen!":
```html
<button onclick="endreTekst()">Endre tekst</button>
<p id="tekst">Hallo</p>
<script>
// ...
</script>
```

**Løsning**
```html
<button onclick="endreTekst()">Endre tekst</button>
<p id="tekst">Hallo</p>
<script>
function endreTekst() {
    document.getElementById("tekst").textContent = "Velkommen!";
}
</script>
```
---

### Oppgave 5:
Fullfør koden for å vise en alert med et tilfeldig tall mellom 1 og 10 når knappen trykkes:
```html
<button onclick="tilfeldigTall()">Generer tall</button>
<script>
function tilfeldigTall() {
    // ...
}
</script>
```

**Løsning**
```html
<button onclick="tilfeldigTall()">Generer tall</button>
<script>
function tilfeldigTall() {
    let number = Math.floor(Math.random() * 10) + 1;
    alert(number);
}
</script>
```
---

### Oppgave 6:
Når knappen trykkes, vis en melding som sier om tallet er positivt, negativt eller null:
```html
<button onclick="sjekkVerdi()">Sjekk verdi</button>
<script>
let verdi = 5; // Dette tallet kan endres for testing
function sjekkVerdi() {
    // ...
}
</script>
```

**Løsning**
```html
<button onclick="sjekkVerdi()">Sjekk verdi</button>
<script>
let verdi = 5;
function sjekkVerdi() {
    if (verdi > 0) {
        alert("Tallet er positivt.");
    } else if (verdi < 0) {
        alert("Tallet er negativt.");
    } else {
        alert("Tallet er null.");
    }
}
</script>
```
---

### Oppgave 7:
Fullfør koden slik at når brukeren trykker på knappen, vil en alert vise et tilfeldig helt tall mellom 5 og 15. Dersom tallet er større enn 10, skriv også ut en ekstra melding i konsollen.
```html
<button onclick="tilfeldigHeltTall()">Generer helt tall</button>
<script>
function tilfeldigHeltTall() {
    let tall = Math.floor(Math.random() * ... ) + ...;
    alert(tall);
    if (...) {
        console.log("Tallet er større enn 10!");
    }
}
</script>
```

**Løsning**
```html
<button onclick="tilfeldigHeltTall()">Generer helt tall</button>
<script>
function tilfeldigHeltTall() {
    let tall = Math.floor(Math.random() * 11) + 5;
    alert(tall);
    if (tall > 10) {
        console.log("Tallet er større enn 10!");
    }
}
</script>
```
---

### Oppgave 8:
Når knappen trykkes, skriv ut i konsollen hvor mange bokstaver det er i teksten. Hvis teksten har mer enn 12 bokstaver, endre tekstinnholdet i `tekstElement` til "Teksten er lang". *Tips: String-variabler har en egenskap length som du får tak i ved å bruke punktum.*
```html
<button onclick="analyserTekst()">Analyser teksten</button>
<p id="tekstElement">JavaScript er virkelig gøy!</p>
<script>
function analyserTekst() {
    let tekst = document.getElementById("tekstElement").textContent;
    let antall = ...;
   

 console.log("Teksten har " + antall + " bokstaver.");
    if (...) {
        ...
    }
}
</script>
```

**Løsning**
```html
<button onclick="analyserTekst()">Analyser teksten</button>
<p id="tekstElement">JavaScript er virkelig gøy!</p>
<script>
function analyserTekst() {
    let tekst = document.getElementById("tekstElement").textContent;
    let antall = tekst.length;
    console.log("Teksten har " + antall + " bokstaver.");
    if (antall > 12) {
        document.getElementById("tekstElement").textContent = "Teksten er lang";
    }
}
</script>
```
---

### Oppgave 9:
Gitt en startpris og en rabatt, beregn den nye prisen når rabatten er trukket fra, og vis den nye prisen i en alert.
```html
<button onclick="beregnRabatt()">Beregn rabatt</button>
<script>
let startpris = 100;
let rabatt = 15; // i prosent
function beregnRabatt() {
    let rabattBeløp = ...;
    let nyPris = ...;
    alert("Ny pris etter rabatt: " + nyPris + "kr");
}
</script>
```

**Løsning**
```html
<button onclick="beregnRabatt()">Beregn rabatt</button>
<script>
let startpris = 100;
let rabatt = 15; // i prosent
function beregnRabatt() {
    let rabattBeløp = (rabatt / 100) * startpris;
    let nyPris = startpris - rabattBeløp;
    alert("Ny pris etter rabatt: " + nyPris + "kr");
}
</script>
```
---

### Oppgave 10:
Fullfør koden for å vise en alert med at passordet ikke er godt nok hvis verdien av `passord` er kortere enn 8 tegn eller ikke inneholder en stor bokstav:
```html
<button onclick="sjekkPassord()">Sjekk passord</button>
<script>
let passord = "hemmelig";
function sjekkPassord() {
    if (passord.length ... 8 ... ...) {
        alert("Passordet er ikke sterkt nok!");
    }...
}
</script>
```
*Tips: Bruk blant annet toLowerCase() eller toUpperCase() for å kontrollere om passordet inneholder en stor bokstav.*

**Løsning**
```html
<button onclick="sjekkPassord()">Sjekk passord</button>
<script>
let passord = "hemmelig";
function sjekkPassord() {
    if (passord.length < 8 || passord === passord.toLowerCase()) {
        alert("Passordet er ikke sterkt nok!");
    }
}
</script>
```

---

# Del 3: Løpekonkurranse Nettside

**Kravspesifikasjon:**
Du skal lage en nettside der brukere kan registrere sine tider fra en løpekonkurranse. Det er kun plass til resultater for tre deltakere.

**Funksjonelle Krav:**
1. Brukeren skal kunne skrive inn sitt navn.
2. Brukeren skal kunne registrere tiden sin i form av minutter og sekunder. *Tips: I JavaScript bør du lagre tiden som sekunder, f.eks. 2 minutter og 5 sekunder lagres som 120+5=125 sek*
3. Det skal være en "Registrer tid"-knapp som legger til brukerens tid i en liste. Når tre tider er registrert, skal det ikke være mulig å registrere flere.
4. Etter at en tid er registrert, skal det vises en melding til brukeren om at tiden er registrert.
5. Det skal være en søkeboks hvor brukeren kan søke på et navn. Når navnet søkes på, skal brukerens tid vises.
6. Etter at alle tre tidene er registrert, skal vinneren (den med kortest tid) vises på skjermen.

**UI Krav:**
1. En overskrift på toppen av siden som sier "Løpekonkurranse Registrering".
2. En input-boks for navn.
3. To input-bokser for tid (minutter og sekunder).
4. En knapp for å registrere tiden.
5. En seksjon som viser en søkeboks for navn og resultatet av søket.
6. En seksjon som viser vinneren av løpekonkurransen.

**Utviklingssteg:**
1. **Oppsett**: Lag en enkel HTML-struktur for nettsiden med input-bokser, knapp, og søkefunksjonalitet.
2. **Tidregistrering**: Legg til funksjonalitet slik at når "Registrer tid"-knappen trykkes, vises en bekreftelsesmelding til brukeren.
3. **Navnesøk**: Implementer søkefunksjonalitet slik at brukere kan søke på et navn og få opp tiden denne personen løp på.
4. **Begrensning**: Pass på at ikke mer enn tre tider kan registreres. Når grensen er nådd, skal det vises en melding til brukeren om at det ikke er plass til flere resultater.
5. **Vis Vinner**: Når alle tre deltakerne har registrert sine tider, beregn og vis hvem som er vinneren basert på den korteste tiden.
6. **Forbedret UI**: Legg til CSS for å forbedre utseendet på nettsiden. Pass på at nettsiden er brukervennlig og at det er lett å forstå hvordan man registrerer en tid og hvordan man utfører søk.

Lykke til!

Selvfølgelig! La oss lage en enklere løsning med seks variabler og uten bruk av lister eller objekter:

---

## Løpekonkurranse Nettside

### HTML:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Løpekonkurranse Registrering</title>
    <link rel="stylesheet" href="stiler.css">
</head>
<body>
    <h1>Løpekonkurranse Registrering</h1>
    <input type="text" id="navn" placeholder="Ditt navn">
    <input type="number" id="minutter" placeholder="Minutter" min="0">
    <input type="number" id="sekunder" placeholder="Sekunder" min="0" max="59">
    <button onclick="registrerTid()">Registrer tid</button>
    <p id="txtUt></p>
    
    <input type="text" id="sokeNavn" placeholder="Søk på navn">
    <button onclick="sokeTid()">Søk</button>
    <p id="sokeResultat"></p>
    

    <h2>Vinner</h2>
    <button onclick="visVinner()">Vis Vinner</button>
    <p id="vinner"></p>
    
    <script src="skript.js"></script>
</body>
</html>

```

### CSS (`stiler.css`):

```css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
}

input, button {
    padding: 10px;
    margin: 5px;
}

#vinner{
    background-color:pink;
}
```

### JavaScript (`skript.js`):

```javascript
let deltaker1Navn = "";
let deltaker1Tid = -1;

let deltaker2Navn = "";
let deltaker2Tid = -1;

let deltaker3Navn = "";
let deltaker3Tid = -1;

let antallRegistrerte = 0;

function registrerTid() {
    const navn = document.getElementById('navn').value;
    const minutter = parseInt(document.getElementById('minutter').value);
    const sekunder = parseInt(document.getElementById('sekunder').value);

    const totalTidISekunder = (minutter * 60) + sekunder;

    if (antallRegistrerte == 0) {
        deltaker1Navn = navn;
        deltaker1Tid = totalTidISekunder;
    } else if (antallRegistrerte == 1) {
        deltaker2Navn = navn;
        deltaker2Tid = totalTidISekunder;
    } else if (antallRegistrerte == 2) {
        deltaker3Navn = navn;
        deltaker3Tid = totalTidISekunder;
    }

    antallRegistrerte += 1;

    document.getElementById('txtUt').textContent = 'Tiden er registrert!';
}

function sokeTid() {
    const sokeNavn = document.getElementById('sokeNavn').value;

    if (sokeNavn == deltaker1Navn) {
        const minutter = Math.floor(deltaker1Tid / 60);
        const sekunder = deltaker1Tid % 60;
        document.getElementById('sokeResultat').textContent = `${deltaker1Navn} - ${minutter}m ${sekunder}s`;
    } else if (sokeNavn == deltaker2Navn) {
        const minutter = Math.floor(deltaker2Tid / 60);
        const sekunder = deltaker2Tid % 60;
        document.getElementById('sokeResultat').textContent = `${deltaker2Navn} - ${minutter}m ${sekunder}s`;
    } else if (sokeNavn == deltaker3Navn) {
        const minutter = Math.floor(deltaker3Tid / 60);
        const sekunder = deltaker3Tid % 60;
        document.getElementById('sokeResultat').textContent = `${deltaker3Navn} - ${minutter}m ${sekunder}s`;
    } else {
        document.getElementById('sokeResultat').textContent = 'Deltaker ikke funnet';
    }
}

function visVinner() {
    // Anta først at deltaker 1 er vinneren, sammenlign så med de andre
    let vinnerNavn = deltaker1Navn;
    let kortesteTid = deltaker1Tid;  

    // Undersøker om deltaker 2 er raskest
    if (deltaker2Tid < deltaker1Tid && deltaker2Tid < deltaker3Tid) {
        vinnerNavn = deltaker2Navn;
        kortesteTid = deltaker2Tid;
    } else if (deltaker3Tid < deltaker1Tid && deltaker3Tid < deltaker2Tid) {
        vinnerNavn = deltaker3Navn;
        kortesteTid = deltaker3Tid;
    }
    

    const minutter = Math.floor(kortesteTid / 60);
    const sekunder = kortesteTid % 60;

    document.getElementById('vinner').textContent = `${vinnerNavn} med tiden ${minutter}m ${sekunder}s`;
}

```
