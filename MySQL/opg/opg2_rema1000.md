# Oppgaver: Slå opp i tabell og endre tabell

### Grunnleggende SELECT og WHERE
1. Velg alle kolonner fra `varer` tabellen.
2. Velg `varenavn` og `pris` for alle varer.
3. Finn alle `tørrvare` i tabellen.
4. Velg alle varer hvor `beholdning` er større enn 10.
5. Finn alle `ferskvare` med en pris lavere enn 50.00.

### Bruk av ORDER BY og LIMIT
6. Velg alle varer sortert etter pris i stigende rekkefølge.
7. Velg topp 5 dyreste varene.
8. Finn de tre billigste `kjølevarene`.
9. Vis alle `tørrvarer` sortert etter navn i synkende rekkefølge.
10. Finn de 10 varene med størst beholdning.

### Kombinere WHERE med AND, OR, og NOT
11. Finn alle varer som er enten `tørrvare` eller `ferskvare`.
12. Velg varer som har en beholdning på over 20 og en pris under 30.00.
13. Finn alle `kjølevare` som ikke koster mer enn 100.00.
14. Velg varer som har `beholdning` mindre enn 50 eller pris over 200.00.
15. Finn alle `tørrvare` som ikke er priset til 0.0.

### Bruk av UPDATE og DELETE
16. Oppdater pris for alle `kjølevare` til 75.00.
17. Slett alle varer med en beholdning på 0.
18. Øk pris med 10.00 for alle `ferskvare`.
19. Reduser beholdning med 5 for varer med pris over 100.00.
20. Slett fra tabellen alle varer som er `tørrvare` og har en pris under 20.00.

### Avanserte oppgaver med AGGREGAT FUNKSJONER (MIN, MAX) og mer
21. Finn maksimal pris for `kjølevare`.
22. Vis minimal beholdning for `ferskvare`.
23. Beregn gjennomsnittsprisen for alle varer.
24. Finn totalt antall `tørrvare` i databasen.
25. Vis antall varer for hver varetype.

### Kombinerte og Komplekse Forespørsler
26. Velg varetype og minimum pris for hver varetype.
27. Finn varetypen med høyest gjennomsnittspris.
28. Velg de tre varetypene og deres gjennomsnittlige beholdning.
29. List opp alle `kjølevare` og `ferskvare` med en pris høyere enn gjennomsnittsprisen for alle varer.
30. Finn varetypen med flest varer og vis gjennomsnittsprisen for denne typen.
