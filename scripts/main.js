import { stateSelect } from './parks/ParkList.js';
import { parkListener } from './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import { attractionsPreviewListener } from './attractions/AttractionsPreview.js';
import { parkPreviewListener } from './parks/ParkPreview.js';
import { mainListenerForEatery } from './eateries/EateryPreview.js';
import {saveItinerary} from './itineraries/itineraryProvider.js'

// This is for the mainListener calls
mainListenerForEatery();
parkPreviewListener();
attractionsPreviewListener();
parkListener();
// This is the end of the mainListener calls

stateSelect()

eateryDropdownRender();

AttractionSelect();

