# Handout: Bruk av GitHub og VS Code for versjonskontroll

## Del 2: Arbeide med GitHub og VS Code

### Forberedelser:
1. Installer Git på datamaskinen din: Gå til [Git Downloads](https://git-scm.com/downloads) og last ned versjonen som passer for ditt operativsystem. Følg installasjonsveiledningen.
2. Installer Visual Studio Code (VS Code): Besøk [VS Code download page](https://code.visualstudio.com/download) og last ned installasjonsfilen. Følg installasjonsinstruksjonene.

### Steg 1: Konfigurer Git i VS Code
1. Åpne VS Code.
2. Åpne en ny terminal i VS Code ved å gå til "Terminal" -> "New Terminal".
3. Konfigurer Git med ditt brukernavn og e-post ved å skrive følgende kommandoer i terminalen (erstatt med dine egne detaljer):
    ```sh
    git config --global user.name "Ditt Navn"
    git config --global user.email "din@email.com"
    ```

### Steg 2: Opprette og klone et nytt repository
1. Gå til [GitHub](https://github.com/) og logg inn.
2. Opprett en ny repository ved å klikke "New".
3. Navngi repository-en (for eksempel "mitt-webprosjekt") og la den være offentlig. Initialiser med en README-fil.
4. Etter opprettelsen, finn "Code"-knappen, klikk på den og kopier URL-en til ditt repository.
5. Gå tilbake til VS Code, åpne terminalen, og skriv følgende kommando for å klone repository-en (erstatt med URL-en du kopierte):
    ```sh
    git clone <URL-til-repository>
    ```
6. Naviger til den klonede mappen i VS Code.

### Steg 3: Opprette og publisere en HTML-fil
1. I VS Code, opprett en ny fil i prosjektmappe, og kall den `index.html`.
2. Skriv grunnleggende HTML-struktur med en `<h1>`-tagg som sier "Git er skit".
3. Åpne terminalen i VS Code og skriv følgende kommandoer for å legge til endringene dine i Git og sende dem til GitHub:
    ```sh
    git add .
    git commit -m "Min første nettside"
    git push
    ```

### Steg 4: Gjøre endringer lokalt og på GitHub
1. Gå til ditt GitHub-repository i nettleseren og åpne `index.html`.
2. Gjør en endring i koden (for eksempel, legg til et avsnitt med tekst) og commit endringen.
3. I VS Code, gjør en annen endring i `index.html` (legg til en annen tekst eller element).
4. I terminalen i VS Code, skriv følgende kommando for å hente de nyeste endringene fra GitHub:
    ```sh
    git pull
    ```
5. Løs eventuelle konflikter mellom din lokale kode og koden på GitHub.
6. Etter å ha løst konfliktene, publiser endringene dine med:
    ```sh
    git add .
    git commit -m "Integrerte endringer fra GitHub"
    git push
    ```

### Steg 5: Samarbeid om et prosjekt
1. En av studentene oppretter et nytt repository på GitHub og de andre kloner det ned.
2. Diskuter og fordel arbeidsoppgaver (hvilke deler av en nettside hver student skal utvikle).
3. Hver student utvikler sin del og committer endringer hyppig med klare commit-meldinger.
4. Før du pusher dine endringer, sørg alltid for å hente de nyeste versjonene av koden med `git pull` for å unngå konflikter.
5. Etter å ha trukket, push endringene dine til GitHub.
6. Gjennomgå endringene fra andre, og samarbeid om å løse eventuelle konflikter i koden.

Husk: Kommunikasjon er nøkkelen når flere personer jobber på samme prosjekt. Diskuter endringer, åpne problemer for diskusjon på GitHub, og vær konsekvent med commit-meldinger.
