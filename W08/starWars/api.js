// create an empty array
let starShipsArray = [];

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('https://swapi.dev/api/starships/', {
	method: 'GET', // Star Wars data from SWAPI
})
	.then(response => response.json())


	.then((starships) => {
		let ships = starships.results;
		let nextURL = starships.next;
		let previousURL = starships.previous;
		const previous = document.getElementById('previous');
		const next = document.getElementById('next');

		showShips(ships);

		if (nextURL) {
			next.onclick = () => fetchTen(nextURL);
		}

		if (previousURL) {
			previous.onclick = () => fetchTen(previousURL);
		}
	});

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
	const next = document.getElementById('next');
	const previous = document.getElementById('previous');
	if (url) {
		fetch(url)
			.then((response) => response.json())
			.then((nextShips) => {
				showShips(nextShips.results);

				nextURL = nextShips.next;
				previousURL = nextShips.previous;

				if (nextURL) {
					next.onclick = () => fetchTen(nextURL);
				}

				if (previousURL) {
					previous.onclick = () => fetchTen(previousURL);
				}
			});
	}
}
