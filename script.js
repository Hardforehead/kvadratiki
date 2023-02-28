const attackButton = document.querySelector('.attack_button');
const reloadButton = document.querySelector('.reload_button');
const bullet = document.querySelectorAll('.bullet');
//const antagonistQuote = document.querySelector('.antagonist_quote');
//const protagonistQuote = document.querySelector('.protagonist_quote');
const protagonist = document.querySelector('.protagonist');
const antagonist = document.querySelector('.antagonist');
const hp = document.querySelector('.hp');
const hpCount = document.querySelector('.hp_count');
const prhp = document.querySelector('.prot_hp');
const prhpCount = document.querySelector('.prot_hp_count');
const restartButton = document.querySelector('.restart_button');
const win = document.querySelector('.win');
const shad = document.querySelector('.shad');
const popup = document.querySelector('.popup');
const store = document.querySelector('.store_button');
const item = document.querySelector('.item');
const money = document.querySelector('.money');
const bullet2 = document.querySelector('.bullet2');
const level = document.querySelector('.level_button');
let shootSnd = new Audio("assets/shoot.mp3");
let reloadSnd = new Audio("assets/reload.mp3");
let winSnd = new Audio("assets/winsound.mp3");
let restartSnd = new Audio("assets/restart.mp3");
let rikoshetSnd = new Audio("assets/rikoshet.mp3");
let buySnd = new Audio("assets/buy.mp3");
let failSnd = new Audio("assets/fail.mp3");
let score = 5;
let bulletCount = 1;
let maxhp = 5;
let curhp = maxhp;
let prmaxhp = 5;
let prcurhp = prmaxhp;
let bbye = 1;
let prdmg = 1;
let bulletBorder = 4;
let lvl = 1;
level.innerHTML = `Уровень ${lvl}`;
money.innerHTML = `${score} деняк`;
hpCount.innerHTML = `${curhp} / ${maxhp}`;
prhpCount.innerHTML = `${prcurhp} / ${prmaxhp}`;
function shoot() {
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);
    let c = Math.round(Math.random() * 3);
    let d = Math.round(Math.random() * 3);
    rikoshetSnd.volume = 0.5;
    bullet[1].style.transform = `translate(${a % 2 === 0 ? a : -a}%, -900%)`;
    bullet[0].style.transform = `translate(${b % 2 === 0 ? b : -b}%, 900%)`;
    bullet[1].classList.add('hidden');
    bullet[0].classList.add('hidden');

    protagonist.style.animation = `x 0.3s cubic-bezier(0,20,1,20) ${d === 1 ? 1 : 2}`;
    antagonist.style.animation = `y 0.3s cubic-bezier(0,20,1,20) ${c === 1 ? 1 : 2}`;

    if (c !== 1) {
        curhp < prdmg ? curhp = 0 : curhp -= prdmg;
        hp.style = `width: ${curhp / maxhp * 100}%`;
        hpCount.innerHTML = `${curhp} / ${maxhp}`;

    } else {
        rikoshetSnd.currentTime = 0;
        rikoshetSnd.play();
    }
    if (d !== 1) {
        prcurhp--;
        prhp.style = `width: ${prcurhp / prmaxhp * 100}%`;
        prhpCount.innerHTML = `${prcurhp} / ${prmaxhp}`;
    } else {
        rikoshetSnd.currentTime = 0;
        rikoshetSnd.play();
    }

    if (curhp === 0 || prcurhp === 0) {
        restartButton.classList.remove('hidden');
        if (curhp === 0) {
            win.innerHTML = 'победа';
            win.style.color = 'green';
            score += 5;
            money.innerHTML = `${score} деняк`;
            maxhp +=5;
            lvl++;
            level.innerHTML = `Уровень ${lvl}`;
            antagonist.style.border = `${2 + lvl}px solid rgb(198, 0, 0)`; 
            winSnd.currentTime = 0;
            winSnd.play();
        }
        if (prcurhp === 0) {
            win.innerHTML = 'поражение';
            win.style.color = 'red';
            score += 1;
            money.innerHTML = `${score} деняк`;
        }
        if (prcurhp === 0 && curhp === 0) {
            win.innerHTML = 'ничья';
            win.style.color = 'orange';
            score += 3;
            money.innerHTML = `${score} деняк`;
        }
        win.classList.remove('hidden');
    }
    shootSnd.currentTime = 0;
    shootSnd.play();
}
function reload() {
    bullet[1].style.transform = 'translate(0, 0)';
    bullet[1].classList.remove('hidden');
    bullet[0].style.transform = 'translate(0, 0)';
    bullet[0].classList.remove('hidden');
    protagonist.style.animation = '0';
    antagonist.style.animation = '0';
    //antagonistQuote.classList.add('hidden2');
    //protagonistQuote.classList.add('hidden2');
    reloadSnd.currentTime = 0;
    reloadSnd.play();
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
    if (bulletCount > 0 && curhp > 0 && prcurhp > 0) {
        shoot();
        bulletCount--;
    }
});
reloadButton.addEventListener('click', () => {
    if (bulletCount < 1) {
        reload();
    }
});
restartButton.addEventListener('click', () => {
    curhp = maxhp;
    prcurhp = prmaxhp;
    hp.style = `width: ${curhp / maxhp * 100}%`;
    prhp.style = `width: ${prcurhp / prmaxhp * 100}%`;
    hpCount.innerHTML = `${curhp} / ${maxhp}`;
    prhpCount.innerHTML = `${prcurhp} / ${prmaxhp}`;
    restartButton.classList.add('hidden');
    win.classList.add('hidden');
    restartSnd.currentTime = 0;
    restartSnd.play();
});

store.addEventListener('click', () => {
    popup.style = 'top: 100px';
    shad.style.cssText = `background-color: rgba(20, 20, 20, 0.4);
    visibility: visible;
    z-index: 1;`;
});
shad.addEventListener('click', () => {
    popup.style = 'top: -700px;';
    shad.style.cssText = `background-color: rgba(20, 20, 20, 0);
            visibility: hidden;
            z-index: 1;`;

    a = 0;
});
item.addEventListener('click', () => {
    if (score - 5 >= 0) {
        prdmg += 1;
        buySnd.currentTime = 0;
        buySnd.play();
        bulletBorder += 1;
        if (bulletBorder < 16) {
            bullet2.style = `border: ${bulletBorder}px solid rgb(162, 122, 0);`;
            bullet[1].style = `border: ${bulletBorder}px solid rgb(162, 122, 0);`;
        }
        score -= 5;
        money.innerHTML = `${score} деняк`;
    } else {
        failSnd.currentTime = 0;
        failSnd.play();
    }

})