const attackButton = document.querySelector('.attack_button');
const reloadButton = document.querySelector('.reload_button');
const bullet = document.querySelectorAll('.bullet');
const antagonistQuote = document.querySelector('.antagonist_quote');
const protagonistQuote = document.querySelector('.protagonist_quote');
const protagonist = document.querySelector('.protagonist');
const antagonist = document.querySelector('.antagonist');
const hp = document.querySelector('.hp');
const hpCount = document.querySelector('.hp_count');
const prhp = document.querySelector('.prot_hp');
const prhpCount = document.querySelector('.prot_hp_count');
const restartButton = document.querySelector('.restart_button');
const win = document.querySelector('.win');

let snd1 = new Audio("assets/shoot.mp3");
let snd2 = new Audio("assets/reload.mp3");
let snd3 = new Audio("assets/winsound.mp3");
let snd4 = new Audio("assets/restart.mp3");
let bulletCount = 1;
let maxhp = 5;
let curhp = maxhp;
let prmaxhp = 5;
let prcurhp = prmaxhp;
hpCount.innerHTML = `${curhp} / ${maxhp}`;
prhpCount.innerHTML = `${prcurhp} / ${prmaxhp}`;
function shoot() {
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);
    bullet[1].style = `transform: translate(${a % 2 === 0 ? a : -a}%, -900%)`;
    bullet[0].style = `transform: translate(${b % 2 === 0 ? b : -b}%, 900%)`;
    protagonist.style = 'animation: x 0.2s cubic-bezier(0,20,1,20) 2';
    antagonist.style = 'animation: y 0.2s cubic-bezier(0,20,1,20) 2';
    bullet[1].classList.add('hidden');
    bullet[0].classList.add('hidden');
    antagonistQuote.classList.remove('hidden2');
    protagonistQuote.classList.remove('hidden2');
    curhp--;
    prcurhp--;
    hp.style = `width: ${curhp / maxhp * 100}%`;
    prhp.style = `width: ${prcurhp / prmaxhp * 100}%`;
    hpCount.innerHTML = `${curhp} / ${maxhp}`;
    prhpCount.innerHTML = `${prcurhp} / ${prmaxhp}`;
    if (curhp === 3) {
        antagonistQuote.innerHTML = 'сук пздц';
        protagonistQuote.innerHTML = 'получи сук';

    }
    if (curhp === 2) {
        antagonistQuote.innerHTML = 'не нада бля';
        protagonistQuote.innerHTML = 'нада бля';
    }
    if (curhp === 1) {
        antagonistQuote.innerHTML = 'умираю бля';
        protagonistQuote.innerHTML = 'да бля';
    }
    if (curhp === 0) {
        restartButton.classList.remove('hidden');
        if (prcurhp === 0) {
            win.innerHTML = 'nichya';
            win.style.color = 'orange';
        }
        win.classList.remove('hidden');
        snd3.currentTime = 0;
        snd3.play();
        antagonistQuote.innerHTML = 'бля умер';
        prcurhp === 0 ?
            protagonistQuote.innerHTML = 'бля и я умер' :
            protagonistQuote.innerHTML = 'земля пухом бля';
    }
    snd1.currentTime = 0;
    snd1.play();
}
function reload() {
    bullet[1].style = 'transform: translate(0, 0)';
    bullet[1].classList.remove('hidden');
    bullet[0].style = 'transform: translate(0, 0)';
    bullet[0].classList.remove('hidden');
    protagonist.style = 'animation: 0';
    antagonist.style = 'animation: 0';
    antagonistQuote.classList.add('hidden2');
    protagonistQuote.classList.add('hidden2');
    snd2.currentTime = 0;
    snd2.play();
    bulletCount = 1;
    if (curhp === 0) {
        restartButton.classList.remove('hidden');
        win.classList.remove('hidden');
    }
}
function impact() {
    //antagonist.style = 'animation: y 0.2s cubic-bezier(0,20,1,20) ';
}
attackButton.addEventListener('click', () => {
    if (bulletCount > 0 && curhp > 0) {
        shoot();
        bulletCount--;
    }
})
reloadButton.addEventListener('click', () => {
    if (bulletCount < 1) {
        reload();
    }
})
restartButton.addEventListener('click', () => {
    curhp = maxhp;
    prcurhp = prmaxhp;
    hp.style = `width: ${curhp / maxhp * 100}%`;
    prhp.style = `width: ${prcurhp / prmaxhp * 100}%`;
    hpCount.innerHTML = `${curhp} / ${maxhp}`;
    prhpCount.innerHTML = `${prcurhp} / ${prmaxhp}`;
    antagonistQuote.classList.add('hidden2');
    protagonistQuote.classList.add('hidden2');
    antagonistQuote.innerHTML = 'ай блять';
    protagonistQuote.innerHTML = 'на нахуй';
    restartButton.classList.add('hidden');
    win.classList.add('hidden');
    snd4.currentTime = 0;
    snd4.play();
})