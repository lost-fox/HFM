const burgerMenu = document.querySelector('.burger-menu');
const btnBurgerMenu = document.querySelector('.header-main-bnt__burger');
const closeBurgerMenu = document.querySelector('.burger-menu__close');

const isShowMenu = () => {
  burgerMenu.style.display = burgerMenu.style.display === 'none' ? 'block' : 'none';
};

btnBurgerMenu.addEventListener('click', isShowMenu);
closeBurgerMenu.addEventListener('click', isShowMenu);

console.log(burgerMenu);
