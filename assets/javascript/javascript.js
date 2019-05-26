var options = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
    toLowerCase();

    console.log(userGuess);

    var computerGuess = options[Math.floor(Math.random() * options.length)];

    console.log(computerGuess);

    if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
        if ((userGuess == 'r') && (computerGuess == 's')) {
            wins++;
            alert("Wins: " + wins);
        }
        if ((userGuess == 'r') && (computerGuess == 'p')) {
            losses++;
            alert("Losses: " + losses);
        }
        if ((userGuess == 'p') && (computerGuess == 'r')) {
            wins++;
            alert("Wins: " + wins);
        }
        if ((userGuess == 'p') && (computerGuess == 's')) {
            losses++;
            alert("Losses: " + losses);
        }
        if ((userGuess == 's') && (computerGuess == 'p')) {
            wins++;
            alert("Wins: " + wins);
        }
        if ((userGuess == 's') && (computerGuess == 'r')) {
            losses++;
            alert("Losses: " + losses);
        }
        if ((userGuess === computerGuess)) {
            ties++;
            alert("Ties: " + ties);
        }
    } else {
        alert("Please choose r, p, or s");
    }

    var html = "<p>SCOREBOARD</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Ties: " + ties + "</p>";

    document.querySelector("#game").innerHTML = html;
}