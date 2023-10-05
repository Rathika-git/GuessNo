//live class exercise to collect user name and get input from the user via prompt
//First Method//
let guessNo = 5;
let userName,userInput,userGuess;
userName = prompt("Hey, what's your name?");

if (userName !== null && userName !== "") {
    userInput = prompt("Hey " + userName + ", guess your number:", "0");

    if (userInput !== null) {
        userGuess = Number(userInput);

        while (userGuess !== guessNo) {
            alert("Not a Guess!!!");
            userInput = prompt("Hey " + userName + ", guess your number again:", "0");

            if (userInput === null) {
                break; 
            }

            userGuess = Number(userInput);
        }

        if (userGuess === guessNo) {
            alert("Hey " + userName + "!! Superbbb!!!\nCorrect Guess: " + guessNo); 
        }
    }
} else {
    alert("Please enter a valid name!");
}

//Second Method//
/*let guessNo = 5;
let userName,userInput,userGuess;
userName = prompt("Hey, what's your name?", "");

if (userName !== null && userName !== "") {
    
    do {
        let userInput = prompt("Hey " + userName + ", guess your number:", "0");

        if (userInput === null) {
            break;
        }

        userGuess = Number(userInput);

        if (userGuess !== guessNo) {
            alert("Not a Guess!!!");
        }
    } while (userGuess !== guessNo);

    if (userGuess === guessNo) {
        alert("Hey " + userName + "!! Superbbb!!!\nCorrect Guess: " + guessNo);
    }
} else {
    alert("Please enter a valid name!");
}*/







