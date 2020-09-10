export const ItineraryList = () => {
    getItinerary()
    .then(useItinerary)
    .then(render)

}

const render = (itinerary) => {


}

eventHub.addEventListener("itineraryStateChanged", () => {	
    const newItinerary = useItinerary()
    render(newItinerary)
})

///
//
//
//
// have yet to decide how I'm connecting the id's in the database to more information

//maybe make the cards clickable and have a button that pulls the preview  of the saved itinerary back up
