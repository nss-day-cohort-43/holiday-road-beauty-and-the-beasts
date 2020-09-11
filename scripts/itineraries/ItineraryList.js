import { ItineraryHTML } from "./Itinerary.js"
import { getItineraries, useItineraries } from "./itineraryProvider.js"
const eventHub = document.querySelector("main")
const itineraryTarget = document.querySelector(".saved-itinerary")

export const ItineraryList = () => {
    getItineraries()
    .then(useItineraries)
    console.log()
    .then(render)

}

const render = (itineraryArray) => {

    console.log(itineraryArray)
    let itineraryListHTML = itineraryArray.map(itinerary => {
        return ItineraryHTML(itinerary)
    })
    console.log(itineraryListHTML)
    itineraryTarget.innerHTML = itineraryListHTML
}

eventHub.addEventListener("itineraryStateChanged", () => {	
    const newItinerary = useItineraries()
    render(newItinerary)
})




///
//
//
//
// have yet to decide how I'm connecting the id's in the database to more information

//maybe make the cards clickable and have a button that pulls the preview  of the saved itinerary back up

/*
parkInfoCopy - use to acces park name 
"detailsClicked" - mori's custom event that creates park details use to create an accessability feature

*/

// const parkInfo = parkInfoCopy()
// console.log(parkInfo)