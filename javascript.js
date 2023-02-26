// practicing some JavaScript

console.log("this is workiing?")

//date time box
const poopy = 47
let poopies = 48


// more practice 
// if (condition)

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

// function practice
function add7(number) {
    return number + 7
}

function multiply(number1, number2) {
    return number1 * number2
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function lastLetter(string) {
    return string.charAt(string.length - 1)
}
console.log(lastLetter("hello"))

// fizbuzz

//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}