# Oppgavesett 1: Forms

## Alle oppgaver skal løses ved bruk av `<form>`-elementet.

### Oppgave 1: "Din favoritthøstdag"
- **Inndata:**
  - Tekstfelt for brukerens navn (input type="text").
  - Dato-felt for å velge deres favorittdato i høst (input type="date").
- **Funksjonalitet:** 
  - Når brukeren sender inn skjemaet, vis en melding som sier "Hei [navn]! Din favoritthøstdag er [dato].".

### Oppgave 2: "Høstaktiviteter"
- **Inndata:**
  - Tekstfelt for aktivitetsnavn (input type="text").
  - Nedtrekksliste for å velge type aktivitet (select-element med for eksempel "Hiking", "Picking Berries", "Fishing").
- **Funksjonalitet:** 
  - Ved innsending, vis en melding: "[Aktivitetsnavn] er en flott høstaktivitet for deg som liker [valgt type aktivitet]."

### Oppgave 3: "Høstværet"
- **Inndata:**
  - Nummerfelt for temperatur (input type="number").
  - Tekstfelt for sted (input type="text").
  - Checkbox for om det regner (input type="checkbox").
- **Funksjonalitet:** 
  - Vis en passende melding basert på inndata, for eksempel: "I [sted] er temperaturen [temperatur] grader, og det er [ikke] regn."

### Oppgave 4: "Høstmat"
- **Inndata:**
  - Tekstfelt for brukerens navn (input type="text").
  - E-postfelt (input type="email").
  - Radioknapper for å velge favoritthøstmat (for eksempel "Pumpkin Pie", "Apple Cider").
- **Funksjonalitet:** 
  - Send en bekreftelse til skjerm som sier "Takk, [navn]! En e-postbekreftelse er sendt til [e-post] for ditt valg av [valgt mat]."

### Oppgave 5: "Høstbilder"
- **Inndata:**
  - Filopplastingsfelt for bilde (input type="file").
  - Tekstfelt for bildetittel (input type="text").
  - Tekstområde for bildets beskrivelse (textarea).
- **Funksjonalitet:** 
  - Når bildet er lastet opp, vis en forhåndsvisning av bildet, sammen med tittelen og beskrivelsen.

### Oppgave 6: "Høstfestival"
- **Inndata:**
  - Tekstfelt for festivalnavn (input type="text").
  - Dato-felt for festivaldato (input type="date").
  - Tidspunkt for start og slutt (to input type="time"-felt).
  - Tekstområde for ytterligere informasjon (textarea).
- **Funksjonalitet:** 
  - Samle all informasjon og vis en "Festivalplan" på skjermen.

### Oppgave 7: "Kontaktinformasjon for høsteventyr"
- **Inndata:**
  - Tekstfelt for navn (input type="text").
  - Telefonnummerfelt (input type="tel") - brukere skal bruke RegExp for å bekrefte et norsk telefonnummer.
  - E-postfelt (input type="email").
- **Funksjonalitet:** 
  - Bekreft at telefonnummeret er et gyldig norsk nummer (format: 12345678) ved bruk av RegExp.
  - Når brukeren sender, vis en melding som bekrefter at informasjonen er mottatt og gyldig.

For alle oppgavene, sørg for å inkludere feilhåndtering og tilbakemeldinger for brukeren basert på inndataene de sender inn. For eksempel, hvis et felt er obligatorisk og ikke fylt ut, bør en passende melding vises. Oppmuntre elevene til å bruke kreativitet i design og brukergrensesnitt for å gjøre sidene tiltalende og tematisk passende.