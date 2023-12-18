# Hotellbooking Oppgave Del 2 - Objekter

## Innføring
Etter å ha lært grunnleggende om arrayer og hvordan man bruker dem til å håndtere hotellbookinger, skal vi nå ta steget videre og benytte objekter for å representere rom og gjester ved Hotell Alexandra.

## Oppgavebeskrivelse

### Del 1: Definer Objektstrukturer

Vi begynner med to arrays: ett for rom og ett for gjester. Hvert rom og hver gjest representeres som et objekt.

#### Romobjekter
- Hvert romobjekt skal inneholde egenskaper som romnummer, status (ledig, opptatt, rengjøring, utilgjengelig) 
pris per natt og type rom (enkeltrom, dobbeltrom, junior suite, suite)

#### Gjesteobjekter
- Hvert gjesteobjekt skal inneholde informasjon som gjestens navn og romnummeret de er tildelt. De skal være fornavn
etternavn, alder, epost og romnr.

### Del 2: Opprett Arrays

Du starter med følgende objekter:

```javascript
let rommene = [
    { romNr: 1, status: "opptatt", type:"enkeltrom", pris:2270 },
    { romNr: 2, status: "ledig", type:"junior suite", pris:5460 },
    { romNr: 3, status: "rengjøring", type:"dobbeltrom", pris:2870 }
];

let gjestene = [
    { fornavn: "Jens", etternavn: "Jensen", alder:48, epost: "jens@mail.no", romNr: 1 },
    { fornavn: "Arne", etternavn: "Persen", alder:35, epost: "arne@mail.no", romNr: 4 }
];
```

Din oppgave er å utvide disse arrayene:
- `rommene` bør inneholde totalt 15 rom.
- `gjestene` bør inneholde totalt 6 gjester.

### Del 3: Utvid Arrays

Bruk ChatGPT til å hjelpe deg med å legge til flere rom og gjester i arrayene. 
Husk å følge strukturen som er gitt i de opprinnelige objektene.

### Del 4: Implementer Funksjoner

1. **Oversiktsfunksjon**: Skriv en funksjon som viser en oversikt over alle rom og deres status, samt hvilke gjester som er tildelt hvert rom.

2. **Bookingfunksjon**: Skriv en funksjon for å booke et rom. Denne funksjonen skal finne det første ledige rommet og tildele det til en gjest.

3. **Utsjekkingsfunksjon**: Skriv en funksjon for å sjekke ut en gjest. Denne funksjonen skal oppdatere rommets status til 'ledig' og fjerne gjestens informasjon.

### Del 5: Utforskning og Utvidelse

Etter at du har fullført de grunnleggende funksjonene, utforsk muligheter for å legge til mer funksjonalitet, som å håndtere spesielle forespørsler, oppdatere rompriser, eller legge til ulike romtyper.
