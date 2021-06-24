// Quake View handler
export default class QuakesView {
	renderQuakeList(quakeList, listElement) {
		//build a list of the quakes...include the title and time of each quake then append the list to listElement. Add the id of the quake record as a data- property to the li. ie. <li data-id="">
		document.querySelector('#quakeList').classList.remove('detail');
		document.querySelector('.intro').classList.remove('hide');
		document.querySelector('.title').classList.add('hide');
		if (quakeList.features.length === 0) {
			listElement.textContent = `No quakes found within this radius.`;
		} else {
			listElement.textContent = '';
			quakeList.features.forEach((element) => {
				const earthQuake = document.createElement('li');
				earthQuake.setAttribute('data-id', element.id);
				earthQuake.textContent = `${element.properties.title} ${new Date(element.properties.time)}`;
				listElement.appendChild(earthQuake);
			});
		}
	}
	renderQuake(quake, element) {
		const quakeProperties = Object.entries(quake.properties);
		console.log(`the quake properties are ${quakeProperties}`);
		// for the provided quake make a list of each of the properties associated. Append the list to the provided element.
		document.querySelector('.intro').classList.add('hide');
		document.querySelector('#quakeList').classList.add('detail');
		document.querySelector('.title').classList.remove('hide')
		document.querySelector('.title').textContent = 'Earthquake Details';

		element.innerHTML = quakeProperties
			.map((earthQuake) => {
				if (earthQuake[1] !== null) {
					if (earthQuake[0] === 'time' || earthQuake[0] === 'updated') {
						return `<li>${earthQuake[0]}: ${new Date(earthQuake[1])}</li>`;
					} else return `<li>${earthQuake[0]}: ${earthQuake[1]}</li>`;
				}
			})
			.join('');
	}
}
