// requirement
// create class with constructor prototype

// import local storage helpers
import * as lsHelpers from './utilities.js';

class commentModel {
	//methods and properties shared by all kinds of comments
	constructor(type) {
		this.type = type;
		this.comments = lsHelpers.readFromLocalStorage(this.type) || [];
	}

	filterCommentsByName(name) {
		//method to filter and pull comments that apply to a single selected item
		const filteredArray = getAllComments().filter((item) => item.name == name);
		return filteredArray;
	}
	getComments(category = null) {
		//method to get whichever comment list is requested
		if (category === null) {
			return this.comments;
		} else {
			return this.comments.filter((item) => item.name == category);
		}
	}
	addComment(hikeName, userInput) {
		//method to create a new comment to be added to the array
		//create a new comment object
		const newComment = {
			name: hikeName,
			date: new Date(),
			comment: userInput,
		};
		//add this object to the array of comments
		this.comments.push(newComment);
		//set the LocalStorage array to include this new object
		lsHelpers.writeToLocalStorage(this.type, this.comments);
	}
}

//create the comment text area
const commentForm = `
    <h3>Comments</h3>
    <form class="commentForm">
        <label class="commentsLabel">Add a Comment</label>
        <textarea id="user_comment" placeholder="Enter your comments here..."></textarea>
        <br />
        <button type="submit" id="comment_submit">Add Comment</button>
    </form>
	<h3 class="seeAllComments">Review All Comments</h3>
    <ul class="commentList" id="commentList"></ul>`;

	
function formatDate(dateObject) {
	dateObject = new Date(dateObject);
	const year = dateObject.getFullYear();
	const date = dateObject.getDate();
	const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const month = monthsArr[dateObject.getMonth()];
	const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const day = daysArr[dateObject.getDay()];
	const time = `${dateObject.getHours()}:${dateObject.getMinutes()}`;
	const dateFormatted = `${day}, ${month} ${date}, ${year} ${time}`;
	return dateFormatted;
}

function renderCommentList(parent, commentArray) {
	//reset the parent element
	parent.innerHTML = '';
	//add an item for each comment
	commentArray.forEach((commObject) => {
		let item = document.createElement('li');
		item.innerHTML = `
	
            <h5>${commObject.name} &mdash; ${formatDate(commObject.date)}  </h5>
            <p class="comm-notes">${commObject.comment}</p>`;
		parent.appendChild(item);
	});
}

export default class Comments {
	constructor(type, commentElementID) {
		this.type = type;
		this.commentElementID = commentElementID;
		this.model = new commentModel(this.type);
	}
	addSubmitListener(commentName) {
		let userComment = document.getElementById('user_comment');
		//when submit comment button is pressed...
		document.getElementById('comment_submit').onclick = () => {
			//grab the standard comment model with these parameters
			this.model.addComment(commentName, userComment.value);
			//then reset the field to empty
			userComment.value = '';
			//and show the comment list
			this.showCommentList(commentName);
		};
	}
	showCommentList(category = null) {
		const parent = document.getElementById('comments');
		//if there are no comments yet, add the comment form
		if (parent.innerHTML === '') {
			parent.innerHTML = commentForm;
		}
		if (category !== null) {
			//if a category/filter is selected, show the new comment input
			document.querySelector('.seeAllComments').classList.add('hidden');
			document.querySelector('.commentForm').classList.add('block');
			this.addSubmitListener(category);
		} else {
			//if on the main page (displaying all comments) do not include new comment form
			document.querySelector('.seeAllComments').classList.remove('hidden');
			document.querySelector('.commentForm').classList.add('hidden');
		}
		//get the comment array from the model
		let commentArr = this.model.getComments(category);
		renderCommentList(parent.lastChild, commentArr);
	}
}
