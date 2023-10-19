Kjære elev,

Vi skal nå utvide en grunnleggende hotellbestillingsnettside ved å legge til mer funksjonalitet og stil. Følg instruksjonene nedenfor nøye.

### Trinn 1: Utvide HTML-innholdet

1. **Legge til et hotellbilde:**
   - Finn et attraktivt hotellbilde og lagre det i mappen der du har nettsidefilene dine.
   - Inkluder bildet på nettsiden din ved hjelp av `<img>`-taggen. Plasser denne rett under `<h3>Prisliste</h3>` som dette:
     ```html
     <img src="sti_til_ditt_bilde.jpg" alt="Bilde av vårt hotell" style="width:100%; max-width: 500px;">
     ```

2. **Opprette en liste over fasiliteter:**
   - Under hotellbildet, la oss informere gjestene om hva hotellet tilbyr. Lag en ny overskrift og en liste som dette:
     ```html
     <h3>Fasiliteter ved hotellet</h3>
     <ul>
       <li>Gratis Wi-Fi</li>
       <li>24-timers resepsjon</li>
       <li>Stort basseng</li>
       <li>SPA-senter</li>
       <!-- Fortsett å legge til så mange fasiliteter som du ønsker -->
     </ul>
     ```

### Trinn 2: Forbedre siden med CSS

- Nå skal vi gjøre siden penere! Du kan enten legge til stilene i `<style>`-taggen i `<head>` eller opprette en ny CSS-fil og lenke den til HTML-dokumentet ditt.
- Her er noen ideer: endre bakgrunnsfargen, forbedre tekstens utseende, legge til mellomrom rundt elementene dine, osv. La kreativiteten din flyte!

### Trinn 3: Legge til funksjonalitet med JavaScript

1. **Beregning av totalprisen:**
   - Først trenger vi å vite hvilken romtype kunden ønsker. I `book`-funksjonen din, finn ut hvilken romtype som er valgt og husk prisen for dette rommet.
   - Her er et eksempel på hvordan du kan gjøre det:
     ```javascript
     let valgtRom = document.querySelector('input[name="romtype"]:checked').value;
     let prisPerNatt;
     if (valgtRom === 'standard') {
        prisPerNatt = 1790;
     } else if (valgtRom === 'deluxe') {
        prisPerNatt = 2890;
     } else {
        prisPerNatt = 12390;
     }
     ```

2. **Beregn og vis totalprisen:**
   - Nå, multipliser antall dager med prisen per natt for å få totalprisen.
   - Lag en melding som forteller brukeren detaljene om deres booking. Du kan vise dette med en alert-boks, eller kanskje du foretrekker å legge det direkte på nettsiden for en bedre brukeropplevelse!

Eksempel:
```javascript
let totalPris = antallDager * prisPerNatt;
let bekreftelse = `Takk for din bestilling! Du har valgt et ${valgtRom} rom for ${antallDager} netter. Totalprisen blir ${totalPris},-`;
alert(bekreftelse);
```

### Trinn 4: Test nettsiden din

- Etter at du har lagt til alt dette, er det viktig å teste. Sørg for at alle elementene lastes riktig, at beregningene er korrekte, og at meldingen viser riktig informasjon.

### Trinn 5: Ekstra utfordring (hvis du vil gå videre)

- Føler du deg eventyrlysten? Animasjoner når noe endres på siden? Det er din nettside; gjør den spennende!

Lykke til med kodingen! Husk, det beste nettstedet er det som ikke bare ser bra ut, men også fungerer feilfritt. Så test godt og la kreativiteten din skinne!
