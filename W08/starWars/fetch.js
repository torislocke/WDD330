'use strict';
// Fetch with promise
// must use polyfill for older browser support

// create an empty array
let filmsArray = [];
let peopleArray = [];
let planetsArray = [];
let speciesArray = [];
let vehiclesArray = [];
let starShipsArray = [];

// create specific urls to retrieve information
const filmsURL = 'http://swapi.dev/api/films/';
const peopleURL = 'http://swapi.dev/api/people/';
const planetsURL = 'http://swapi.dev/api/planets/';
const speciesURL = 'http://swapi.dev/api/species/';
const vehiclesURL = 'http://swapi.dev/api/vehicles/';

// create specific urls to retrieve information
const shipPage1URL = 'https://swapi.dev/api/starships/';
const shipPage2URL = 'https://swapi.dev/api/starships/?page=2';
const shipPage3URL = 'https://swapi.dev/api/starships/?page=3';
const shipPage4URL = 'https://swapi.dev/api/starships/?page=4';
const starshipsURL = 'https://swapi.dev/api/starships/';

// construct fallback positions if API call fails
const peopleFallback = {
	url: 'https://swapi.dev/api/people/1/',
	name: 'Luke Skywalker',
	homeworld: 'https://swapi.dev/api/planets/1/',
};
// connect event to type of information user wants to view
const people = document.querySelector('#people').addEventListener('click', getPeople);
const films = document.querySelector('#films').addEventListener('click', getFilms);
const planet = document.querySelector('#planets').addEventListener('click', getPlanets);
const species = document.querySelector('#species').addEventListener('click', getSpecies);
const vehicles = document.querySelector('#vehicles').addEventListener('click', getVehicles);
const starships = document.querySelector('#starships').addEventListener('click', getStarships);

function getPeople() {
	fetch(peopleURL)
		// returned promise
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR');
			}
			return response.json();
		})

		.then((data) => {
			console.log(data.data);
			const html = data.data
				.map((people) => {
					return `<p>Name: ${people.name}</p>`;
				})
				.join('');
			console.log(html);
			document.querySelector('#apiInfo').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
		})
		.catch((error) => {
			console.log(error);
		});
}

function getFilms() {
	fetch(filmsURL)
		// returned promise
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR');
			}
			return response.json();
		})

		.then((data) => {
			console.log(data.data);
			const html = data.data.map((films) => {
				return `<p>Name: ${films.name}</p>`;
			});
			console.log(html);
			document.querySelector('#apiInfo').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
		})
		.catch((error) => {
			console.log(error);
		});
}

function getPlanets() {
	fetch(planetsURL)
		// returned promise
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR');
			}
			return response.json();
		})

		.then((data) => {
			console.log(data.data);
			const html = data.data.map((planet) => {
				return `<p>Name: ${planet.name}</p>`;
			});
			console.log(html);
			document.querySelector('#apiInfo').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
		})
		.catch((error) => {
			console.log(error);
		});
}

function getSpecies() {
	fetch(speciesURL)
		// returned promise
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR');
			}
			return response.json();
		})

		.then((data) => {
			console.log(data.data);
			const html = data.data.map((species) => {
				return `<p>Name: ${species.name}</p>`;
			});
			console.log(html);
			document.querySelector('#apiInfo').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
		})
		.catch((error) => {
			console.log(error);
		});
}

function getVehicles() {
	fetch(vehiclesURL)
		// returned promise
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR');
			}
			return response.json();
		})

		.then((data) => {
			console.log(data.data);
			const html = data.data.map((vehicle) => {
				return `<p>Name: ${vehicle.name}</p>`;
			});
			console.log(html);
			document.querySelector('#apiInfo').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
		})
		.catch((error) => {
			console.log(error);
		});
}
function getStarships() {
	fetch(starshipsURL, {
		method: 'GET', // Star Wars data from SWAPI
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((starships) => {
			let ships = starships.results;
			let nextURL = starships.next;
			let previousURL = starships.previous;
			const previous = document.querySelector('#previous');
			const next = document.querySelector('#next');
			const loading = document.querySelector('#loading').classList.add('hide');
			showShips(ships);

			if (nextURL) {
				next.onclick = () => fetchTen(nextURL);
			}

			if (previousURL) {
				previous.onclick = () => fetchTen(previousURL);
			}
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});
}

// populate the starShipsArray
function showShips(ships) {
	apiInfo.innerHTML = '';
	for (let i = 0; i < ships.length; i++) {
		let apiContent = apiInfo.appendChild(createElement('section', ships[i].name, 'starships'));
		apiContent.addEventListener('click', details);
		apiContent.setAttribute('id', ships[i].name);
		starShipsArray.push(ships[i]);
	}
}
// display the details of a selected element
function details(event) {
	let target = event.target;
	let id = target.getAttribute('id');
	let ship = starShipsArray[selectShip(id)];
	let model = ship.model;
	let manufacturer = ship.manufacturer;
	let starship_class = ship.starship_class;
	let apiInfo = document.getElementById(id);
	let container = apiInfo.appendChild(createElement('ul', '', 'container'));
	container.appendChild(createElement('li', 'Model: ' + model, 'model'));
	container.appendChild(createElement('li', 'Manufacturer: ' + manufacturer, 'manufacturer'));
	container.appendChild(createElement('li', 'Class: ' + starship_class, 'starship_class'));

	const buttonClose = container.appendChild(createElement('input'));
	buttonClose.setAttribute('id', 'buttonClose');
	buttonClose.setAttribute('type', 'submit');
	buttonClose.setAttribute('value', 'Close Details');
	buttonClose.setAttribute('class', 'closeButton');
	buttonClose.addEventListener('click', close);
	target.removeEventListener('click', details);
}

function close() {
	let container = document.querySelectorAll('.container')[0];
	container.parentNode.removeChild(container);
}
function selectShip(id) {
	let selectShip = starShipsArray.findIndex((obj) => obj.name == id);
	return selectShip;
}

function createElement(tag, text, className) {
	const genElement = document.createElement(tag);
	genElement.textContent = text;
	genElement.classList.add(className);
	return genElement;
}

function fetchTen(url) {
	const next = document.querySelector('#next');
	const previous = document.querySelector('#previous');
	if (url) {
		fetch(url)
			.then((response) => response.json())
			.then((nextShips) => {
				showShips(nextShips.results);
				let nextURL = nextShips.next;
				let previousURL = nextShips.previous;

				if (nextURL) {
					next.onclick = () => fetchTen(nextURL);
				}

				if (previousURL) {
					previous.onclick = () => fetchTen(previousURL);
				}
			});
	}
}

// connect event to type of information user wants to view
const viewPage1 = document.querySelector('#page1').addEventListener('click', getPage1);
const viewPage2 = document.querySelector('#page2').addEventListener('click', getPage2);
const viewPage3 = document.querySelector('#page3').addEventListener('click', getPage3);
const viewPage4 = document.querySelector('#page4').addEventListener('click', getPage4);

function getPage1() {
	fetch(shipPage1URL, {
		method: 'GET', // Star Wars data from SWAPI
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// returned promise
			return response.json();
		})
		.then((starships) => {
			let ships = starships.results;
			let nextURL = starships.next;
			let previousURL = starships.previous;
			const previous = document.querySelector('#previous');
			const next = document.querySelector('#next');
			showShips(ships);

			if (nextURL) {
				next.onclick = () => fetchTen(nextURL);
			}

			if (previousURL) {
				previous.onclick = () => fetchTen(previousURL);
			}
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});
}

function getPage2() {
	fetch(shipPage2URL, {
		method: 'GET', // Star Wars data from SWAPI
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// returned promise
			return response.json();
		})
		.then((starships) => {
			let ships = starships.results;
			let nextURL = starships.next;
			let previousURL = starships.previous;
			const previous = document.querySelector('#previous');
			const next = document.querySelector('#next');
			showShips(ships);

			if (nextURL) {
				next.onclick = () => fetchTen(nextURL);
			}

			if (previousURL) {
				previous.onclick = () => fetchTen(previousURL);
			}
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});
}

function getPage3() {
	fetch(shipPage3URL, {
		method: 'GET', // Star Wars data from SWAPI
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// returned promise
			return response.json();
		})
		.then((starships) => {
			let ships = starships.results;
			let nextURL = starships.next;
			let previousURL = starships.previous;
			const previous = document.querySelector('#previous');
			const next = document.querySelector('#next');
			showShips(ships);

			if (nextURL) {
				next.onclick = () => fetchTen(nextURL);
			}

			if (previousURL) {
				previous.onclick = () => fetchTen(previousURL);
			}
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});
}

function getPage4() {
	fetch(shipPage4URL, {
		method: 'GET', // Star Wars data from SWAPI
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			// returned promise
			return response.json();
		})
		.then((starships) => {
			let ships = starships.results;
			let nextURL = starships.next;
			let previousURL = starships.previous;
			const previous = document.querySelector('#previous');
			const next = document.querySelector('#next');
			showShips(ships);

			if (nextURL) {
				next.onclick = () => fetchTen(nextURL);
			}

			if (previousURL) {
				previous.onclick = () => fetchTen(previousURL);
			}
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});
}
