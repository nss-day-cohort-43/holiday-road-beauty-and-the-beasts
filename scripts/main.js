import { stateSelect } from './parks/ParkList.js';
import { parkListener } from './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import { attractionsPreviewListener } from './attractions/AttractionsPreview.js';
import { parkPreviewListener } from './parks/ParkPreview.js';
import { eateryPreviewListener } from './eateries/EateryPreview.js';
import { saveItinerary } from './itineraries/itineraryProvider.js';

// This is for the mainListener calls
eateryPreviewListener();
//allows main to access the listener
parkPreviewListener();
attractionsPreviewListener();
parkListener();
// This is the end of the mainListener calls

//lets the user know that the parks are loading
// loadingParks();
//everything dealing with park data MUST be after getParks() bc it takes FOREVER
getParks().then(() => {
	ParkSelect();
	//add anything relating to a park HERE or else it won't run
});
stateSelect();

eateryDropdownRender();

AttractionSelect();
