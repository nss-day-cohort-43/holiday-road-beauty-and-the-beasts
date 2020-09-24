import { geocodeLocations, getRoute } from "./DirectionProvider.js"

const eventHub = document.querySelector("main")

//this event listener catches the "get route" button click and sends the details
//of the route to the graphhopper geolocation api.  this returns a lat and long for each location,
// then it feeds this data to get route, which uses the graphhopper api to provide a route between all the locations
eventHub.addEventListener("routeBtnClicked", event => {
    geocodeLocations(event.detail).then((response) => {  
        let locationsData = response
        getRoute(locationsData)
        .then(response => {
            let routeData = response
            return routeData
        })
        .then(renderRouteText)
    })
})
//this dives into the data returned from the graphhopper route api and returns an html string of all the directions, 
//then plug it into the DOM
const renderRouteText = (routeData) => {
    const target = document.querySelector(".saved-itinerary")
    let routeHTML  = `<ol>`
    routeHTML += routeData.paths[0].instructions.map(point => {
        return `<li>${point.text}</li>`
    }).join("")
    routeHTML += `</ol><button id="hideRoute">Hide Route</button>`
    target.innerHTML = routeHTML
}

