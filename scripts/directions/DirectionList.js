import { geocodeLocations, getRoute } from "./DirectionProvider.js"

const eventHub = document.querySelector("main")

let routeData

eventHub.addEventListener("routeBtnClicked", event => {
    geocodeLocations(event.detail).then((response) => {
        
        let locationsData = response
        getRoute(locationsData)
        .then(response => {
            routeData = response
            console.log(routeData)
            return routeData
        })
    })
})

export const directionListener = () => {}

const renderRouteText = () => {}
