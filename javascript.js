// practicing some JavaScript

// 
var button = document.getElementById("myButton");
button.addEventListener("mouseover", function () {
    button.style.fontSize = "30px";
    button.style.backgroundColor = "green";
});
button.addEventListener("mouseout", function () {
    button.style.fontSize = "16px";
    button.style.backgroundColor = "black";
});

// clock in javaScript
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000);
}
showTime();


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

// example of callback function
function myEventHandler(event) {
    // do something, probably with 'event'
}

const element = document.querySelector("#myId");
element.addEventListener('click', myEventHandler);

// another example of callback function
btn1.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});