/*Lets keep score! */ 
let win = 0; 
let lose =0; 
let draw =0;

function say(themessage){
    let msg = new SpeechSynthesisUtterance (themessage);
    speechSynthesis.speak(msg);

}

/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
        draws++;
    }
    if (user === 'paper') {
        result = "win";
        wins++;
    }
    if (user === 'scissors') {
        result = "lose";
        loses++
    }
    let mymessage("Computer chose rock, you " + result + "!" + 
    "\n\n" + wins + "wins" +
    "\n\n" + loses + "loses" +
    "\n\n" + draws + "draws" +
    );
    alert (mymessage)
    say  (mymessage)

}