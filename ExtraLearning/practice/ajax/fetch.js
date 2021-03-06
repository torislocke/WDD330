'use strict';
// Fetch with promise
// must use polyfill for older browser support

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=96942503650349466&candidates=10';

//   Headers() constructor. A headers object is a simple multi-map of names to values: below passes an array of arrays or an object literal to the constructor
const smartyInit = new Headers({
	'Content-Type': 'application/json',
	Host: 'us-street.api.smartystreets.com',
});

const parksUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=0KQzSZtWF3r8nyuP6lctdEMFxxB90GxKbNmFenot';

const parksFallback = {
	url: 'https://www.nps.gov/alca/index.htm',
	fullName: 'Alcatraz Island',
	description:
		"Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
};
// DOM selection of address fields
const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
const zipField = document.querySelector('#zip');
const parkThumb = document.querySelector('#specials h2 img');
const parkSection = document.querySelector('#specials');
const parkName = document.querySelector('#specials h2 a');
const parkDescription = document.querySelector('#specials p');

const smartyUpdateUISuccess = function (parsedData) {
	// sucess take the json string and render as JS object/array
	const zip = parsedData[0].components.zipcode;
	const plus4 = parsedData[0].components.plus4_code;
	// console.log(`${zip} - ${plus4}`);
	zipField.value = `${zip} - ${plus4}`;
};

const parkUpdateUISucess = function (parsedData) {
	console.log(parsedData);
	const number = Math.floor(Math.random() * parsedData.data.length);
	parkName.textContent = parsedData.data[number].fullName;
	parkName.href = parsedData.data[number].url;
	parkDescription.textContent = parsedData.data[number].description;
	parkThumb.src = 'https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png';
	parkSection.classList.remove('hidden');
};

const smartyUpdateUIError = function (error) {
	console.log(error);
};

const parkUpdateUIError = function (error) {
	console.log(error);
	// if no response, display the below data
	parkName.textContent = parksFallback.fullName;
	parkName.href = parksFallback.url;
	parkDescription.textContent = parksFallback.description;
	parkThumb.src = 'https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png';
	parkSection.classList.remove('hidden');
};

//Checking that the fetch was successful
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const handleErrors = function (response) {
	if (!response.ok) {
		throw new Error(`${response.status} : ${response.statusText}`);
	}
	return response.json(); //
};
const createRequest = function (url, succeed, fail, init) {
	fetch(url, init)
		.then((response) => handleErrors(response)) // parses response
		.then((data) => succeed(data)) //
		.catch((error) => fail(error));
};
const checkCompletion = function () {
	// if there is information in each address field
	if (addressField.value !== '' && cityField.value !== '' && stateField.value !== '') {
		const requestUrl = `${smartyUrl} &street=${addressField.value}&city=${cityField.value}&state=${stateField.value}`;
		createRequest(requestUrl, smartyUpdateUISuccess, smartyUpdateUIError, smartyInit);
	}
};
// call the function
// createRequest(smartyUrl);
// createRequest(parksUrl, parkUpdateUISucess, parkUpdateUIError);

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);

window.addEventListener('DOMContentLoaded', () => {
	createRequest(parksUrl, parkUpdateUISucess, parkUpdateUIError);
});
