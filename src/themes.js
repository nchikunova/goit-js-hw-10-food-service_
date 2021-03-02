const themes = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const galleryRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

window.addEventListener('load', getThemeFromLocalStorage);
checkboxRef.addEventListener('change', changeTheme);

function getThemeFromLocalStorage() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark-theme') {
    bodyRef.classList.add(themes.DARK);
    checkboxRef.setAttribute('checked', true);
  } else {
    bodyRef.classList.add(themes.LIGHT);
  }
}

function changeTheme() {
  if (checkboxRef.checked) {
    bodyRef.classList.replace(themes.LIGHT, themes.DARK);
    localStorage.setItem('theme', themes.DARK);
  } else {
    bodyRef.classList.replace(themes.DARK, themes.LIGHT);
    localStorage.setItem('theme', themes.LIGHT);
  }
}
