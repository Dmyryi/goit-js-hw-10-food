import './sass/main.scss';
// import template from './templates/template.hbs';
import template from './templates/template.hbs';
import menuData from './menu.json';
import storage from './js/utils/storage.js';

const body = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const CHECKED_THEME_STATE = 'checkedThemeState';

const menuRef = document.querySelector('.js-menu');
menuRef.innerHTML = template(menuData);

const isThemeSet = storage.load(CHECKED_THEME_STATE);
// const isThemeSet = storage.load('checkedThemeState');
const themeSwitcherRef = document.querySelector('#theme-switch-toggle');

let newThemeState;

if (!isThemeSet) {
    newThemeState = Theme.LIGHT;
    body.classList = newThemeState;
    // themeSwitcherRef.checked = false;
} else {
    newThemeState = isThemeSet;
    body.classList = newThemeState;

    if (newThemeState === Theme.LIGHT) {
        themeSwitcherRef.checked = false;
    } else {
        themeSwitcherRef.checked = true;
    }
}

themeSwitcherRef.addEventListener('change', e => {
    newThemeState = !e.target.checked ? 'light-theme' : 'dark-theme';
    body.classList = newThemeState;
    storage.save(CHECKED_THEME_STATE, newThemeState);
});