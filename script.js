let movesLeft = 8;
let gameOn = true;
let treasureChest = Math.floor(Math.random() * 24);
let bomb = Math.floor(Math.random() * 24);
while (treasureChest === bomb) {
  bomb = Math.floor(Math.random() * 24);
}

function treasure(location) {
  if (gameOn === true) {
    if (document.getElementById(location).innerHTML === "?") {
      movesLeft = movesLeft - 1;
    }
    if (location === treasureChest) {
      document.getElementById(location).innerHTML = "💰";
      document.getElementById("movesLeft").innerHTML = "You Win!";
      alert("You found the treasure!");
      end();
    } else if (location === bomb) {
      document.getElementById(location).innerHTML = "💣";
      document.getElementById("movesLeft").innerHTML = "You Lose";
      alert("You lose..");
      end();
    } else if (movesLeft <= 0) {
      alert("You ran out of plays, try again!");
      document.getElementById("movesLeft").innerHTML =
        "Moves left: " + movesLeft;
      end();
    } else {
      document.getElementById(location).innerHTML = "🌵";
      document.getElementById("movesLeft").innerHTML =
        "Moves Left: " + movesLeft;
    }
  }
}

function reset() {
  for (var i = 0; i < 25; i++) {
    document.getElementById(i).innerHTML = "?";
  }

  treasureChest = Math.floor(Math.random() * 24);
  bomb = Math.floor(Math.random() * 24);
  while (treasureChest === bomb) {
    bomb = Math.floor(Math.random() * 24);
  }
  movesLeft = 8;
  document.getElementById("movesLeft").innerHTML = "Moves Left " + movesLeft;
  gameOn = true;
}

function end() {
  gameOn = false;
  for (var i = 0; i < 25; i++) {
    if (i === treasureChest) {
      document.getElementById(i).innerHTML = "💰";
    } else if (i === bomb) {
      document.getElementById(i).innerHTML = "💣";
    } else {
      document.getElementById(i).innerHTML = "🌵";
    }
  }
}
