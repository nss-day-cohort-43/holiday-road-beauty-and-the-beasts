import defaultExport from '../Settings.js';


export const geocodeLocations (attraction, eatery, park) {
    return fetch ("https://graphhopper.com/api/1/geocode?q=nashville&locale=us&debug=true&key=your_api_key
    ")
    .then((response) => response.json())
			.then((parsedlocation) => {
				let nashvilleLoc = parsedlocation;
			})
			.then(console.log);

}







/*
All 4 locations (Nashville, bizarrerie, eatery, and national park) need to be sent to Geocoding API to the the latitude and longitude for each one.

Then all 4 lat/long pairs should be in the URL for the request to the Routing API.

The step-by-step instructions in the response from the Routing API should be displayed below the Itinerary Preview section.




https://graphhopper.com/api/1/geocode?q=yosemite+national+park&locale=us&debug=true&key=your_api_key




*/