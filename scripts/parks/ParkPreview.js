import {useParks} from './ParkProvider.js'

//listener doesn't work without a connection to main
export const mainListener = () => {
    console.log("I just need this so the main isn't lost")
}

//defines eventHub for listener
const eventHub = document.querySelector("main")
//defines where park info will be sent on page
const parkPreviewTarget = document.querySelector(".preview-park")

//listens for a change from park dropdown
eventHub.addEventListener("parkChosen", event => {
    if("parkIdChosen" in event.detail){
        //array of all the parks
        const allParks = useParks();
        //ID of chosen park
        const parkID = event.detail.parkIdChosen
        //filters all parks for JUST the chosen park
        const matchingPark = allParks.filter(parkObj => {
            if (parkObj.id === parkID){
                return true
            } else {
                return false
            }
        })
        //renders HTML of matching park
        renderParkPreview(matchingPark)
    }
})

//creates HTML for park
const renderParkPreview = (parkChosen) => {
    parkPreviewTarget.innerHTML = `
        <div class="park-card">
            ${
                parkChosen.map(parkObj => {
                    return `<div class="park-name">${parkObj.name}</div>
                    <a href="${parkObj.url}" target="_blank" class="park-site">Park Website</a>
                    <div class="location">${parkObj.addresses[1].city}, ${parkObj.addresses[1].stateCode}</div>
                    <button id="parkDetails">Details</button>
                    `
                })
            }
        </div>
    
    `
}