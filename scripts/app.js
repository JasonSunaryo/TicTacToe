let editedPlayer = 0;
let activePlayer = 0;
let currentround = 1;
let gameIsOver = false;

const gameData =[
[0,0,0],
[0,0,0],
[0,0,0],


]

const players = [
    {
        name: '',
        symbol:'X'
    },
    {
        name: '',
        symbol:'O'
    }
]

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const startNewGameBtn = document.getElementById('start-game-btn')
const form = document.querySelector('form')
const errorOutputElement = document.getElementById('config-errors')
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')


const playerConfig= document.getElementById('config-overlay')
const backdrop = document.getElementById('backdrop')
const cancelBtn = document.getElementById('cancel-config-btn')
const gameFields = document.querySelectorAll('#game-board li')


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener ('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig );
startNewGameBtn.addEventListener('click',startNewGame);

for(const gameField of gameFields){
    gameField.addEventListener('click', selectGameField);
}