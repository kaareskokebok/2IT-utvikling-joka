# Hvordan kjøre prosjektet
- Last ned `server.js` og alle filene i mappa `public_html`.
- Kopier koden fra `sqlkode-db.sql` og lim denne inn i MySql Workbench.
- Kjør sql-koden for å lage databasen.
- Lag en mappe `dyrepark` på din PC. Plasser `server.js` der.
- Plasser `public_html` i `dyrepark` med filene `index.html` og `script.js`.
- Åpne mappa `dyrepark` i VS Code.
- I terminalen skriver du `npm install express`, deretter `npm install mysql`.
- Åpne `server.js`. Endre database-tilkoblingens brukernavn og passord.
- I terminalen skriver du `node server.js` for å kjøre node-serveren. Du skal da se alle dyrene.
