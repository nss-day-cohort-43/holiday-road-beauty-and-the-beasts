import { stateSelect } from './parks/ParkList.js';
import { parkListener } from './parks/ParkProvider.js';
import { eateryDropdownRender } from './eateries/EateryList.js';
import { AttractionSelect } from './attractions/AttractionSelector.js';
import { attractionsPreviewListener } from './attractions/AttractionsPreview.js';
import { parkPreviewListener } from './parks/ParkPreview.js';
import { ItineraryList } from './itineraries/ItineraryList.js';
import { listener } from './accessibility/AccessibilityProvider.js';

import { weatherListener } from './weather/WeatherProvider.js';
import { eateryPreviewListener } from './eateries/EateryPreview.js';
import { saveItinerary } from './itineraries/itineraryProvider.js';

// This is for the mainListener calls
eateryPreviewListener();
parkPreviewListener();
attractionsPreviewListener();
parkListener();
weatherListener();
// This is the end of the mainListener calls

stateSelect();

eateryDropdownRender();
//creates a dropdown attractions menu
AttractionSelect();