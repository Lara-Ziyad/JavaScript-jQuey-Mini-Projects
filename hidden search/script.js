
//jQuery

$(function () {
    $('.btn').on("click", function () {
        console.log($('.input'))
        $('.search').toggleClass('active');
        $('.input').css("background-image", "linear-gradient(#C0C0C0, #ffffff, #C0C0C0)");
    })    
})


//Javscript

// const search = document.querySelector('.search')
// const btn = document.querySelector('.btn')
// const input = document.querySelector('.input')
// btn.addEventListener('click', () => {
//     search.classList.toggle('active')
//     input.focus()
// })