/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = [
	'<a href="./practice/animation/index.html">JavaScript Ninja | Animation </a>',

	'<a href="../quiz/index.html">Ninja Game</a>',
	'<a href="notesW09.html">Week Nine Notes</a>',
];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);
