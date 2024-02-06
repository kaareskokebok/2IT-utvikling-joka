## Handout: Lage en Nettside for Datakomponenter

### Mål:
Bygge en nettside som kjøres via Node.js-server, og som kobles til en MySQL-database for å vise, sortere, og filtrere produkter (datakomponenter).

### Utstyr:
- Node.js installert
- MySQL installert
- Teksteditor (f.eks. Visual Studio Code)
- Webleser

### Steg 1: Opprett Database og Tabeller
1. **Start MySQL serveren** og logg inn.
2. **Opprett en ny database** kalt `datakomponenter`.
3. **Opprett tabellene** som beskrevet tidligere: `Produkter`, `Kategorier`, `Bilder`, og evt. `Videoer`.

### Steg 2: Sett opp Node.js Prosjekt
1. **Opprett en ny mappe** for prosjektet.
2. **Initialiser et nytt Node.js-prosjekt** ved å kjøre `npm init` i mappen.
3. **Installer nødvendige pakker**: `express`, `mysql`, og `body-parser` ved å kjøre `npm install express mysql body-parser`.

### Steg 3: Koble til Databasen
1. **Opprett en ny JavaScript-fil** (f.eks. `app.js`).
2. **Sett opp en tilkobling** til MySQL-databasen i `app.js` ved å bruke `mysql`-pakken.

### Steg 4: Opprett API Endepunkter
1. **Lag en route** for å hente alle produkter.
2. **Legg til filtreringslogikk** for å sortere produkter etter pris og kategori.

### Steg 5: Utvikle Frontend
1. **Lag en HTML-fil** (f.eks. `index.html`) for din startside.
2. **Inkluder lenker** til nettsidene "Våre Produkter" og "Bestilling".
3. **Lag nye HTML-filer** for produktsiden (f.eks. `products.html`) og en for bestilling.
4. **Bruk JavaScript** for å hente produktdata fra serveren og vise dem på produktsiden.

### Steg 6: Implementer Sortering og Filtrering
1. **Legg til grensesnittkomponenter** for sortering og filtrering på produktsiden.
2. **Oppdater JavaScript-koden** for å håndtere sortering og filtrering basert på brukerens valg.

### Steg 7: Testing og Feilsøking
1. **Test nettsiden** for å sikre at alle funksjoner virker som forventet.
2. **Feilsøk eventuelle problemer** som oppstår.

## Steg 8: Dokumentasjon av Prosjektet

### Hva betyr det å Dokumentere Prosjektet?
Dokumentasjon av et prosjekt betyr å skrive ned viktig informasjon om hvordan prosjektet er satt opp, hvordan det fungerer, og hvordan man bruker det. Dette inkluderer detaljer om:

1. **Kodebasen**: Forklare hva ulike deler av koden gjør, spesielt viktige funksjoner og API-endepunkter.
2. **Databaseoppsett**: Beskrive strukturen på databasen, inkludert tabeller og deres relasjoner.
3. **Installasjon og Konfigurasjon**: Instruksjoner for hvordan man setter opp prosjektet, inkludert installasjon av nødvendige programvarer og biblioteker.
4. **Bruksanvisning**: Hvordan navigere i nettsiden, og hvordan ulike funksjoner som sortering og filtrering fungerer.

### Hvordan Dokumentere?
Dokumentasjonen bør være klar og enkel å forstå. Du kan inkludere:

- **Kommentarer i koden**: Skriv kommentarer som forklarer hva ulike deler av koden gjør.
- **README-fil**: Opprett en README-fil i prosjektets rotmappe som gir en oversikt over prosjektet, inkludert hvordan man installerer og kjører det.
- **Tekstdokumenter eller Wiki-sider**: For mer utfyllende dokumentasjon, kan du bruke separate dokumenter eller wiki-sider knyttet til prosjektet.

Ved å følge disse retningslinjene, vil dokumentasjonen av prosjektet ditt hjelpe brukerne å forstå og effektivt bruke applikasjonen du har utviklet.

---
## Krav til nettsidene

### `index.html` (Velkomstside)

**Mål:**
- Å fungere som hovedinngangspunktet og velkomstsiden for nettstedet.

**Funksjonelle Krav:**
1. **Navigasjonsmeny:** Skal inneholde lenker til 'Produkter' og 'Bestilling', samt eventuelle andre viktige seksjoner av nettstedet.
2. **Velkomstmelding:** En tydelig og engasjerende velkomstmelding som introducerer nettstedet og dets formål.
3. **Informasjon om Nettstedet:** En kort beskrivelse av hva brukerne kan forvente å finne (f.eks. typer av datakomponenter som tilbys).
4. **Design og Brukervennlighet:** Skal være responsiv og enkel å navigere for en god brukeropplevelse på alle enheter.

### `produkter.html` (Produktside)

**Mål:**
- Å vise alle tilgjengelige produkter og tilby sortering og filtreringsfunksjoner.

**Funksjonelle Krav:**
1. **Produktvisning:** Liste alle tilgjengelige produkter med grunnleggende informasjon som navn, pris, og en kort beskrivelse.
2. **Sorteringsfunksjon:** Tillate brukere å sortere produkter etter pris (lav til høy/høy til lav) og eventuelt etter andre kriterier.
3. **Filtrering etter Kategori:** Mulighet for brukere å filtrere produkter basert på kategorier.
4. **Interaktivitet:** Klikkbare produkter som fører til en detaljert produktbeskrivelse.
5. **Søkefunksjon:** (valgfritt) En søkeboks for å finne produkter raskt basert på nøkkelord.
6. **Responsive Design:** Layouten skal tilpasse seg ulike skjermstørrelser for optimal visning.

### `bestilling.html` (Bestillingsside)

**Mål:**
- Å tilby en brukervennlig grensesnitt for å legge inn bestillinger.

**Funksjonelle Krav:**
1. **Bestillingsskjema:** Et skjema hvor brukere kan fylle inn nødvendig informasjon for å gjennomføre en bestilling (navn, adresse, kontaktinformasjon, etc.).
2. **Valg av Produkter:** En funksjon for å velge produkter de ønsker å bestille, med mulighet for å angi antall.
3. **Bestillingsbekreftelse:** Etter innsendelse, en melding som bekrefter mottak av bestillingen.
4. **Validering av Skjemadata:** Sørge for at all innsendt informasjon er korrekt og fullstendig før bestillingen godtas.
5. **Responsive Design:** Sikre at siden fungerer godt på både mobile enheter og stasjonære datamaskiner.

---
## Tips til databasen
For å opprette en effektiv og funksjonell nettside som viser frem datakomponenter med beskrivelser, bilder og eventuelt videoer, kan du bruke en databasestruktur med flere tabeller som effektivt organiserer og relaterer dataene dine. Her er et forslag til en databasestruktur med tre til fire tabeller, komplett med fremmednøkler for å etablere relasjoner mellom tabellene:

1. **Produkter (Products)**
   - `produkt_id` (primærnøkkel)
   - `navn`
   - `beskrivelse`
   - `pris`
   - `kategori_id` (fremmednøkkel til Kategorier-tabellen)
   - `lagerstatus`

2. **Kategorier (Categories)**
   - `kategori_id` (primærnøkkel)
   - `kategori_navn`
   - `beskrivelse`

3. **Bilder (Images)**
   - `bilde_id` (primærnøkkel)
   - `produkt_id` (fremmednøkkel til Produkter-tabellen)
   - `bilde_url`
   - `alt_tekst` (alternativ tekst for tilgjengelighet)

4. **Videoer (Videos)** (valgfri, avhenger av om du trenger separat lagring for videoer)
   - `video_id` (primærnøkkel)
   - `produkt_id` (fremmednøkkel til Produkter-tabellen)
   - `video_url`
   - `beskrivelse`

Denne strukturen tillater deg å skille produktinformasjon, kategorier, bilder og videoer i forskjellige tabeller. Produkter-tabellen inneholder all grunnleggende informasjon om hvert produkt, inkludert en link (fremmednøkkel) til kategorien det tilhører. Kategorier-tabellen definerer ulike produktkategorier. Bilder- og Videoer-tabellene lar deg knytte flere bilder eller videoer til hvert produkt. 

*Tips:* Velg 3 produkter som har bilde, og 1 produkt som har video. Resten av produktene kan du hente bilde
fra picsum-nettsted.

## Mappestruktur
server.js i root-folder. public_html-mappe med index.html, script.js, style.css, bestilling.html og produkter.html. 
Assets-mappe i root-folder, images-mappe og videos-mappe i assets.

