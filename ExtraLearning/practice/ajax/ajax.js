'use strict';
// AJAX XHR Version vs. Fetch with promise

// const smartyUrl =
//     'https://us-street.api.smartystreets.com/street-address?auth-id=96942503650349466&street=86%20Frontage%20Road&city=Belmont&state=MA&candidates=10';

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=96942503650349466&candidates=10';

const parksUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=0KQzSZtWF3r8nyuP6lctdEMFxxB90GxKbNmFenot';

// DOM selection of address fields
const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
const zipField = document.querySelector('#zip');
const parkThumb = document.querySelector('#specials h2 img');
const parkSection = document.querySelector('#specials');
const parkName = document.querySelector('#specials h2 a');
const parkDescription = document.querySelector('#specials p');

const smartyUpdateUISuccess = function (data) {
	// sucess take the json string and render as JS object/array
	const parsedData = JSON.parse(data);
	// console.log(parsedData);
	const zip = parsedData[0].components.zipcode;
	const plus4 = parsedData[0].components.plus4_code;
	// console.log(`${zip} - ${plus4}`);
	zipField.value = `${zip} - ${plus4}`;
};

const parkUpdateUISucess = function (data) {
	const parsedData = JSON.parse(data);
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
};

const responseMethod = function (httpRequest, succeed, fail) {
	if (httpRequest.readyState === 4) {
		if (httpRequest.status === 200) {
			succeed(httpRequest.responseText);
		} else {
			fail(`${httpRequest.status} : ${httpRequest.responseText}`);
		}
	}
};
// create XHR request object sends a request and logs the results - this can now pass any url
const createRequest = function (url, succeed, fail) {
	// create variable httpRequest to leverage later in code
	const httpRequest = new XMLHttpRequest(url);
	httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest, succeed, fail));
	httpRequest.open('GET', url);
	httpRequest.send(); // send the request
};
const checkCompletion = function () {
	// if there is information in each address field
	if (addressField.value !== '' && cityField.value !== '' && stateField.value !== '') {
		const requestUrl = `${smartyUrl} &street=${addressField.value}&city=${cityField.value}&state=${stateField.value}`;
		createRequest(requestUrl, smartyUpdateUISuccess, smartyUpdateUIError);
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
