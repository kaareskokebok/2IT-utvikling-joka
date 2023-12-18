# MySQL SELECT, UPDATE og DELETE

### SELECT
- Skriv i query 

> `SELECT fornavn FROM ansatte;`

Kjør koden. Nå ser du alle fornavnene

- Skriv i query: `SELECT fornavn, etternavn FROM ansatte;`. Dette gir både fornavn og etternavn.
- Prøv `SELECT ansatt_id, timelonn, dato_ansatt FROM ansatte;`

Forsøk gjerne flere varianter

#### SELECT og WHERE
Med WHERE kan du søke med betingelser. Prøv f.eks. disse
- Velge alle ansatte med timelonn høyere enn 140
```
SELECT * FROM ansatte 
WHERE timelonn > 140;
```

- Velge alle ansatte med fornavn Kari
```
SELECT * FROM ansatte 
WHERE fornavn = "Kari";
```

- Velge alle ansatte som ble ansatt før august 2022

```
SELECT * FROM ansatte 
WHERE dato_ansatt < "2022-08-01";
```

- Velge alle ansatte som ikke har id 1002

```
SELECT * FROM ansatte 
WHERE ansatt_id != 1002;
```
