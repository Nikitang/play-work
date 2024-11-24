import rating from '../assets/data/rating.js';

export const sortingRate = rating.sort((a, b) => b.points - a.points);
