"""Innlogging/utlogging meny.
Programmet skal skrive ut en meny med 3 valg:
Logge inn
Logge ut
Avslutt
"""
_bruker = "per123"
er_innlogget = False
meny = """
Velkommen til Inges Innloggingssystem.
Gjør et valg:
1 - Logge inn
2 - Logge ut
3 - Avslutte
"""

while True:
    # Skrive ut meny
    print(meny)
    # Ta imot brukervalg
    valg = input("Ditt valg (1-2-3): ")
    # Behandle valget
    if valg == "1":  # Login
        bruker = input("Oppgi brukernavn: ")
        if er_innlogget:
            print("Du er allerede innlogget.")
        elif bruker == _bruker:
            print("Du er logget inn.")
            er_innlogget = True
        else:
            print("Feil brukernavn. Prøv igjen.")
    # Logge ut        
    elif valg == "2":
        if not er_innlogget:
            print("Du er ikke logget inn.")
        elif er_innlogget:  # er_innlogget == True
            print("Du er nå logget ut.")
            er_innlogget = False
    # Avslutt
    elif valg == "3":
        print("Morna")
        break
    input("Trykk ENTER for å gå tilbake til menyen.")