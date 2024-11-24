import onChange from 'on-change';

import bgFriends from './assets/images/2222.png';
import chatLogo from './assets/images/chat.png';
import inUniLogo from './assets/images/inuni.png';
import smsLogo from './assets/images/sms.png';
import ratingLogo from './assets/images/rate.png';
import closerLogo from './assets/images/close-btn.png';
import leftArrow from './assets/images/arrow-l.png';
import rightArrow from './assets/images/arrow-r.png';

import { toggleMenu, peopleInMenu } from './menu.js';
import { generateFriendsList } from './friendsList.js';

function app() {
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

    const leftArrowImg = document.querySelector('.map__items-friends-left-btn img');
    leftArrowImg.src = leftArrow;

    const rightArrowImg = document.querySelector('.map__items-friends-right-btn img');
    rightArrowImg.src = rightArrow;

    const state = {
        isOpenMenu: false,
    };

    const watchedState = onChange(state, (path, value) => {
        if (path === 'isOpenMenu') {
            toggleMenu(value);
        }
    });

    document
        .querySelector('.map__items-rating')
        .addEventListener('click', () => (watchedState.isOpenMenu = !watchedState.isOpenMenu));

    closer.addEventListener('click', () => (watchedState.isOpenMenu = false));

    const startBtn = document.querySelector('.map__items-go');
    const anim = document.querySelector('.map__sprite-container-img');

    startBtn.addEventListener('click', () => {
        const style = window.getComputedStyle(anim);
        const top = parseFloat(style.top);
        const left = parseFloat(style.left);
        if (top === 390 && left === 90) {
            return;
        } else {
            anim.style.animation = '';

            anim.style.animation = 'move 9s linear forwards';

            anim.style.backgroundPosition = '0';
            anim.style.animation = 'play 0.8s steps(9) infinite, move 9s linear forwards';

            setTimeout(() => {
                anim.style.animation = 'move 9s linear forwards';
            }, 8900);
        }
    });
    peopleInMenu();
    generateFriendsList();
}

export default app;
