"""Uendelig loop. Plagsomt program"""
import time
while True:
    navn = input("Hva heter du? ")
    print(f"Hei {navn}. Jeg liker deg.\n")  # \n gir linjeskift
    time.sleep(1)  # Sov 1 sekund