import {ParkSelect} from './ParkList.js'
import defaultExport from '../Settings.js'

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
        return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateToFind}&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks
            }
        )
        .then(ParkSelect)
    }
})