# Oppgavesett 2: form

### Oppgave 1: Enkel Tekstinnføring
Lag et enkelt skjema hvor brukeren kan legge inn sitt navn. Når brukeren trykker på "Send inn"-knappen, skal navnet vises under skjemaet ved hjelp av JavaScript.

**Hint:** 
- Bruk `<input type="text">` for tekstinnføring.
- Bruk JavaScripts `document.getElementById()` for å hente og vise dataen.

### Oppgave 2: Velg Din Favorittfarge
Lag et skjema hvor brukeren kan velge sin favorittfarge fra en nedtrekksmeny (dropdown). Når brukeren velger en farge og trykker "Send inn", skal bakgrunnsfargen på nettsiden endres til den valgte fargen.

**Hint:**
- Bruk `<select>` og `<option>` for å lage nedtrekksmenyen.
- Bruk JavaScript for å endre `document.body.style.backgroundColor`.

### Oppgave 3: Avkryssningsbokser for Interesser
Lag et skjema med avkryssningsbokser hvor brukeren kan velge mellom forskjellige interesser (f.eks. "Musikk", "Sport", "Koding"). Når brukeren sender inn skjemaet, skal de valgte interessene listes opp under skjemaet.

**Hint:**
- Bruk `<input type="checkbox">` for avkryssningsbokser.

### Oppgave 4: Dynamisk Skjema
Lag et skjema hvor brukeren først velger en kategori fra en nedtrekksmeny (f.eks. "Dyr", "Planeter", "Bøker"). Basert på valgt kategori skal et nytt sett med input-felt eller nedtrekksmenyer vises. For eksempel, hvis brukeren velger "Dyr", vises en annen nedtrekksmeny med valg som "Katt", "Hund", "Fisk" osv.

**Hint:**
- Dette vil kreve bruk av JavaScript event listeners (`addEventListener`) for å lytte til endringer i den første nedtrekksmenyen.
- Bruk `display`-egenskapen i CSS for å skjule/ vise input-elementer basert på valg.

### Oppgave 5: Skjema Validering
Lag et registreringsskjema med felt for brukernavn, e-post, passord og passordbekreftelse. Bruk JavaScript for å validere følgende:
- Brukernavnet må være minst 5 tegn.
- E-posten skal være en gyldig e-postadresse.
- Passordet må være minst 8 tegn og inneholde både bokstaver og tall.
- Passordbekreftelsen skal matche passordet.
Hvis noen av vilkårene ikke er oppfylt, skal brukeren få en tydelig feilmelding.

**Hint:**
- Dette vil kreve bruk av regulære uttrykk (`RegExp`) for å validere e-post og passord.
- Du kan bruke JavaScripts `alert()` for å vise feilmeldinger, eller vise dem direkte på nettsiden for en bedre brukeropplevelse.
