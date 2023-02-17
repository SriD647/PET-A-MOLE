let circles=document.querySelectorAll('.location');
const mole= document.getElementById('mole');
const resetEl= document.getElementById('reset');
const startEl=document.getElementById('start')
const timeLeft= document.getElementById('timeLeft');
const scoreCount=document.getElementById('score');
let pointer=document.querySelector('location');
let titleEl=document.getElementById('title');


let score=0;
let currentCircle=0;
let pointLocked= false;
let alreadyStart=false;


startEl.addEventListener('click', begin)

/* Place mole in random location */
function showMole () {
    circles.forEach(function(circle) {
      circle.classList.remove('mole');
    });
    
    pointLocked=false;

    let randomCircle= circles[Math.floor(Math.random()*9)];
    randomCircle.classList.add('mole');

    currentCircle=randomCircle.id;

}

/* Begin showMole function and countdown function */
function begin() {
    alreadyStart=true;
    while (alreadyStart) {
        startEl.removeEventListener ('click', begin);
        score=0;
        currentTime=10;
        Timer=setInterval(showMole, 620);
        timeTimer=setInterval(countDown, 1000);
        alreadyStart=false;
    }    
}

/* Capture clicks and update scoreboard */
circles.forEach(function (circle) {
    circle.addEventListener('click', ()=>{
    if(circle.id==currentCircle) {
        if(pointLocked) return;
        score++;
        scoreCount.innerText= `Moles petted: ${score}`;
        circle.classList.remove('mole');
        pointLocked= true;
    }
    });
});

/*Count down timer and win/loss messages*/
function countDown () {
    currentTime--;
    timeLeft.innerText= `Countdown: ${currentTime}`

    if (currentTime== 0) {
        startEl.addEventListener('click', begin)
        currentTime=0;
        clearInterval(timeTimer)
        clearInterval(Timer)
        if (score<13) {
            titleEl.innerText ='Game over, you lost!';
            startEl.removeEventListener ('click', begin);
        }
        if(score>=13) {
            titleEl.innerText ='Game over, you won!';
            startEl.removeEventListener ('click', begin);   
        }
    }

}

/*When reset button is clicked*/

resetEl.addEventListener('click', reset)

function reset() {
    location.reload();
}