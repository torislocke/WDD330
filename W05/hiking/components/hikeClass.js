//create an array of hikes

// Set up the hike List class
class Hike {
	constructor(id, name, imgSrc, imgAlt, distance, difficulty, description, directions) {
		this.id = id;
		this.name = name;
		this.imgSrc = imgSrc;
		this.imgAlt = imgAlt;
		this.distance = distance;
		this.difficulty = difficulty;
		this.description = description;
		this.directions = directions;
	}

}
export default Hike;
