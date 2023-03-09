// practicing some JavaScript


// adding a stock ticker to the nav bar
const apiKey = '4RGREOYM32L88V7L';
const symbol = 'AAPL'; // the stock symbol you want to display

fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // parse the data and display it in the HTML element
        const stockTickerElement = document.getElementById('stock-ticker');
        stockTickerElement.innerHTML = `${symbol}: $${data['Global Quote']['05. price']}`;
    })
    .catch(error => console.error(error));

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
    // this statement is basically a shorthand for an if-else statement
    // ? represents the if and : represents the else
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000);
}
showTime();

// random quote generator
var quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    }
];
// get the random quote
function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
// generate the quote
function generateQuote() {
    var quote = getRandomQuote();
    document.getElementById("quote").innerHTML = quote.text;
    document.getElementById("author").innerHTML = "- " + quote.author;
}
// when the window is loaded call the generateQuote function
window.onload = generateQuote();

// image slider
const myImage = document.getElementById("editimg");

// if you click on the image it changes to a dog
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/randomdude.jpg") {
        myImage.setAttribute("src", "./images/dog.jpeg");
    } else {
        myImage.setAttribute("src", "./images/randomdude.jpg");
    }
};


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