"""Svare helt til det er riktig"""
spm = "Hva heter Norges konge?"
svar = input(spm)

while svar != "Harald":  # Så lenge svaret ikke er Harald
    print("Feil. Prøv igjen")
    spm = "Hva heter Norges konge?"
    svar = input(spm)
    
print("Riktig")