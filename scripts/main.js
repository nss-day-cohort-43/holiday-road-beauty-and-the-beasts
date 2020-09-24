import './parks/ParkList.js';
import './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import './attractions/AttractionsPreview.js';
import './parks/ParkPreview.js';
import { ItineraryList } from './itineraries/ItineraryList.js';
import { fetchAccessInfo } from './accessibility/AccessibilityProvider.js';

import './weather/WeatherProvider.js';
import './eateries/EateryPreview.js';
import './itineraries/itineraryProvider.js';
import { eateryAccessIcons } from './accessibility/AccessibilityFilter.js';
import './parks/AccessibilitySelect.js'
import './directions/DirectionList.js';
import { stateSelect } from './parks/ParkList.js';

stateSelect();

eateryDropdownRender()
//this adds accessiblity icons to the dropdown menu.  
//It waits one second in order to give the dropdown fetch time.
setTimeout(eateryAccessIcons, 1000);
//creates a dropdown attractions menu
AttractionSelect();
// this should make the itinerary section work.
ItineraryList();

fetchAccessInfo()
