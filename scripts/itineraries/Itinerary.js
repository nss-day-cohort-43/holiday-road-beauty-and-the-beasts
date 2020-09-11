import {getSelectedAttraction} from '../attractions/AttractionsPreview.js'
import { parkInfoCopy } from '../parks/ParkPreview.js'

// a function that plugs in an Itinerary and makes html to display the saved itinerary
export const ItineraryHTML = (Itinerary) => {
    getItineraryData()
    return `
    <div class="itinerary-card">
        <h3>Itinerary #${Itinerary.id}
        <ul>
            <li>${parkObj[0].fullName}</li>
            <li>${attractionObj.name}</li>
            <li>${Itinerary.chosenEatery}</li>
        </ul>
    </div>   
    `
}
// variables to store the currently selected park and attraction objects so that the name of them can be accessed for HTML
let attractionObj
let parkObj

//a function to get copies of the currently selected park and attraction
const getItineraryData= (Itinerary)=> {
    parkObj = parkInfoCopy()
    attractionObj = getSelectedAttraction()
}