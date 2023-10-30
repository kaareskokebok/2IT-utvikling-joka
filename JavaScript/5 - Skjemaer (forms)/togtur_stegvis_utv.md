# Togtur stegvis utvikling

**Steg 1: Opprett HTML-struktur**

1. Start med å lage en ny `.html`-fil. Kall den for eksempel `togbillett.html`.
2. Skriv inn grunnleggende HTML-struktur (doctype, html, head, body).
3. Innenfor `<body>`-taggen, lag en `<form>` med `id="billettForm"`.
4. Innenfor skjemaet, bruk `<input type="radio">` for å la brukeren velge mellom voksen, barn, eller pensjonist. Husk å gi samme `name` attributt for alle radio-knappene, for eksempel `name="passasjertype"`.
5. Legg til et `<input type="number">` for å angi antall billetter, og et `<input type="text">` for destinasjon.
6. Avslutt med en "Submit" knapp, `<input type="submit">`.

Eksempel på koden så langt (dette er bare et utgangspunkt, elevene bør legge til labels og annen nødvendig tekst):

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Bestilling av Togbillett</title>
    <link rel="stylesheet" href="stiler.css"> <!-- Vi vil legge til CSS senere -->
</head>
<body>

<form id="billettForm">
    <input type="radio" name="passasjertype" value="voksen"> Voksen (250 kr)<br>
    <input type="radio" name="passasjertype" value="barn"> Barn (130 kr)<br>
    <input type="radio" name="passasjertype" value="pensjonist"> Pensjonist (105 kr)<br>
    Antall: <input type="number" name="antall"><br>
    Destinasjon: <input type="text" name="destinasjon"><br>
    <input type="submit" value="Beregn pris">
</form>

<!-- Vi vil legge til JavaScript nedenfor -->
<script src="script.js"></script>

</body>
</html>
```

**Steg 2: Grunnleggende CSS**

1. Lag en ny `.css`-fil kalt `stiler.css`.
2. Definer grunnleggende stiler for skjemaet, som størrelse, skrifttyper, og avstander.

**Steg 3: Legge til JavaScript**

1. Lag en ny `.js`-fil og kall den `script.js`.
2. Koble denne filen til HTML-dokumentet ditt (hvis du ikke allerede har gjort det i trinn 1).
3. I `script.js`, start med å legge til en 'event listener' for 'submit'-eventet til skjemaet.

```javascript
document.getElementById('billettForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Stopp formen fra å sende data, slik at vi kan beregne og vise totalprisen.

    // Din kode for å hente data fra skjemaet og beregne totalprisen kommer her.
});
```

**Utvidet Steg 3: Håndtere Skjemadata med JavaScript**

1. Først, forsikre deg om at din JavaScript-fil er koblet til HTML-dokumentet ditt. Hvis du ikke allerede har gjort det, legg til følgende rett før `</body>`-taggen i HTML-filen din:
   ```html
   <script src="script.js"></script>
   ```
   
2. I din `script.js`-fil, vil du fokusere på å hente ut data fra skjemaet når brukeren sender det. Her er hvordan du legger til en hendelseslytter til skjemaet og forhindrer standard nettleseratferd ved innsending.

   ```javascript
   document.getElementById('billettForm').addEventListener('submit', function(event) {
       event.preventDefault();  // Dette forhindrer skjemaet i å sende (standard oppførsel), slik at vi kan behandle det selv.

       // Kode for å hente skjemaverdier og beregne totalpris vil gå her.
   });
   ```

3. Nå, innenfor denne funksjonen, trenger du å hente verdien av den valgte passasjertypen, antall billetter, og destinasjon. Her er hvordan du gjør det:

   ```javascript
   // Få referanser til skjemaelementene vi trenger data fra.
   var passasjerType = document.querySelector('input[name="passasjertype"]:checked').value;
   var antallBilletter = document.querySelector('input[name="antall"]').value;

   // Validering: Sørg for at alle feltene er utfylt, og at antall billetter er et gyldig antall.
   if (passasjerType === '' || antallBilletter <= 0) {
       alert("Vennligst fyll ut alle feltene korrekt.");
       return; // Avbryter funksjonen her, slik at resten av koden ikke kjører.
   }

   // Vi fortsetter med koden for beregning nedenfor.
   ```

4. Med disse verdiene, kan du nå beregne totalprisen. Du vil ha forskjellige priser basert på passasjertypen, så bruk en betinget uttalelse (for eksempel, en `switch` eller `if-else`-uttalelse) for å bestemme dette.

   ```javascript
   var prisPerBillett;

   switch (passasjerType) {
       case 'voksen':
           prisPerBillett = 250;
           break;
       case 'barn':
           prisPerBillett = 130;
           break;
       case 'pensjonist':
           prisPerBillett = 105;
           break;
       default:
           alert("Noe gikk galt, vennligst prøv igjen.");
           return; // Noe gikk galt, så vi avbryter funksjonen tidlig.
   }

   var totalPris = antallBilletter * prisPerBillett;
   ```

5. Til slutt, vis totalprisen til brukeren. Du kan gjøre dette med en enkel `alert`, eller, for en bedre brukeropplevelse, oppdater et element i HTML-dokumentet ditt med prisen.

   ```javascript
   alert("Totalprisen er " + totalPris + " kr.");
   // Eller, for å vise i dokumentet:
   // var resultatDiv = document.getElementById('resultat');
   // resultatDiv.textContent = "Totalprisen er " + totalPris + " kr.";
   ```

