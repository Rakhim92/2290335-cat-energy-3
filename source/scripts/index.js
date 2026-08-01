/* в этот файл добавляет скрипты*/

const burgerBtn = document.querySelector('.page-header__button');
const headerNavigationContent = document.querySelector('.page-header__navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('page-header__button--show');
  headerNavigationContent.classList.toggle('page-header__navigation--show');
});
