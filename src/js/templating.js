import itemsTemplate from '../templates/gallery-items.hbs';
import menuItems from '../menu.json';

const markup = itemsTemplate(menuItems);

function createMenu() {
  const menuRef = document.querySelector('.js-menu');
  menuRef.insertAdjacentHTML('beforeend', markup);
}
createMenu();
