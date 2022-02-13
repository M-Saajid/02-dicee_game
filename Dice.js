let playerOne = prompt("Enter Player 1 Name ");
let playerTwo = prompt("Enter Player 2 Name");
document.getElementById("btn").addEventListener("click", PlayerName);
function PlayerName() {
  document.getElementById("Plyr1").innerHTML = playerOne;
  document.getElementById("Plyr2").innerHTML = playerTwo;

  const playeroneDice = Math.floor(Math.random() * 6) + 1;
  const playertwoDice = Math.floor(Math.random() * 6) + 1;

  get_Players(playeroneDice, playertwoDice);
  get_Results(playeroneDice, playertwoDice);
}

function get_Players(playeroneDice, playertwoDice) {
  let playeroneDiceImage = "images/dice" + playeroneDice + ".png";
  let playertwoDiceImage = "images/dice" + playertwoDice + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", playeroneDiceImage);
  document.querySelectorAll("img")[1].setAttribute("src", playertwoDiceImage);
}

function get_Results(valueOne, valueTwo) {
  if (valueOne > valueTwo) {
    document.getElementById("title").innerHTML = playerOne + " Wins";
  } else if (valueOne == valueTwo) {
    document.getElementById("title").innerHTML = " Draw";
  } else {
    document.getElementById("title").innerHTML = playerTwo + " Wins";
  }
}
