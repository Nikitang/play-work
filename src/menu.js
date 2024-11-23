import rating from './assets/data/rating.js';
import rateOneBg from './assets/images/rate-one.png';

const menuBtn = document.querySelector('.map__items-rating');

export const toggleMenu = (init = false) => {
    const menu = document.querySelector('.map__menu');

    if (init) {
        menu.classList.add('opened');
    } else {
        menu.classList.remove('opened');
    }
};

export const peopleInMenu = () => {
    const menuList = document.querySelector('.map__menu-peoples');
    const ul = document.createElement('ul');
    rating.forEach((person) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.classList.add('map__menu-people');
        div.style.backgroundImage = `url(${rateOneBg})`;
        li.appendChild(div);
        ul.appendChild(li);
    });
    menuList.appendChild(ul);
};
