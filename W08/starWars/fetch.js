'use strict';
// Fetch with promise
// must use polyfill for older browser support

// create specific urls to retrieve information
const filmsURL = 'http://swapi.dev/api/films/';
const peopleURL = 'http://swapi.dev/api/people/';
const planetsURL = 'http://swapi.dev/api/planets/';
const speciesURL = 'http://swapi.dev/api/species/';
const vehiclesURL = 'http://swapi.dev/api/vehicles/';
const starshipsURL = 'http://swapi.dev/api/starships/';

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
			const html = data.data.map((people) => {
				return `<p>Name: ${people.name}</p>`;
			}).join('');
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
	fetch(starshipsURL)
		// returned promise
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR');
			}
			return response.json();
		})

		.then((data) => {
			console.log(data.data);
			const html = data.data.map((starship) => {
				return `<p>Name: ${starship.name}</p>`;
			});
			console.log(html);
			document.querySelector('#apiInfo').insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
		})
		.catch((error) => {
			console.log(error);
		});
}


