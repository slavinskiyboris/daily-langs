const burger = document.querySelector('.burger')
const nav = document.querySelector('.header__nav')
burger.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('open');
});