function resetGameStatus() {
    activePlayer = 0;
    currentround = 1; // Reset current round
    gameIsOver = false
    gameOverElement.style.display = 'none';
    gameOverElement.firstElementChild.innerHTML = 
        ' <span id="winner-name">PLAYER NAME</span>!';

    let gameFieldsIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItem = gameFields[gameFieldsIndex]; // Ambil item dari gameFields
            gameBoardItem.textContent = '';
            gameBoardItem.classList.remove('disabled');
            gameFieldsIndex++;
        }
    }
}


function startNewGame() {
  if (players[1].name === "" || players[0].name === "") {
    alert("Enter a name for both players");
    gameArea.style.display = "none";
  } else {
    gameArea.style.display = "block";
  }

resetGameStatus();

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.display = "block";
  
}

function checkForGameOver() {
  for (i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentround === 9) {
    return -1;
  }

  return 0;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
 
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0 || gameIsOver) {
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerid = checkForGameOver();

  console.log(winnerid);
  if (winnerid !== 0) {
    endGame(winnerid);
  }

  currentround = currentround + 1;
  switchPlayer();
}

function endGame(winnerid) {
    gameIsOver = true
  gameOverElement.style.display = "block";
  if (winnerid > 0) {
    const winnerName = players[winnerid - 1].name;
    gameOverElement.firstElementChild.innerHTML = `You won, <span>${winnerName}</span>!`;
  } else {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      "It' a draw";
  }
}
