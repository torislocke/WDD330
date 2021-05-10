/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = [
	'<a href="heroForm.html">Form Example | Hero</a>',
	'<a href="searchForm.html">Form Example | Search</a>',
	'<a href="notesW04.html">Week Four Notes</a>',
	'<a href="ticTacToe.html">Team Project: Tic Tac Toe Game</a>',
];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);
