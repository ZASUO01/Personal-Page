const menu = document.querySelector('#menu-btn');
const menuUl = document.querySelector('.menu-mobile ul');

let menuOpened = false;

window.addEventListener('scroll', () => {
    menuUl.style.cssText = 'transform: translateX(100%);'
    menuOpened = false;
})


menu.addEventListener('click', () => {
    if(menuOpened){
        menuUl.style.cssText = 'transform: translateX(100%);'
        menuOpened = false;
    }else{
        menuUl.style.cssText = 'transform: translateX(0);'
        menuOpened = true;
    }
});


