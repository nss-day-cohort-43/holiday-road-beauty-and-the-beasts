import { geocodeLocations, getRoute } from "./DirectionProvider.js"

const eventHub = document.querySelector("main")

let routeData

eventHub.addEventListener("routeBtnClicked", event => {
    geocodeLocations(event.detail).then((response) => {
        
        let locationsData = response
        console.log(locationsData)
        getRoute(locationsData)
        .then(response => {
            routeData = response
            console.log(routeData)
        })
        .then(renderRouteText)
    })
})

export const directionListener = () => {}

const renderRouteText = () => {


}
