import defaultExport from '../Settings.js';


let route

export const geocodeLocations = (itinerary) => {
	let locationData =[]
	let locations = Object.values(itinerary)
	locations.pop()
	locations.unshift('nashville')
	locations.forEach(location =>{
		fetch (`https://graphhopper.com/api/1/geocode?q=${location}&locale=us&debug=true&key=${defaultExport.graphhopperKey}`)
			.then((response) => response.json())
				.then((parsedlocation) => {
					locationData.push(parsedlocation);
				})
			})
			return locationData
}


export const getRoute = (locationsData) => {
	// debugger;
	console.log(locationsData)
	console.log(locationsData[0])
	// console.log(Object.values(locationsData))
	// let location1 = locationsData.pop()
	// console.log(location1)
	
	// let location1= locationsData[0].hits[0].points
	let location2= locationsData[1].hits[0].points
	let location3= locationsData[2].hits[0].points
	let location4= locationsData[3].hits[0].points

	return fetch (`https://graphhopper.com/api/1/route?point=${location1.lat},${location1.lng}&point=${location2.lat},${location2.lng}&point=${location3.lat},${location3.lng}&point=${location4.lat},${location4.lng}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${defaultExport.graphhopperKey}`)
	.then((response) => response.json())
	.then((parsedRoute) => {
		route = parsedRoute
	})
}








/*
All 4 locations (Nashville, bizarrerie, eatery, and national park) need to be sent to Geocoding API to the the latitude and longitude for each one.

Then all 4 lat/long pairs should be in the URL for the request to the Routing API.

The step-by-step instructions in the response from the Routing API should be displayed below the Itinerary Preview section.

	
	<button type=button id="routeDisplay--${Itinerary.id}">Get Route</button>

eventHub.addEventListener("clicks", (event) => {
    if(event.target.id.contains("routeDisplay")){
        console.log("route clicked")
        const [prefix, routeNum] = event.target.id.split("--")
        const routeEvent = new CustomEvent("routeBtnClicked", {
            detail: {
                routeId: routeNum
            }
        })
        eventHub.dispatchEvent(routeEvent)
    }
})

	*/