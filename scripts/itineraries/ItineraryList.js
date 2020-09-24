import { ItineraryHTML } from "./Itinerary.js"
import { getItineraries, useItineraries } from "./itineraryProvider.js"

//an eventHUb to catch custom events
const eventHub = document.querySelector("main")

//targets the place in the DOM where we want to place the list of itineraries
const itineraryTarget = document.querySelector(".saved-itinerary")

//a function to fetch the saved itineraries and render them to the DOM
//also adds a save itinerary button
export const ItineraryList = () => {
    getItineraries()
    .then(useItineraries)
    .then(render)
    const saveBtnContainer = document.getElementById("saveBtnContainer")
    saveBtnContainer.innerHTML = `<button type="button" id="saveBtn" class="disabled">Save Itinerary</button>`
}

//a function to render an itinerayArray to the list of saved itineraries
const render = (itineraryArray) => {

    let itineraryListHTML = itineraryArray.map(itinerary => {
        return ItineraryHTML(itinerary)
    }).join("")
    itineraryTarget.innerHTML = itineraryListHTML
}

//a custom event listener that renders the new itinerary when one is saved
eventHub.addEventListener("itineraryStateChanged", () => {	
    const newItinerary = useItineraries()
    render(newItinerary)
})

//adds a click event for a hide route button, which returns the saved itineraries 
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideRoute") {
        ItineraryList()
    }

})