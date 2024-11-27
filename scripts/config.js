function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid
    playerConfig.style.display = 'block'
    backdrop.style.display = 'block'
}

function closePlayerConfig(){
    playerConfig.style.display = 'none'
    backdrop.style.display = 'none'
    form.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = ''
    form.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
event.preventDefault();
const formData = new FormData(event.target);
const enteredPlayername = formData.get('playername').trim();

if (!enteredPlayername){
    event.target.firstElementChild.classList.add('error');
    errorOutputElement.textContent = 'Please enter a valid name';
    return;
}

const updatedPlayerDataElement  = document.getElementById('player-' + editedPlayer + '-data');
updatedPlayerDataElement.children[1].textContent = enteredPlayername;

players[editedPlayer -1].name = enteredPlayername;


closePlayerConfig();
}