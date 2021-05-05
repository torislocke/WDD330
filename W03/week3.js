/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = [
	'<a href="objectMethods.html">Objects</a>',
	'<a href="notesW03.html">Week Three Notes</a>',
	'<a href="teamActivityPartOne.html">Team Activity Part One (Wes Bos)</a>',
	'<a href="teamActivityPartTwo.html">Team Activity Part Two (Wes Bos)</a>',
	'<a href="./practice/digitalClock.html">Wes Bos Digital Clock</a>',
];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);
