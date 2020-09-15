import { stateSelect } from './parks/ParkList.js';
import { parkListener } from './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import { attractionsPreviewListener } from './attractions/AttractionsPreview.js';
import { parkPreviewListener } from './parks/ParkPreview.js';
import { ItineraryList } from './itineraries/ItineraryList.js';
import { fetchAccessInfo } from './accessibility/AccessibilityProvider.js';

import { weatherListener } from './weather/WeatherProvider.js';
import { eateryPreviewListener } from './eateries/EateryPreview.js';
import { itineraryListener } from './itineraries/itineraryProvider.js';
import { eateryAccessIcons } from './accessibility/AccessibilityFilter.js';
import {accessListener} from './parks/AccessibilitySelect.js'

// This is for the mainListener calls
eateryPreviewListener();
parkPreviewListener();
attractionsPreviewListener();
parkListener();
weatherListener();
accessListener();
itineraryListener();
// This is the end of the mainListener calls

stateSelect();

eateryDropdownRender()
//this adds accessiblity icons to the dropdown menu.  
//It waits one second in order to give the dropdown fetch time.
setTimeout(eateryAccessIcons, 1000);
//creates a dropdown attractions menu
AttractionSelect();
// this should make the itinerary section work.
ItineraryList();

// saveItinerary();

fetchAccessInfo()
