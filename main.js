const projects = [
	'<a href="W01">Week 1</a>',
	'<a href="W02">Week 2</a>',
	'<a href="W03">Week 3</a>',
	'<a href="W04">Week 4 | Team Activity - TicTacToe</a>',
	'<a href="W05">Week 5 | Team Activity - Hiking</a>',
	'<a href="W06">Week 6 | To-Do List Application</a>',
	'<a href="W07">Week 7 | Team Activity - Hiking </a>',
	'<a href="W08">Week 8 | Team Activity - Star Wars API</a>',
	'<a href="W09">Week 9 | Team Activity - Drum Soundboard</a>',
	'<a href="W10">Week 10 | Team Activity - Earthquake API</a>',
	'<a href="W11">Week 11 | Team Activity - Authentication JSON Web Token</a>',
	'<a href="final/recipe/">Final Project | API Recipe Search</a>',
	'<a href="ExtraLearning">Extra Learning</a>',
	'<a href="quiz">Building Ninja Quiz</a>',
];

/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});

article.append(projectList);
