import { ParkSelect, stateSelect } from './parks/ParkList.js';
import { getParks, loadingParks } from './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import { attractionsPreviewListener } from './attractions/AttractionsPreview.js';
import { parkPreviewListener } from './parks/ParkPreview.js';
import { mainListenerForEatery } from './eateries/EateryPreview.js';

// This is for the mainListener calls
mainListenerForEatery();
//allows main to access the listener
parkPreviewListener();
attractionsPreviewListener();
// This is the end of the mainListener calls

stateSelect()
//lets the user know that the parks are loading
loadingParks()
//everything dealing with park data MUST be after getParks() bc it takes FOREVER
getParks().then(() => {
	ParkSelect();
	//add anything relating to a park HERE or else it won't run
});

eateryDropdownRender();

AttractionSelect();

