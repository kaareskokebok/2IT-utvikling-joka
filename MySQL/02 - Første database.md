# Lag første database i MySQL

- Åpne MySQL workbench
- Åpne MySQL connection (local host)
- I Query-vinduet, skriv `CREATE DATABASE myDB;`, der `myDB` er navnet på databasen
- Trykk på lyn-ikonet for å utføre kodelinjen i query-vinduet. 
- Se Output-fanen for å se resultatet. Se også under "Schemas", og trykk "Update"-knappen for å se "myDB".
- Høyre-klikk myDB og velg "Set as Default Schema" eller i query skriv "use myDB" (slett tidligere kode i query-panelet)

### Beskytt databasen
- I query skriv `ALTER DATABASE myDB READ ONLY = 1`, nå er den satt til read only. Tallet 0 fjerner read only.

### Lag første tabell
- I query skriv følgende, og trykk lynet for å "execute script":
  
```
CREATE TABLE ansatte (
    ansatt_id INT,
    fornavn VARCHAR(50),
    etternavn VARCHAR(50),
    timelonn DECIMAL(5, 2),
    dato_ansatt DATE
    )
```

- Trykk refresh, deretter finner du ansatte under "Tables" i "myDB"

- Skriv `SELECT * FROM ansatte`. Kolonne-overskrifter dukker opp, men ingen rader vises foreløpig

- Lag første raden slik: I query-fanen, skriv følgende:

```
INSERT INTO ansatte
VALUES (1001, "Arne", "Jensen", 126.70, "2022-05-02");
```

- Kjør deretter koden `SELECT * FROM ansatte` for å se tabellen
- Kjør følgende kode for å legge til 4 ansatte til:

```
INSERT INTO ansatte VALUES 
(1002, 'Bente', 'Larsen', 134.50, '2022-06-01'),
(1003, 'Kari', 'Olsen', 142.30, '2022-07-10'),
(1004, 'Per', 'Nilsen', 150.00, '2022-08-15'),
(1005, 'Line', 'Hansen', 157.75, '2022-09-20');
```
- Til slutt kjør `SELECT * FROM ansatte` for å se tabellen.
