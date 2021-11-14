
//jQuery

$(function () {
    const box = $('.box');
    const triggerBottom = innerHeight / 5 * 4 //the page hight divided by 5 and multiplied by 4 
    $(window).scroll(function () { 
        $.map(box, function (b, i) {        
            const boxTop = box.get(i).getBoundingClientRect().top
            console.log(boxTop)
            console.log(triggerBottom);
            console.log(i)
            if (boxTop < triggerBottom) {
                console.log((boxTop < triggerBottom))
                console.log(b)
                b.classList.add('show')           
            }
            else {
                b.classList.remove('show')
            }
        })
    })
})


//Javscript

// const boxes = document.querySelectorAll('.box')
// window.addEventListener('scroll', checkBoxes)
// checkBoxes()
// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4 //the page hight divided by 5 and multiplied by 4
//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top //the distance between the box from the top of the page
//         if(boxTop < triggerBottom) {
//             box.classList.add('show')
//         } else {
//             box.classList.remove('show')
//         }
//     })
// }