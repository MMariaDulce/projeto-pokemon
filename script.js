const menu = document.querySelector('.mobile-btn');
const NavMenu = document.querySelector('.mobile-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})