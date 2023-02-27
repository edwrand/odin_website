// test page which will only be linked to js_test_page.html


let answers = ["rock",
    "paper",
    "scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * answers.length);
    return answers[index];
}

console.log(getComputerChoice())

console.log("Why is this not working?")