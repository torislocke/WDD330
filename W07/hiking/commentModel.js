// import local storage helpers
import * as lsHelpers from './utilities.js';

// requirement create class with constructor prototype
class commentModel {
	constructor(type) {
		this.type = type;
		this.comments = lsHelpers.readFromLocalStorage(this.type) || [];
	}

	filterCommentsByName(name) {
		// requirement method to filter/sort comments by hikeName
		const filteredArray = getAllComments().filter((item) => item.name == name);
		return filteredArray;
	}
	// category is created by hikeName - to filter comments by a specific hike only
	getComments(category = null) {
		if (category === null) {
			return this.comments;
		} else {
			return this.comments.filter((item) => item.name == category);
		}
	}
	// requirement create comment object
	addComment(hikeName, userInput) {
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

// reused this code - need to update to simplify
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
	//reset the text area to empty
	parent.innerHTML = '';
	//add each comment
	commentArray.forEach((comment) => {
		let item = document.createElement('li');
		item.innerHTML = `
	        <h4>${comment.name} &mdash; ${formatDate(comment.date)}  </h4>
            <p class="commentContent">${comment.comment}</p>`;
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
			//  reset the textarea with placeholder content
			userComment.value = '';
			// display the new comment list
			this.showCommentList(commentName);
		};
	}
	// requirement create showCommentsList method
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
		let commentArray = this.model.getComments(category);
		renderCommentList(parent.lastChild, commentArray);
	}
}
