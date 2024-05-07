# Launch your node.js project to the internet for free

## Using ngrok
1. Install Chocolateley (a package manager for Windows).
2. Run a terminal as admin.
3. Run the command
```
choco install ngrok -y
```
4. Åpne terminalen i root-mappa til et fungerende node.js-prosjekt.
5. Skriv `npm i -g ngrok` i terminalen.
6. Finn auth-koden din på ngrok.com, når du lager en bruker der og logger deg inn.
7. Kjør koden `ngrok config add-authtoken 2cBZM..............................fd7krL`. Erstatt 2cBZM.. med din egen authtoken.
8. Skriv `npm i` for å installere moduler til prosjektet
9. Start node-serveren, f.eks. `node server.js`
10. Åpne en ny terminal og skriv `ngrok http http://localhost:3000` (dersom porten er 3000 i server.js)
11. I terminalen vil du se `Forwarding`, her er din lenke som er tilgjengelig over internett.

Gratulerer! Du er nå på nett med ditt Node.js-prosjekt!
