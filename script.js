/*
Let's keep score! 
*/ 
let wins = 0; 
let loses = 0; 
let draws = 0;

function say(themessage) {
    let msg = new SpeechSynthesisUtterance(themessage);
    speechSynthesis.speak(msg);
}

/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choice win, lose, or tie vs ROCK? */
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
        result = "loses";
        loses++;
    }
    let mymessage = "Computer chose rock, you " + result + "!" + 
        "\n\n" + wins + " wins" +
        "\n\n" + loses + " loses" +
        "\n\n" + draws + " draws";
    alert(mymessage);
    say(mymessage);
}
