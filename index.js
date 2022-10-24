var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var diceImage1 = document.querySelector("img.img1");
var diceImage2 = document.querySelector("img.img2");

diceImage1.setAttribute("src", randomDiceImage1);
diceImage2.setAttribute("src", randomDiceImage2);


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
