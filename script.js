function answerYes() {
    document.getElementById('answer').innerText = "🎉 Haha! Nice! 😎";
}

const noBtn = document.getElementById('noBtn');

// Move button anywhere on screen
function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randX + "px";
    noBtn.style.top = randY + "px";
}

// Run away BEFORE click 😈
noBtn.addEventListener("mouseover", moveButton);   // PC
noBtn.addEventListener("touchstart", moveButton);  // Mobile
noBtn.addEventListener("touchmove", moveButton);   // Extra escape

// Make it move randomly always
setInterval(moveButton, 500);

// Extra: prevent click completely
noBtn.addEventListener("click", function(e) {
    e.preventDefault();
    moveButton();
});
