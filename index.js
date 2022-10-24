var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

var diceImage1 = document.querySelector("img.img1");
var diceImage2 = document.querySelector("img.img2");


// Roll Dice 1

if (randomNumber1 === 1) {
    diceImage1.setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 === 2) {
    diceImage1.setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3) {
    diceImage1.setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4) {
    diceImage1.setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5) {
    diceImage1.setAttribute("src", "images/dice5.png");
}
else {
    diceImage1.setAttribute("src", "images/dice6.png");
}


// Roll Dice 2

if (randomNumber2 === 1) {
    diceImage2.setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 === 2) {
    diceImage2.setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3) {
    diceImage2.setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4) {
    diceImage2.setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5) {
    diceImage2.setAttribute("src", "images/dice5.png");
}
else {
    diceImage2.setAttribute("src", "images/dice6.png");
}


// Who wins?

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h2").innerHTML = "Draw! Roll again!";
}