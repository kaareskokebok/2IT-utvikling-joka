# Hotellbooking oppgave del 1 - array

### Kort informasjon
Hotell Alexandra har 5 rom. I begynnelsen bor jens på rom 1 (index 0),
arne bor på rom 4 (index 3) og de andre rommene er ledige.
Nettsiden skal kunne vise oversikt over rom og gjester, sjekke inn og 
sjekke ut.

### Datastruktur
For å holde styr på rommene og gjestene, brukes et array. Et ledig rom betegnes
ved ´""´. I begynnelsen ser arrayet slik ut:

`let rommene = ["jens","","","arne",""];``

### Steg 1: oversiktsfunksjon
Lag en oversiktsfunksjon med en knapp i HTML.
Utseendet på utskriften skal være:

> Rom 1: jens
> Rom 2: ledig
> Rom 3: ledig
> osv...

### Steg 2: booking
Legg til mulighet for å booke rom med navn. Gjesten skal plasseres
på første ledige rom. Hvis ingen rom er ledige, gis feilmelding.

### Steg 3: utsjekk
Legg til utsjekk. Navn og romnr må oppgis, og stemme overens 
med informasjonen i rommene-arrayet. 
