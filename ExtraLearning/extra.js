/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = [
	'<a href="piano/index.html">Drum Kit | Wes Bos</a>',
	'<a href="imageGallery/">Image Gallery | Wes Bos</a>',
	'<a href="W03/practice/digitalClock.html">Digital Clock | Wes Bos</a>',
	'<a href="practice/chuckNorris/">API Requests | JavaScript: Novice to Ninja, 2nd Edition</a>',
];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);
