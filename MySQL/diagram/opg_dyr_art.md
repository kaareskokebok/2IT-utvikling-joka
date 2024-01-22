### Oppgave: Opprett Database for en Dyrepark

#### Scenario:
Du er ansatt for å designe en database for en dyrepark. 
Dyreparken ønsker å holde orden på de ulike dyreartene de har og de individuelle 
dyrene innenfor hver art. 
Du har fått i oppgave å opprette to tabeller i denne databasen: 
en tabell som heter `Art` og en annen som heter `Dyr`.

#### Del 1: Databasemodell (drawsql.app):

1. **Design Tabellen `Art`:**
   - Tenk over hvilke typer informasjon som ville være viktig og relevant å lagre om hver dyreart i en dyrepark.
   - Bestem hvilke kolonner (felt) som skal inkluderes i denne tabellen.
   - Velg passende datatyper for hver kolonne.
   - Bestem hvilken kolonne som skal være primærnøkkelen.

2. **Design Tabellen `Dyr`:**
   - Vurder hvilken informasjon som ville være viktig å holde styr på for hvert individuelle dyr i parken.
   - Bestem hvilke kolonner som skal inkluderes i denne tabellen.
   - Velg passende datatyper for hver kolonne.
   - Bestem hvilken kolonne som skal være primærnøkkelen.

3. **Etablere Relasjonen Mellom Tabellene:**
   - Avgjør hvordan disse to tabellene skal kobles sammen. Tenk på hvilken type relasjon som passer best (en-til-en, en-til-mange, mange-til-mange) og hvordan du kan implementere dette i databasen.
   - Bestem hvilke kolonner som skal være involvert i denne relasjonen.
   - Vurder hvordan du kan bruke fremmednøkler for å etablere denne relasjonen.

#### Del 2: Bruke MySql for å lage databasen
Lag databasen og tabellene ved hjelp av sql-script, enten i MySql workbench, eller VS code.
