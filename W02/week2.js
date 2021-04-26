/* foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach*/

const projects = ['<a href="teamW02.html">Team Activity</a>', '<a href="notesW02.html">Week Two Notes</a>'];

const article = document.querySelector('article');
let projectList = document.createElement('ul');

projects.forEach((item) => {
	let listItem = document.createElement('li');
	listItem.innerHTML = item;
	projectList.append(listItem);
});
article.append(projectList);


	fetch('reserved.json')
		// recieve promise and save into response.json
		.then(function (response) {
			return response.json();
		})
		.then(function (result) {
			let output = '<table><thead><tr><th>Name</th><th>URL</th></thead><tbody>';
			for (let i in result) {
				output += '<tr><td>' + result[i].name + '</td><td>' + result[i].url + '</td></tr>';
			}
			output += '</tbody></table>';
			displayResources.innerHTML = output;
		});
};
