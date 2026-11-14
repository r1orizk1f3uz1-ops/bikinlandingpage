const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('menu-open');

    const isOpen = mainNav.classList.contains('menu-open');

    menuToggle.textContent = isOpen ? '✕' : '☰';
    menuToggle.setAttribute('aria-expanded', isOpen);
});