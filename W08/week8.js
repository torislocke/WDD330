/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = [
	'<a href="./starWars/starShips.html">Team Project | Star Wars</a>',
	'<a href="../ExtraLearning/whackaMole/index.html">Whack a Mole Game (Wes Bos</a>',
	'<a href="notesW08.html">Week Eight Notes</a>',

];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);
