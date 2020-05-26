var firstdice = Math.random();
var seconddice = Math.random();
firstdice = firstdice * 6;
seconddice = seconddice * 6;
firstdice = Math.floor(firstdice) + 1;
seconddice = Math.floor(seconddice) + 1;
document.querySelector("img.img1").setAttribute("src", "images/dice" + firstdice + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + seconddice + ".png");
if (firstdice > seconddice) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins ";
} else if (seconddice > firstdice) {
  document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw 🤣🤣";
}
