// create a table of contents object with nested objects of weekly contents

// create object template by using classes
// two ways first is to create a class declaration:  class Name  {}
// second and now preferred way is create class expression: const Name = class {}
const weekContent = class {
	constructor(
		// define parameters:
		name,
        url,
        dateCompleted,
		lastUpdated
	) {
		// define properties this points to the current object
		this.name = name;
        this.url = url;
        this.dateCompleted = dateCompleted;
		this.lastUpdated = lastUpdated;
    }
    // method for weekContent
    daysSinceComplete() {
        let now = new Date();
        let completed = new Date(this.dateCompleted);
        let elapsed = now - completed; // time since completed in milliseconds
        let daysSinceCompleted = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceCompleted;
      
    }
};

export default weekContent;

// future implementation
// import weekContent from './js/tableOfContents';

// const tableOfContents = new weekContent('Week 1', '/W01/index.html', 'April 16, 2021');
// console.log('Days since completed:', tableOfContents.daysSinceComplete());
