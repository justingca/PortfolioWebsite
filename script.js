const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.mobile-nav-toggle');
const burger = document.querySelector('.burger-button');
const xMark = document.querySelector('.x-button');
const menuItems = document.querySelectorAll('.nav-item');

navToggle.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('data-visible');

    if(visibility === 'false') {
        navMenu.setAttribute('data-visible', true);
        burger.setAttribute('aria-expanded', true);
        xMark.setAttribute('aria-expanded', true);
    }
    else if (visibility === 'true') {
        navMenu.setAttribute('data-visible', false);
        burger.setAttribute('aria-expanded', false);
        xMark.setAttribute('aria-expanded', false);
    }
})

menuItems.forEach(e => {
    e.addEventListener('click', function() {
        navMenu.setAttribute('data-visible', false);
        burger.setAttribute('aria-expanded', false);
        xMark.setAttribute('aria-expanded', false);
    })
})