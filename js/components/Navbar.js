const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const bar = burger.querySelectorAll('.line');

burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-anim');
    bar.forEach((linebar) =>{
        linebar.classList.toggle('bar-anim');
    })
});