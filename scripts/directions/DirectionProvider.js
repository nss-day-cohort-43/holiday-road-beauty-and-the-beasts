import defaultExport from '../Settings.js';

let locationData = []
//this accesses the graphhopper api, giving it 3 locations and returning a lat and long for each
export const geocodeLocations = (itinerary) => {
	let locations = Object.values(itinerary)
	locations.pop()
	locations.unshift('nashville')
	const requests = locations.map(location => {
		return fetch(`https://graphhopper.com/api/1/geocode?q=${location}&locale=us&debug=true&key=${defaultExport.graphhopperKey}`)
			.then((response) => response.json())
	})
	return Promise.all(requests)
}
//this feeds the lat and long data from geocodeLocations() into graphhoppers route api and returns a route between all 3 destinations beginnng in nashville
export const getRoute = (locationsData) => {

	let location1= locationsData[0].hits[0].point
	let location2 = locationsData[1].hits[0].point
	let location3 = locationsData[2].hits[0].point
	let location4 = locationsData[3].hits[0].point

	return fetch(`https://graphhopper.com/api/1/route?point=${location1.lat},${location1.lng}&point=${location2.lat},${location2.lng}&point=${location3.lat},${location3.lng}&point=${location4.lat},${location4.lng}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${defaultExport.graphhopperKey}`)
		.then((response) => response.json())
		.then((parsedRoute) => {
			let route = parsedRoute
			return route
		})
}