//create a function called getJSON(url). Add code to make the function do a fetch request using a url argument that should get passed in, and return the response in JSON.

export function getJSON(url) {
	return fetch(url)
		.then(function (response) {
			if (!response.ok) {
				throw Error(response.statusText);
			} else {
				return response.json();
			}
		})
		.catch(function (error) {
			console.log(error);
		});
}
//  Geolocation API to gain user location.
export const getLocation = function (options) {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
};