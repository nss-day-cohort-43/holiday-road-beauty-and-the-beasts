import {ParkSelect} from './ParkList.js'
import defaultExport from '../Settings.js'
import {parkInfoCopy} from './ParkPreview.js'

//all parks will be added to this empty array
let parks = [];

//defines eventHub
const eventHub = document.querySelector("main")

//this will return a copy of the park data array
export const useParks = () => {
    return parks.data.slice()
}

//export so main.js recognizes this file
export const parkListener = () => {}

//event listener for state chosen that fetches relevant data
eventHub.addEventListener("stateChosen", event => {
    if("stateWanted" in event.detail){
        const stateToFind = event.detail.stateWanted
        return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateToFind}&api_key=${defaultExport.npsKey}`)
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks
            }
        )
        .then(ParkSelect)
    }
})

//stores accessibility data
let parkAccessibility 

//defines where accessibility HTML will be rendered
const parkAccessTarget = document.querySelector(".park-detail-container")

//listens for detail button clicked to fetch and render accessibility details
eventHub.addEventListener("detailsClicked", event => {
        const parkChosen = parkInfoCopy()
        const officialParkCode = parkChosen[0].parkCode
        return fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces?parkCode=${officialParkCode}&q=accessi&api_key=${defaultExport.npsKey}`)
        .then(response => response.json()
        .then(
            parsedPark => {
                parkAccessibility = parsedPark
                renderParkAccess()
            }
        )
    )
})

//defines park accessibility details
//code will be refactored to add specific place name details
const renderParkAccess = () => {
    parkAccessTarget.innerHTML += `<div class="accessibility-detail"></div>`
    const accessDetailTarget = document.querySelector(".accessibility-detail")
    let restroomAccess = ""
    let wheelchairAccess = ""
    let roomAccess = ""
    let siteAccess = ""
    for(const object of parkAccessibility.data){
        for(const object2 of object){
        if(object2.name === "Restroom - Accessible"){
            restroomAccess = "positive"
            accessDetailTarget.innerHTML += `<div>✔️ Accessible Restrooms</div>`
        }
        if(object2.name === "Wheelchair Accessible"){
            wheelchairAccess = "positive"
            accessDetailTarget.innerHTML += `<div>✔️ Wheelchair Accessible</div>`
        }
        if(object2.name === "Accessible Rooms"){
            roomAccess = "positive"
            accessDetailTarget.innerHTML += `<div>✔️ Accessible Rooms</div>`
        }
        if(object2.name === "Accessible Sites"){
            siteAccess = "positive"
            accessDetailTarget.innerHTML += `<div>✔️ Accessible Sites</div>`
        }
        }
    }
    if(restroomAccess === ""){
        accessDetailTarget.innerHTML += `<div>❌ Accessible Restrooms</div>`
    }
    if(wheelchairAccess === ""){
        accessDetailTarget.innerHTML += `<div>❌ Wheelchair Accessible</div>`
    }
    if(roomAccess === ""){
        accessDetailTarget.innerHTML += `<div>❌ Accessible Rooms</div>`
    }
    if(siteAccess === ""){
        accessDetailTarget.innerHTML += `<div>❌ Accessible Sites</div>`
    }
    accessDetailTarget.innerHTML += `<div>Please Call Ahead for More Accessibility Info.</div>`
}