import { ParkSelect } from './parks/ParkList.js';
import { getParks, loadingParks } from './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import { meaninglessImport } from './attractions/AttractionsPreview.js';
import { parkPreviewListener } from './parks/ParkPreview.js';
import { eateryPreviewListener } from './eateries/EateryPreview.js';

// This is for the mainListener calls
eateryPreviewListener();
//allows main to access the listener
parkPreviewListener();
// This is the end of the mainListener calls

//lets the user know that the parks are loading
loadingParks();
//everything dealing with park data MUST be after getParks() bc it takes FOREVER
getParks().then(() => {
	ParkSelect();
	//add anything relating to a park HERE or else it won't run
});

eateryDropdownRender();

AttractionSelect();
