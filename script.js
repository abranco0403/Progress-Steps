const progress = document.querySelector('.progress');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

/************************************************/
let currentCompleted = 1;
/************************************************/

btnNext.addEventListener('click', () => {
    currentActive +=1;

    /*****/
    currentCompleted +=1;
    /*****/

    if(currentActive > circles.length) {
        currentActive  = circles.length
    }

    /*****/
    if(currentCompleted > circles.length + 1) {
        currentCompleted = circles.length;
    }
    /*****/
    updateStep();
});

btnPrev.addEventListener('click', () => {
    currentActive -=1;
    if(currentActive < 1) {
        currentActive  = 1;
    }
    updateStep();
});

function updateStep() {
    circles.forEach((circle, idx) => {

        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
   progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if(currentActive === 1) {
        btnPrev.disabled = true;
    } else if (currentActive === circles.length) {
        btnNext.disabled = true;
    } else {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }

}