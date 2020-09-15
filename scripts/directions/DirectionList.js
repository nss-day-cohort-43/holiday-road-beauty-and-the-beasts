import { geocodeLocations, getRoute } from "./DirectionProvider.js"

const eventHub = document.querySelector("main")
let routeData
eventHub.addEventListener("routeBtnClicked", event => {
    let locationsData = geocodeLocations(event.detail)
    console.log(locationsData)
        routeData = getRoute(locationsData)
        console.log(routeData)
    
})

export const directionListener = () => {}