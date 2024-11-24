import { sortingRate } from './utils/sorting.js';
import friends from './assets/data/friends.js';
import rateOneBg from './assets/images/rate-one.png';
import peopleSmallBg from './assets/images/small-bg.png';
import maleAvatar from './assets/images/man.png';
import femaleAvatar from './assets/images/woman.png';

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
    const fill = sortingRate.filter((item) => friends.map((i) => i.id).includes(item.id));

    const menuList = document.querySelector('.map__menu-peoples');
    const ul = document.createElement('ul');
    sortingRate.forEach((person, index) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.classList.add('map__menu-people');
        div.style.backgroundImage = `url(${rateOneBg})`;

        const divPlace = document.createElement('div');
        divPlace.classList.add('map__menu-people-place');
        const divPlaceSpan = document.createElement('span');
        divPlaceSpan.textContent = `${index + 1}`;
        divPlace.appendChild(divPlaceSpan);

        const divPerson = document.createElement('div');
        divPerson.classList.add('map__menu-people-person');
        const divPersonIcon = document.createElement('div');
        divPersonIcon.classList.add('map__menu-people-person-icon');
        divPersonIcon.style.backgroundImage = `url(${peopleSmallBg})`;
        const img = document.createElement('img');
        img.src = person.img === 'male' ? maleAvatar : femaleAvatar;
        divPersonIcon.appendChild(img);
        const divPersonName = document.createElement('div');
        divPersonName.classList.add('map__menu-people-person-name');
        const divPersonNameSpan = document.createElement('span');
        fill.forEach((friend) =>
            friend.id === person.id ? (divPersonNameSpan.style.color = 'green') : null
        );
        divPersonNameSpan.textContent = `${person.name} ${person.lastName}`;
        divPersonName.appendChild(divPersonNameSpan);
        divPerson.appendChild(divPersonIcon);
        divPerson.appendChild(divPersonName);

        const divPoints = document.createElement('div');
        divPoints.classList.add('map__menu-people-points');
        const divPointsSpan = document.createElement('span');
        divPointsSpan.textContent = `${person.points}`;
        divPoints.appendChild(divPointsSpan);

        div.appendChild(divPlace);

        div.appendChild(divPerson);

        div.appendChild(divPoints);

        li.appendChild(div);
        ul.appendChild(li);
    });
    menuList.appendChild(ul);
};
