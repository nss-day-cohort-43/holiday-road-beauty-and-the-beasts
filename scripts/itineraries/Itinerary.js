import {getSelectedAttraction} from '../attractions/AttractionsPreview.js'
export const ItineraryHTML = (Itinerary) => {
    getItineraryData()
    return `
    <div class="itinerary-card">
        <h3>Itinerary #${Itinerary.id}
        <ul>
            <li>${parkObj.name}</li>
            <li>${attractionObj.name}</li>
            <li>${Itinerary.chosenEatery}</li>
        </ul>
    </div>   
    `
}
let attractionObj
let parkObj
// const parkInfo = parkInfoCopy()
// console.log(parkInfo)
const getItineraryData= (Itinerary)=> {
    parkObj = parkInfoCopy()
    attractionObj = getSelectedAttraction()
    console.log(attractionObj)
}