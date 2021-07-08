'use strict';
// Fetch with promise
// must use polyfill for older browser support
const searchRecipe = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
const container = document.querySelector('.container');

const apiKey = '0KQzSZtWF3r8nyuP6lctdEMFxxB90GxKbNmFenot';
// const searchState = document.querySelector('.state');
const searchState = '';
function stateSelection() {
	let searchState = document.querySelector('.state').value;
	fetchParks(parksUrl);
	console.log(searchState);
}

const parksUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${searchState}&api_key=${apiKey}`;

const parksFallback = {
	url: 'https://www.nps.gov/alca/index.htm',
	fullName: 'Alcatraz Island',
	description:
		"Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
};
// DOM selection of fields
const parkThumb = document.querySelector('#specials h2 img');
const parkSection = document.querySelector('#specials');
const parkName = document.querySelector('#specials h2 a');
const parkDescription = document.querySelector('#specials p');
let parkList = document.createElement('ul');
const fetchParks = async () => {
	try {
		const res = await fetch(`${parksUrl}`);
		if (!res.ok) {
			throw new Error(res.status);
		}
		const data = await res.json();
		const article = document.querySelector('.park');
		let parks = [];
		parks.forEach((item) => {
			let listItem = document.createElement('li');
			listItem.innerHTML = item;
			parkList.append(listItem);
		});

		article.append(parkList);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

// function parksCard(results) {
// 	container.classList.remove('initial');
// establish empty recipe
// let viewParks = '';
// loop through results and create recipe cards

// parks.forEach((item) => {
// let listItem = document.createElement('li');
// 	viewParks += `
//   <div class="card">
//     <h1>${result.data.fullName}</h1>
//     <div class="titleBlock">
//       <p>${result.data.description}</p>

//       <span><a class="view-btn" target="_blank" href="${result.data.url}">Park Website<ion-icon name="open"></ion-icon></a></span>
//     </div>

//     <p class="card-data">Cuisine Type: ${result.data.operatingHours}</p>
//      <p class="card-data">Ingredients: ${result.data.entranceFfees}</p>
//   </div>
// `;
// });
// searchResult.innerHTML = viewRecipe;
// }
