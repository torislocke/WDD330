import Hikes from './hikeModel.js';

// Requirement - when app loads user see's list of all hikes
// below the hikes user see's all comments
const theHikingList = new Hikes('hikes');
window.addEventListener('load', () => {
	theHikingList.showHikeList();
});
