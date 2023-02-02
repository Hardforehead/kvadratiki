const attackButton = document.querySelector('.attack_button');
const reloadButton = document.querySelector('.reload_button');
const bullet = document.querySelector('.bullet');
const antagonistQuote = document.querySelector('.antagonist_quote');
const protagonistQuote = document.querySelector('.protagonist_quote');
const protagonist = document.querySelector('.protagonist');
const antagonist = document.querySelector('.antagonist');

let snd1 = new Audio("assets/shoot.mp3");
let snd2 = new Audio("assets/reload.mp3");
let bulletCount = 1;
function shoot() {
    let a = Math.round(Math.random() * 100);
    bullet.style = `transform: translate(${a % 2 === 0 ? a : -a}%, -900%)`;
    protagonist.style = 'animation: x 0.3s cubic-bezier(0,20,1,20) 1';
    bullet.classList.add('hidden');
    antagonistQuote.classList.remove('hidden');
    protagonistQuote.classList.remove('hidden');
    snd1.currentTime = 0;
    snd1.play();
}
function reload() {
    bullet.style = 'transform: translate(0, 0)';
    bullet.classList.remove('hidden');
    protagonist.style = 'animation: 0';
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