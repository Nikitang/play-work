import peopleBg from './assets/images/people-bg.png';
import maleAvatar from './assets/images/man.png';
import femaleAvatar from './assets/images/woman.png';

import friends from './assets/data/friends.js';

export const generateFriendsList = () => {
    const friendsList = document.querySelector('.map__items-friends-list');

    friends.forEach((person) => {
        const div = document.createElement('div');
        div.classList.add('map__items-friends-list-item');
        div.style.backgroundImage = `url(${peopleBg})`;
        const divIcon = document.createElement('img');
        divIcon.classList.add('map__items-friends-list-item-icon');
        divIcon.src = person.img === 'male' ? maleAvatar : femaleAvatar;
        div.appendChild(divIcon);
        friendsList.appendChild(div);
    });

    const leftArrow = document.querySelector('.map__items-friends-left-btn');
    const rightArrow = document.querySelector('.map__items-friends-right-btn');
    const scrollAmount = 60;

    leftArrow.addEventListener('click', () => {
        friendsList.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    });

    rightArrow.addEventListener('click', () => {
        friendsList.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });
};
