import onChange from 'on-change';

import bgFriends from './assets/images/2222.png';
import chatLogo from './assets/images/chat.png';
import inUniLogo from './assets/images/inuni.png';
import smsLogo from './assets/images/sms.png';
import ratingLogo from './assets/images/rate.png';
import closerLogo from './assets/images/close-btn.png';

import { toggleMenu, peopleInMenu } from './menu.js';

console.log('2');
function app() {
    const bgFr = document.querySelector('.map__items-friends').querySelector('img');
    bgFr.src = bgFriends;

    const chat = document.querySelector('.map__items-chat').querySelector('img');
    chat.src = chatLogo;

    const uni = document.querySelector('.map__items-go').querySelector('img');
    uni.src = inUniLogo;

    const sms = document.querySelector('.map__items-sms').querySelector('img');
    sms.src = smsLogo;

    const rate = document.querySelector('.map__items-rating').querySelector('img');
    rate.src = ratingLogo;

    const closer = document.querySelector('.map__menu-peoples-close');
    closer.src = closerLogo;

    const state = {
        isOpenMenu: false,
    };

    const watchedState = onChange(state, (path, value) => {
        if (path === 'isOpenMenu') {
            toggleMenu(value);
            console.log(value);
        }
    });

    document
        .querySelector('.map__items-rating')
        .addEventListener('click', () => (watchedState.isOpenMenu = !watchedState.isOpenMenu));

    closer.addEventListener('click', () => (watchedState.isOpenMenu = false));
    peopleInMenu();
}

export default app;
