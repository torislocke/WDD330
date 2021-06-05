import Hikes from './hikeModel.js';

//on load, pull the list of hike (array) and display list to user
const theHikingList = new Hikes('hikes');
window.addEventListener('load', () => {
	theHikingList.showHikeList();
});
