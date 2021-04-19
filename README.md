Readme for Rock Paper Scissors java program 


Hello community, sorry for bothering with such absolute beginners questions. Can anybody explain me why my code does not work and what I am doing wrong? 
I try to pass the resulty out of two functions I have written
1) Function playersPlay which is returning "playersSelection"
2) Funtion computerSpielt which is returning "zufallWahl"
With funtion playGame I would like to to make the assesment and define the winner of the game
Sorry, but it would be great if someone could point me into the right direction. Thanks a lot!
```js
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
       //playersSelection = playersSelection.toUpperCase();
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
   
   //zufallWahl = zufallWahl.toUpperCase();
   return zufallWahl;
}

console.log("Der Computer hat " + (computerSpielt() + " gewählt"));

// Assesment and defining the winner
function playGame(playersSelection, zufallWahl) {

   if (playersSelection == "rock" && zufallWahl == "paper") {
      console.log("You lose");
 }
};
playGame(playersSelection, zufallWahl);

