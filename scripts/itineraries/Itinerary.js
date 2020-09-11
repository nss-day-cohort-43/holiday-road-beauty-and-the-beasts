// a function that plugs in an Itinerary and makes html to display the saved itinerary
export const ItineraryHTML = (Itinerary) => {
    return `
    <div class="itinerary-card">
        <h3>Itinerary #${Itinerary.id}
        <ul>
            <li>${Itinerary.chosenPark}</li>
            <li>${Itinerary.chosenAttraction}</li>
            <li>${Itinerary.chosenEatery}</li>
        </ul>
    </div>   
    `
}
