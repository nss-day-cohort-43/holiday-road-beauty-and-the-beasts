import {useParks} from './ParkProvider.js'
import {getWeather} from '../weather/WeatherProvider.js'
import { weatherList } from '../weather/WeatherList.js'

//listener doesn't work without a connection to main
export const parkPreviewListener = () => {}

//defines eventHub for listener
const eventHub = document.querySelector("main")
//defines where park info will be sent on page
const parkPreviewTarget = document.querySelector(".preview-park")
//holds parks that was chosen after event
let parkArray = []

export const parkInfoCopy = () => {
    return parkArray.slice()
}

//listens for a change from park dropdown
eventHub.addEventListener("parkChosen", event => {
    if("parkIdChosen" in event.detail){
        //array of all the parks
        const allParks = useParks();
        //ID of chosen park
        const parkID = event.detail.parkIdChosen
        //filters all parks for JUST the chosen park
        const matchingPark = allParks.filter(parkObj => {
            if (parkObj.fullName === parkID){
                return true
            } else {
                return false
            }
        })
        //places matching park in park array
        parkArray = matchingPark
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
                        
                    `
                })
            }
            <div class="weather-container"></div>
            <button id="parkDetails">Details</button>
            <div class="park-detail-container"></div>
        </div>
    `
    getWeather()
        .then(()=>{
            weatherList()
        })
}


//listens for detail button click and runs the rendering functions
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "parkDetails" && clickEvent.target.textContent === "Details"){
        const detailsClickedEvent = new CustomEvent("detailsClicked", {})
        eventHub.dispatchEvent(detailsClickedEvent)
    }
})

eventHub.addEventListener("detailsClicked", event => {
    renderParkDetails(parkArray)
    renderParkAddress(parkArray)
})



//renders the details, except address
const renderParkDetails = (parkChosen) => {
    //defines where details of park will go on page
    const detailsTarget = document.querySelector(".park-detail-container")
    detailsTarget.innerHTML = `
    ${
        parkChosen.map(parkObj => {
            return `
                <div class="park-description">${parkObj.description}</div><br>
                <div class="park-address">${parkObj.addresses[0].line1}</div>
                <div class="location-details">${parkObj.addresses[0].city}, ${parkObj.addresses[0].stateCode} ${parkObj.addresses[0].postalCode}</div>
                <div class="park-fee">${parkObj.entranceFees[0].description}</div><br>
                <div class="park-hours">${parkObj.operatingHours[0].description}<br>
                </div>
            `
        })
    }
    `
}



//renders the park address
const renderParkAddress = (parkChosen) => {
    //targets address container from previous function
    const addressTarget = document.querySelector(".park-address")
    parkChosen.map(parkObj => {
        const addressObj = parkObj.addresses[0]
        //if address lines 2 or 3 are empty, this makes sure not to add them
        if(addressObj.line3 !==""){
            return addressTarget.innerHTML += `
            <br>${addressObj.line2}<br>${addressObj.line3}
            `
        } else if(addressObj.line2 !==""){
            return addressTarget.innerHTML += `
            <br>${addressObj.line2}
            `
        } else {
            return addressTarget.innerHTML += ""
    }})
    
}

eventHub.addEventListener("click", event => {
    if (event.target.id === "parkDetails" && event.target.textContent === "Details") {
        document.getElementById("parkDetails").textContent = "Hide Details"
    } else if (event.target.id === "parkDetails" && event.target.textContent === "Hide Details") {
        document.getElementById("parkDetails").textContent = "Details"
        const detailContainerTarget = document.querySelector(".park-detail-container")
        detailContainerTarget.innerHTML = ""
    }
})

