/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = [
	'<a href="./hiking/hiking.html">Team Project | Hikes</a>',
	'<a href="./hiking/hikes.html">My Version | Hikes</a>',
	'<a href="notesW05.html">Week Five Notes</a>',
	'<a href="../ExtraLearning/piano/">Extra Learning / Drum Kit - Wes Bos</a>',
	'<a href="../ExtraLearning/imageGallery/">Extra Learning / Image Gallery - Wes Bos</a>',
];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);
