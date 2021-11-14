const progress = document.getElementById('progress');

const less = document.getElementById('less');
const more = document.getElementById('more');

const numbers = document.querySelectorAll('.circle');

let currentProgress= 1;

more.addEventListener('click', () => {

    currentProgress++;

    // console.log(currentProgress);

    if (currentProgress > numbers.length) {
        currentProgress = numbers.length

    }
    upDate()
})

less.addEventListener('click', () => {

    currentProgress--;

    console.log(currentProgress);

    if (currentProgress < 1) {
        currentProgress = 1

    }

    upDate()

})

function upDate(){

    numbers.forEach((number, idx) => {
        
        if (idx < currentProgress) {
            number.classList.add('active')

        }
        else {
            number.classList.remove('active')
        }


    })

    const activeCircles = document.querySelectorAll('.active')
    // console.log(activeCircles);
    console.log(activeCircles.length - 1)
    console.log( numbers.length-1)
    let width= ((activeCircles.length-1)/ (numbers.length-1)) * 100;
    console.log(width)
    console.log (numbers.length-1)
    progress.style.width = `${width}%`; // how we change style in css
    
    if (currentProgress === 1) {
        less.disabled = true
    }
    else if (currentProgress === numbers.length) {
        more.disabled = true
    }
    else {
        less.disabled = false;
        more.disabled = false

    }

}