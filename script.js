const attackButton = document.querySelector('.attack_button');
const reloadButton = document.querySelector('.reload_button');
const bullet = document.querySelector('.bullet');
const antagonistQuote = document.querySelector('.antagonist_quote');
const protagonistQuote = document.querySelector('.protagonist_quote');

let snd1 = new Audio("assets/shoot.mp3");
let snd2 = new Audio("assets/reload.mp3");
let bulletCount = 1;
function shoot() {
    bullet.style = 'transform: translate(0, -800%)';
    bullet.classList.add('hidden');
    antagonistQuote.classList.remove('hidden');
    protagonistQuote.classList.remove('hidden');
    snd1.currentTime = 0;
    snd1.play();
}
function reload() {
    bullet.style = 'transform: translate(0, 0)';
    bullet.classList.remove('hidden');
    antagonistQuote.classList.add('hidden');
    protagonistQuote.classList.add('hidden');
    snd2.currentTime = 0;
    snd2.play();
    bulletCount = 1;
}

attackButton.addEventListener('click', () => {
    if (bulletCount > 0) {
        shoot();
        bulletCount--;
    }
})
reloadButton.addEventListener('click', () => {
    if (bulletCount < 1) {
        reload();
    }
})