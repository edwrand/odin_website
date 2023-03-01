// test page which will only be linked to js_test_page.html

// rock paper scissors game in console
let answers = ["rock",
    "paper",
    "scissors"];

// global variables
gamenumber = 0;
let userflag = 0;
let computerflag = 0;

while (userflag < 5 || computerflag < 5) {
    gamenumber += 1;
    function getComputerChoice() {
        let index = Math.floor(Math.random() * answers.length);
        return answers[index];
    }

    console.log(getComputerChoice() + " is the computer's choice")

    function playerChoice() {
        let playerChoice = prompt("Please enter your choice: ");
        if (playerChoice == null || playerChoice == "") {
            console.log("You didn't enter anything!")
        }
        // adding an ability to exit the game
        elseif(playerChoice == 'exit') {
            clear
        }
        console.log(playerChoice + " is your choice")
        return playerChoice;
    }

    function playGame(getComputerChoice, playerChoice) {
        if (getComputerChoice === playerChoice) {
            console.log("It's a tie!")
            return "It's a tie!";
        } else if (getComputerChoice === "rock" && playerChoice === "paper") {
            console.log("You win!")
            userflag += 1;
            return "You win!";
        } else if (getComputerChoice === "rock" && playerChoice === "scissors") {
            console.log("You lose! Computer wins!")
            computerflag += 1;
            return "You lose!";
        } else if (getComputerChoice === "paper" && playerChoice === "rock") {
            console.log("You lose! Computer wins!")
            computerflag += 1;
            return "You lose!";
        } else if (getComputerChoice === "paper" && playerChoice === "scissors") {
            console.log("You win!")
            userflag += 1;
            return "You win!";
        } else if (getComputerChoice === "scissors" && playerChoice === "rock") {
            console.log("You win!")
            userflag += 1;
            return "You win!";
        } else if (getComputerChoice === "scissors" && playerChoice === "paper") {
            console.log("You lose!")
            computerflag += 1;
            return "You lose!";
        }
    }

    function game() {
        let playerSelection = playerChoice();
        let computerSelection = getComputerChoice();
        return playGame(computerSelection, playerSelection);
    }

    game();
    let computerscore = computerflag;
    let userscore = userflag;
    console.log("The computer has " + computerscore + " points and you have " + userscore + " points.")
}