
//jQuery

$(function () {
  const panel = $('.panel');

  panel.on('click', function () {
    // removeClass()
    return $(this).addClass('active').siblings().removeClass('active');
  });
});




//JavaScript

// const panels = document.querySelectorAll('.panel')
// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })
// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }
