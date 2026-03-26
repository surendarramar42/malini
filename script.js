function answerYes() {
    document.getElementById('answer').innerText = "🎉 Haha! Nice! 😎";
}

const noBtn = document.getElementById('noBtn');

function moveButton() {
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randX + 'px';
    noBtn.style.top = randY + 'px';
}

// PC
noBtn.addEventListener('mouseover', moveButton);

// Mobile
noBtn.addEventListener('touchstart', moveButton);

// Music
const music = document.getElementById('bg-music');
music.volume = 0.3;
