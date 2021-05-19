import hikeObjectArray from './components/data.js';

const imgBasePath = '//byui-cit.github.io/cit261/examples/';
//on load grab the array and insert it into the page
// window.addEventListener('load', () => {
// 	hikeList;
// });

const hikeList = hikeObjectArray.map((hike) => {
	let hikeArticle = document.createElement('article');
	hikeArticle.classList.add('hike');
	hikeArticle.setAttribute('id', hike.id);

	hikeArticle.innerHTML = `
    <figure class="hike__image">
    <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></
    </figure>
    <h1 class="hike__name">${hike.name}</h1>
    <ul class="hike__features">
      <li class="feature hike__distance">Distance:<span> ${hike.distance}</span></li>
      <li class="feature hike__difficulty">Difficulty:<span> ${hike.difficulty}</span></li>
       <li class="hide">Description: <span>${hike.description ? 'hide' : 'show'}</span></li>
    </ul>
    <button class="details">Show Hike Details</button>
  `;

	const button = hikeArticle.querySelector('.details');
	const status = hikeArticle.querySelector('.hide');
	button.addEventListener('click', (event) => {
		button.innerText === 'Show Hike Details'
			? (button.innerText = 'Hide Hike Details')
			: (button.innerText = 'Show Hike Details');
		status.classList.toggle('hide');
	});
	return hikeArticle;
});

const main = document.querySelector('.maincontent');

hikeList.forEach((hike) => {
	main.append(hike);
});
