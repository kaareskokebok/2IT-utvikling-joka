# Kunstgalleri
En kunster legger ut sine malerier på Instagram, men trenger en landingsside for å vise fram alle maleriene sine, knytte kontakt med kunder og ta imot bestillinger.
## Bestillingsdokument for Kunstnerens Landingsside
**1. Introduksjon**
- **Formål:** Dokumentet beskriver funksjonelle krav og designkrav for utvikling av en landingsside for en hobbykunstner. Siden skal fungere som en plattform for å vise frem kunstverk, knytte kontakt med potensielle kunder og håndtere bestillinger og forespørsler.
- **Målgruppe:** Hobbykunstnere som ønsker å digitalisere sin kunstneriske tilstedeværelse.

**2. Funksjonelle Krav**
- **FR1: Bildevisning**
  - Brukere skal kunne bla gjennom en samling av kunstnerens bilder.
  - Bilder skal vises i en rutenett.
  - Bilder har tittel, pris og beskrivelse.
  
- **FR2: Forstørret Bildevisning**
  - Ved å klikke på et bilde skal brukere kunne se en større utgave av bildet.
  
- **FR3: Kontakt**
  - Siden skal inneholde et kontaktsskjema hvor potensielle kunder kan sende forespørsler direkte til kunstnerens Google-e-post.
  - Formularet skal minst inkludere felt for navn, e-postadresse, beskjed, og en send-knapp.
  
- **FR4: Bestillingsfunksjon**
  - Brukere skal kunne sende bestillinger eller forespørsler om spesifikke kunstverk gjennom en bestillingsknapp ved hvert bilde.
  - Bestillingsskjema skal inkludere felt for kundens navn, e-post, beskjed/detaljer om bestillingen, og en send-knapp.
  
- **FR5: Responsiv Design**
  - Nettstedet skal være responsivt og fungere godt på både datamaskiner, nettbrett og mobiltelefoner.

- **FR6: Sosiale Medier Integrering**
  - Integrering av sosiale medier-knapper (f.eks., Instagram) slik at brukere enkelt kan følge kunstneren på sosiale plattformer.

**3. Krav til Design**
- **DR1: Estetikk**
  - Designet skal være minimalistisk og estetisk tiltalende for å komplementere og fremheve kunstverkene.
  - Fargepaletten skal være nøytral med enkle, rene linjer for å ikke konkurrere med bildenes farger.

- **DR2: Navigasjon**
  - Enkel og intuitiv navigasjon med en klar og konsistent menystruktur.
  - Mulighet for å raskt navigere tilbake til hovedsiden eller hovedgalleriet fra enhver side på nettstedet.
  
- **DR3: Typografi**
  - Tydelig og lesbar typografi som passer til siden sin generelle design.
  - Tekststørrelser og fonter skal tilpasses ulike enheter for å sikre god lesbarhet.

- **DR4: Lastetider og Optimalisering**
  - Bilder skal optimaliseres for å sikre rask lastetid uten å ofre bildekvalitet.
  - Implementere lazy loading av bilder for bedre ytelse.

**4. Teknologivalg**
- **Frontend:** HTML5, CSS3, JavaScript 
- **Backend:** Node.js
- **Hosting:** ?.

**6. Budsjett og Ressurser**
- Overslag over totalkostnaden basert på estimerte arbeidstimer for design og utvikling, samt eventuelle eksterne kostnader som hosting = 45 000 kr.

## Utviklingssteg

1. Ren HTML.
2. Legg til CSS.
3. Legg til responsiv CSS.
4. Fiks forstørrelse av bilder ved trykk.
5. Fiks ta imot skjema og gi tilbakemelding (ny side, med mulighet for å gå tilbake til hovedsiden)
6. Fiks sending av epost ved skjemainnsending.
