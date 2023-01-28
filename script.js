const attack = document.querySelector('.attack_button');
const bullet = document.querySelector('.bullet');
//let snd1 = new Audio("../assets/6f578c03d698a4c.mp3");

attack.addEventListener('click', () => {
    bullet.style = 'transform: translate(0, -800%)';
    bullet.classList.add('hidden');
})