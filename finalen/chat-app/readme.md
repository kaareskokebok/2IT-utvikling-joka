# Chat-app

## How to clone only this folder in 2IT-Utvikling repo
1. Create a new folder chat-app.
2. Open a terminal inside this folder.
3. Run the following code in your terminal:
```sh
git init
git remote add origin https://github.com/kaareskokebok/2IT-utvikling-joka.git
git config core.sparseCheckout true
echo "finalen/chat-app/" >> .git/info/sparse-checkout
git pull origin main
```

## Utviklingsstadier

### 1: En tråd, ingen brukere, anonym chat
Nettsiden har et input-felt der meldinger skrives inn. 
Når brukeren trykker ENTER, sendes meldingen til serveren, og vises
fram i tråden. Nyeste melding vises øverst. 

