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

// go back to top button
const scrollToTopButton = document.getElementById("scroll-to-top");

// Show the button when the user scrolls down 20px from the top of the document


// div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

//div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

// div.removeAttribute('id');                                     
// removes specified attribute

// adding and manipualting elements with DOM
const container = document.querySelector('#container');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm red!";

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.appendChild(redParagraph);
div.appedChild(blueH3);

// a special random button
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}