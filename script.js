let wins = 0; 
let loses = 0; 
let draws = 0;

function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
        draws++;
    } else if (user === 'paper') {
        result = "win";
        wins++;
    } else if (user === 'scissors') {
        result = "loses"; // Consider changing this to "loses" for correct spelling
        loses++;
    }

    let mymessage = "Computer chose rock, you " + result + "!" + 
        "\n\n" + wins + " wins" +
        "\n\n" + loses + " loses" +
        "\n\n" + draws + " draws";
    
    alert(mymessage);
    say(mymessage);
}

function say(themessage) {
    let msg = new SpeechSynthesisUtterance(themessage);
    speechSynthesis.speak(msg);
}

document.getElementById('rock').addEventListener('click', function() {
    play('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    play('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    play('scissors');
});
