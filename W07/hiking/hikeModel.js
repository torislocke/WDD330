import Comments from './commentModel.js';
const hikeComments = new Comments('hikeComments');
import hikeObjectArray from './data.js';

// create a src path for pictures
const imgBasePath = './images/';

export default class Hikes {
	constructor(elementId) {
		this.parentElement = document.getElementById(elementId);
		this.backButton = this.buildBackButton();
	}

	getAllHikes() {
		return hikeObjectArray;
	}
	// find each individual hike
	getHikeByName(hikeName) {
		return this.getAllHikes().find((hike) => hike.name === hikeName);
	}
	//show full list of hikes
	showHikeList() {
		this.parentElement.innerHTML = '';
		renderHikeList(this.parentElement, this.getAllHikes());
		this.addHikeListener();
		// when showing the full list - do not show the back button
		this.backButton.classList.add('hidden');
	}
	// show one hike with full details
	showOneHike(hikeName) {
		const hike = this.getHikeByName(hikeName);
		this.parentElement.innerHTML = '';
		this.backButton.classList.remove('hidden');
		this.parentElement.appendChild(renderHikeDetails(hike));
	//requirement insert showCommentsList into Hikes class
		hikeComments.showCommentList(hike.name);
	}
	addHikeListener() {
		const hikesArr = Array.from(this.parentElement.children);
		hikesArr.forEach((item) => {
			item.addEventListener('click', (event) => {
				this.showOneHike(event.currentTarget.dataset.name);
			});
		});
	}
	buildBackButton() {
		const backButton = document.createElement('button');
		backButton.textContent = 'Back to List';
		backButton.addEventListener('click', () => {
			this.showHikeList();
		});
		this.parentElement.before(backButton);
		return backButton;
	}
}
function renderHikeList(parent, hikesList) {
	hikesList.forEach((hike) => {
		parent.appendChild(renderOneHike(hike));
	});
	hikeComments.showCommentList();
}

function renderOneHike(hike) {
	const item = document.createElement('section');
	item.classList.add('listView');
	item.setAttribute('data-name', hike.name);
	item.innerHTML = ` 
  <figure class="hikeImage">
      <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
    </figure>
    <h1 class="hikeName">${hike.name}</h1>
    <ul class="hikeDetails">
      <li class="detail hikeDistance">Distance:<span> ${hike.distance}</span></li>
      <li class="detail hikeDifficulty">Difficulty:<span> ${hike.difficulty}</span></li>
  </ul>
  <button class="details">Show Hike Details</button>
  </article>
   
  `;
	return item;
}

function renderHikeDetails(hike) {
	const item = document.createElement('section');
	item.classList.add('full');
	item.innerHTML = ` <h2>${hike.name}</h2>
 <figure class="hikeImage_full">
      <p>${hike.description}</p>
      <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
  </figure>
  <div>
    <div>
      <h3>Distance</h3>
      <p>${hike.distance}</p>
    </div>
    <div>
      <h3>Difficulty</h3>
      <p>${hike.difficulty}</p>
    </div>
    <div>
      <h3>Directions</h3>
      <p>${hike.directions}</p>
    </div>
  </div>
  </section>`;
	return item;
}
