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

function CreateTableFromJSON() {
	var reservedList = [
		{
			name: 'abstract',
			url: '',
		},
		{
			name: 'await',
			url: '',
		},
		{
			name: 'boolean',
			url: '',
		},
		{
			name: 'break',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break" target="_blank">' +
				'Launch MDN website to view "Break" Information' +
				'</a>',
		},
		{
			name: 'byte',
			url: '',
		},
		{
			name: 'case',
			url: '',
		},
		{
			name: 'catch',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" target="_blank">' +
				'Launch MDN website to view "Catch" Information' +
				'</a>',
		},
		{
			name: 'char',
			url: '',
		},
		{
			name: 'class',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class" target="_blank">' +
				'Launch MDN website to view "Class" Information' +
				'</a>',
		},
		{
			name: 'const',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" target="_blank">' +
				'Launch MDN website to view "Const" Information' +
				'</a>',
		},
		{
			name: 'continue',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue" target="_blank">' +
				'Launch MDN website to view "Continue" Information' +
				'</a>',
		},
		{
			name: 'debugger',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger" target="_blank">' +
				'Launch MDN website to view "Debugger" Information' +
				'</a>',
		},
		{
			name: 'default',
			url: '',
		},
		{
			name: 'delete',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete" target="_blank">' +
				'Launch MDN website to view "Delete" Information' +
				'</a>',
		},
		{
			name: 'do',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while" target="_blank">' +
				'Launch MDN website to view "Do" Information' +
				'</a>',
		},
		{
			name: 'double',
			url: '',
		},
		{
			name: 'else',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" target="_blank">' +
				'Launch MDN website to view "Else" Information' +
				'</a>',
		},
		{
			name: 'enum',
			url: '',
		},
		{
			name: 'export',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export" target="_blank">' +
				'Launch MDN website to view "Export" Information' +
				'</a>',
		},
		{
			name: 'extends',
			url: '',
		},
		{
			name: 'false',
			url: '',
		},
		{
			name: 'final',
			url: '',
		},
		{
			name: 'finally',
			url: '',
		},
		{
			name: 'float',
			url: '',
		},
		{
			name: 'for',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" target="_blank">' +
				'Launch MDN website to view "For" Information' +
				'</a>',
		},
		{
			name: 'function',
			url: '',
		},
		{
			name: 'goto',
			url: '',
		},
		{
			name: 'if',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" target="_blank">' +
				'Launch MDN website to view "If" Information' +
				'</a>',
		},
		{
			name: 'implements',
			url: '',
		},
		{
			name: 'import',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">' +
				'Launch MDN website to view "Import" Information' +
				'</a>',
		},
		{
			name: 'in',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in" target="_blank">' +
				'Launch MDN website to view "In Operator" Information' +
				'</a>',
		},
		{
			name: 'instanceof',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank">' +
				'Launch MDN website to view "Instanceof" Information' +
				'</a>',
		},
		{
			name: 'int',
			url: '',
		},
		{
			name: 'interface',
			url: '',
		},
		{
			name: 'let',
			url: '',
		},
		{
			name: 'long',
			url: '',
		},
		{
			name: 'native',
			url: '',
		},
		{
			name: 'new',
			url: '',
		},
		{
			name: 'null',
			url: '',
		},
		{
			name: 'package',
			url: '',
		},
		{
			name: 'private',
			url: '',
		},
		{
			name: 'protected',
			url: '',
		},
		{
			name: 'public',
			url: '',
		},
		{
			name: 'return',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return" target="_blank">' +
				'Launch MDN website to view "Return" Information' +
				'</a>',
		},
		{
			name: 'short',
			url: '',
		},
		{
			name: 'static',
			url: '',
		},
		{
			name: 'super',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" target="_blank">' +
				'Launch MDN website to view "Super" Information' +
				'</a>',
		},
		{
			name: 'switch',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch" target="_blank"> ' +
				'Launch MDN website to view "Switch" Information' +
				'</a>',
		},
		{
			name: 'synchronized',
			url: '',
		},
		{
			name: 'this',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" target="_blank">' +
				'Launch MDN website to view "This" Information' +
				'</a>',
		},
		{
			name: 'throw',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw" target="_blank">' +
				'Launch MDN website to view "Throw" Information' +
				'</a>',
		},
		{
			name: 'throws',
			url: '',
		},
		{
			name: 'transient',
			url: '',
		},
		{
			name: 'true',
			url: '',
		},
		{
			name: 'try',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" target="_blank">' +
				'Launch MDN website to view "Try" Information' +
				'</a>',
		},
		{
			name: 'typeof',
			url:
				'<a href"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof" target="_blank">' +
				'Launch MDN website to view "Typeof" Information' +
				'</a>',
		},
		{
			name: 'var',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var" target="_blank">' +
				'Launch MDN website to view "Var" Information' +
				'</a>',
		},
		{
			name: 'volatile',
			url: '',
		},
		{
			name: 'void',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void" target="_blank">' +
				'Launch MDN website to view "Void Operator" Information' +
				'</a>',
		},
		{
			name: 'while',
			url:
				'<a href"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" target="_blank">' +
				'Launch MDN website to view "While" Information' +
				'</a>',
		},
		{
			name: 'with',
			url:
				'<a href"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with" target="_blank">' +
				'Launch MDN website to view "With" Information' +
				'</a>',
		},
		{
			name: 'yield',
			url:
				'<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield" target="_blank">' +
				'Launch MDN website to view "Yeild" Information' +
				'</a>',
		},
	];

	const col = [];
	for (let i = 0; i < reservedList.length; i++) {
		for (let key in reservedList[i]) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	}

	// CREATE DYNAMIC TABLE.
	let table = document.createElement('table');

	// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

	let tr = table.insertRow(-1); // TABLE ROW.

	for (let i = 0; i < col.length; i++) {
		let th = document.createElement('th'); // TABLE HEADER.
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// ADD JSON DATA TO THE TABLE AS ROWS.
	for (let i = 0; i < reservedList.length; i++) {
		tr = table.insertRow(-1);

		for (let j = 0; j < col.length; j++) {
			let tabCell = tr.insertCell(-1);
			tabCell.innerHTML = reservedList[i][col[j]];
		}
	}

	// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
	var divContainer = document.getElementById('showData');
	divContainer.innerHTML = '';
	divContainer.appendChild(table);
}
