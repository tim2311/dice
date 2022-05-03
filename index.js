// Randomly generate dice 1.
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Randomly generate dice 2.
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Display winner or draw result.
var result = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  result = result.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  result = result.innerHTML = "Player 2 Wins!";
} else {
  result = result.innerHTML = "Draw!";
}
