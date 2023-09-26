## Oppgave: Bestillingsnettsted for McDonald's

Du skal lage en enkel nettside hvor brukere kan bestille enten en Big Mac eller en McFeast fra McDonald's. Nettstedet skal også tillate brukeren å velge om de vil ha en meny med burgeren, samt antall burgere de vil bestille. Hver 5. kunde som bestiller får en gratis is som en spesiell kampanje!

### Kravspesifikasjon:

1. **Layout og design (HTML og CSS)**
    - Nettstedet skal ha en overskrift som sier "McDonald's Bestillingsnettsted".
    - Det skal være to radioknapper, én for Big Mac og én for McFeast, slik at brukeren kan velge hvilken burger de vil ha.
    - Det skal være en avkrysningsboks hvor brukeren kan velge om de vil ha en meny med burgeren.
    - Det skal være et inputfelt hvor brukeren kan velge antall burgere de vil bestille (kun hele tall).
    - Det skal være en knapp som sier "Bestill nå". Når denne knappen trykkes på, skal nettsiden beregne totalprisen og informere brukeren om bestillingen deres.

2. **Funksjonalitet (JavaScript)**
    - Når brukeren trykker på "Bestill nå"-knappen, skal nettsiden beregne totalprisen basert på valgt burger, om det er en meny og antall burgere.
    - Hver 5. kunde som bestiller skal få en melding som sier "Gratulerer! Du får en gratis is med din bestilling!"
    - Bruk variabler for å holde styr på priser og antall kunder som har bestilt.
    - Bruk `if`, `else if` og `else` for å bestemme hvilke meldinger og priser som skal vises til brukeren.
    - Bruk funksjoner som blir trigget når brukeren trykker på "Bestill nå"-knappen.

### Veiledende priser (kan endres etter behov):
- Big Mac: 50 kr
- McFeast: 55 kr
- Menytillegg: 30 kr

### Eksempel på funksjonalitet:

1. En bruker velger Big Mac, velger å ha en meny, og ønsker å bestille 3 burgere.
2. Når de trykker på "Bestill nå", skal nettsiden beregne totalprisen som følger: \(3 \times (50 + 30)\) og vise "Din totalpris er 240 kr".
3. Hvis denne brukeren er den 5. som bestiller, skal de også få meldingen "Gratulerer! Du får en gratis is med din bestilling!"

Lykke til!
