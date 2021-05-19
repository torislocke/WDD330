// Import the hikes class so we can make new hiking objects.
import Hike from './hikeClass.js';

// Create new hike object
const bechlerHike = new Hike(
	'hike01',
	'Bechler Falls',
	'//byui-cit.github.io/cit261/examples/',
	'Image of Bechler Falls',
	'3 miles',
	'Easy',
	'Beautiful short hike along the Bechler river to Bechler Falls',
	'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
);

// Create new Backpack object
const tetonHike = new Hike(
	'hike02',
	'Teton Canyon',
	'//byui-cit.github.io/cit261/examples/',
	'Image of Teton Canyon',
	'3 miles',
	'Easy',
	'Beautiful short (or long) hike through Teton Canyon.',
	'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
);
const denandaHike = new Hike(
	'hike03',
	'Denanda Falls',
	'//byui-cit.github.io/cit261/examples/',
	'Image of Bechler Falls',
	'7 miles',
	'Moderate',
	'Beautiful hike through Bechler meadows river to Denanda Falls',

	'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
);

// Add hiking objects into an array
const hikeObjectArray = [bechlerHike, tetonHike, denandaHike];

// Export the array to be used in other files
export default hikeObjectArray;
