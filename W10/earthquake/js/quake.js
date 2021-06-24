import { getEarthquakes } from './utilities.js';
// Quake Model
export default class Quake {
	constructor() {
		this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
		this._quakes = [];
	}
	async getEarthQuakesByRadius(
		position,
		radius = document.getElementById('radius').value,
		start = document.getElementById('startDate').value + 'T00:00',
		end = document.getElementById('endDate').value + 'T00:00',
	) {
		const newURL = `${this.baseUrl}&starttime=${start}&endtime=${end}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
		this._quakes = await getEarthquakes(newURL);
		return this._quakes;
	}
	getQuakeById(id) {
		return this._quakes.features.filter((item) => item.id === id)[0];
	}
}
