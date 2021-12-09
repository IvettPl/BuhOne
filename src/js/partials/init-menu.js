
let btnMobMenu = document.querySelector('.btn-mob');
let headerRight = document.querySelector('.header__right');

btnMobMenu.addEventListener('click', function() {  
    this.classList.toggle('btn-mob--open');

    if(!(headerRight.classList.contains('header__right--open'))) {
        headerRight.classList.add('header__right--open');
    } else {
        headerRight.classList.remove('header__right--open'); 
    }
});



//close mob menu on click to outside block
// document.addEventListener('click', function(event) {  
//     if(!headerRight.contains(event.target)) { 
//         console.log(event.target)
//         headerRight.classList.remove('header__right--open');
//         btnMobMenu.classList.remove('btn-mob--open');
//     }
// });


//close mob menu on resize
function closeResizeMobMenu() {
    let screenWidth = document.documentElement.clientWidth;

    let positionTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(screenWidth > 1023) {
        btnMobMenu.classList.remove('btn-mob--open');

        headerRight.classList.remove('header__right--open');
    }
}

window.addEventListener('resize', function(event) {
    closeResizeMobMenu();

}, true);