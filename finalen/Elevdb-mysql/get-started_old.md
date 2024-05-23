### Del 1: Lage en enkel database med MySQL i Visual Studio Code

#### Steg 1: Installere nødvendige utvidelser
- Åpne Visual Studio Code.
- Installer utvidelsen "SQLTools" for å kunne koble til MySQL-databaser direkte fra VS Code.
- Installer MySQL Server på din maskin om det ikke allerede er installert.

#### Steg 2: Koble til MySQL-serveren
- Åpne SQLTools sidebaren (ved å klikke på SQLTools-ikonet i venstre sidebar).
- Klikk på "Add new connection".
- Velg MySQL som database-type og fyll inn nødvendige detaljer (host, port, brukernavn, passord).

#### Steg 3: Opprette en ny database og tabell
- Åpne en ny SQL-fil (File -> New File -> Velg SQL som filtype).
- Skriv følgende SQL-kommandoer for å opprette en database og en tabell:

```sql
-- Opprett en database
CREATE DATABASE skole;

-- Bruk den nye databasen
USE skole;

-- Opprett en tabell for elever
CREATE TABLE elever (
    id INT AUTO_INCREMENT PRIMARY KEY,
    navn VARCHAR(100) NOT NULL,
    alder INT NOT NULL
);
```

- Lagre filen med en passende navn (f.eks., `create_db.sql`).
- Kjør kommandoene ved å høyreklikke i SQL-filen og velge "Run Query".

### Del 2: Lage en MWE med Node.js, MySQL, Express og EJS

#### Steg 1: Opprett et nytt Node.js-prosjekt
- Åpne en terminal i Visual Studio Code.
- Naviger til ønsket prosjektmappe og kjør følgende kommandoer:

```bash
mkdir skoleapp
cd skoleapp
npm init -y
```

#### Steg 2: Installer nødvendige pakker
- Installer Express, MySQL og EJS, dotenv med følgende kommandoer:

```bash
npm install express mysql ejs dotenv
```

#### Steg 3: Opprett prosjektstrukturen
- Opprett følgende mapper og filer:

```
skoleapp/
├── public/
├── views/
│   └── index.ejs
├── app.js
```

#### Steg 4: Konfigurer app.js
- Åpne `app.js` og skriv følgende kode:

```javascript
import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
// Husk å endre type til module i package.json

const app = express();
const port = 3000;

// Koble til MySQL-databasen
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',  // Erstatt med ditt passord
    database: 'skole'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Sett opp EJS som view engine
app.set('view engine', 'ejs');

// Route for å hente og vise elever
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM elever';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('index', {
            elever: result
        });
    });
});

// Start serveren
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

#### Steg 5: Lag EJS-filen
- Åpne `views/index.ejs` og skriv følgende kode:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elever</title>
</head>
<body>
    <h1>Liste over elever</h1>
    <ul>
        <% elever.forEach(elev => { %>
            <li><%= elev.navn %> - <%= elev.alder %> år</li>
        <% }); %>
    </ul>
</body>
</html>
```

#### Steg 6: Kjør applikasjonen
- Åpne en terminal og kjør følgende kommando:

```bash
npx nodemon app.js
```

- Åpne en nettleser og gå til `http://localhost:3000` for å se listen over elever.

#### Steg 7: Plasser database-login i .env
- Installer dotenv modulen
- Lag .env filen, og lagre brukernavn og passord der.
- Hent data fra .env filen i `app.js`.