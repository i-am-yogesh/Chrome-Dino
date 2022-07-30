let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');
let cactusPosLeft , score = 0;

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        jump(); 
    }
})

function jump(){
    dino.classList.add('animate');
    setTimeout(() => {
        dino.classList.remove('animate')
    }, 500);
}

setInterval(() => {
    score++;
    document.getElementById('score').innerHTML = score;
}, 100);


setInterval(() => {
    cactusPosLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let pos = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    if((cactusPosLeft <= 139) && (cactusPosLeft >= 45) && (pos < 85)){
        alert("Game Over, Score : " + score);
        score = 0;
    }
}, 5);