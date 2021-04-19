console.log ("Hallo Player, let the game begin")



//Your hand

function playersPlay (playersSelection) {

 console.log("Please make a choice: Rock, Paper or Scissors")

    let auswahl = prompt ("Whats your choice dude? Rock, Paper or Scissors ")
    let arrayZeugs = ["rock", "paper", "scissors"];
    let result;
     

     auswahl = auswahl.toLowerCase(); // hier machen wir erstmal alles ganz klein!!!

     //jetzt sollten wir die Eingabe gegen den Inhalt des Arrays prüfen

     result = arrayZeugs.includes(auswahl);

     if (result == true) {

        console.log("Positiv")
        playersSelection = auswahl;
        playersSelection = playersSelection.toUpperCase();
        return playersSelection;

     } else {

        console.log("Deine Auswahl lässt kein weiteres Spiel zu")
        playersSelection = auswahl;
        return playersSelection;
     }

};
console.log("Deine Auswahl ist " + (playersPlay()));



// Computer Hand

function computerSpielt(zufallWahl) {

   zufallWahl =  ["rock", "paper", "scissors"];
   zufallWahl = zufallWahl[Math.floor(Math.random()*zufallWahl.length)];
   
   zufallWahl = zufallWahl.toUpperCase();
   return zufallWahl;
}

console.log("Der Computer hat " + (computerSpielt() + " gewählt"));

// Assesment and defining the winner


