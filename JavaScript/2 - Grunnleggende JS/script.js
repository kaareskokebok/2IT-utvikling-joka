function spark(){
    if (Math.random() < 0.70){
     txtUt.textContent = "MÅL!";
     // Øk maal med 1
     maal += 1;
     } else{
     txtUt.textContent = "Du bomma!";
     }
     skudd += 1;
     treffrate = (maal / skudd) * 100;
     txtUt.innerHTML += `<br>Antall mål: ${maal}`;
     txtUt.innerHTML += `<br>Antall skudd: ${skudd}`;
     txtUt.innerHTML += `<br>Treffraten: ${treffrate.toFixed(0)} %`;

     // Oppdater søyler
     oppdaterSoyler();
 }
 function oppdaterSoyler(){
    let w_maal = `${40+2*maal}px`;
    let w_skudd = `${40+2*skudd}px`;
    soyleMaal.style.width = w_maal;
    soyleSkudd.style.width = w_skudd;
    // Oppdater tekst
    soyleSkuddTxt.textContent = `Skudd: ${skudd}`;
    soyleMaalTxt.textContent = `Mål: ${maal}`;
 }

 let txtUt = document.getElementById("txtUt");
 let soyleMaal = document.getElementById("soyleMaal");
 let soyleSkudd = document.getElementById("soyleSkudd");
 let soyleSkuddTxt = document.getElementById("soyleSkuddTxt");
 let soyleMaalTxt = document.getElementById("soyleMaalTxt");
 // TODO 2: Hold tellinga på antall mål.
 let maal = 0;
 // TODO 3: Hold tellinga på antall skudd totalt.
 let skudd = 0;
 // TODO 4: Vis treffraten (antall mål / antall skudd)
 let treffrate = 0;

 // Første gang nettsiden lastes inn.
txtUt.innerHTML = "";
txtUt.innerHTML += `<br>Antall mål: ${maal}`;
txtUt.innerHTML += `<br>Antall skudd: ${skudd}`;
txtUt.innerHTML += `<br>Treffraten: ${treffrate.toFixed(0)} %`;


 
 