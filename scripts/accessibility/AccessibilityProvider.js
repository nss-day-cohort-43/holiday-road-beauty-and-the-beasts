import { useParks } from "../parks/ParkProvider.js";
import defaultExport from '../Settings.js';

let parksGeneral = []
let parksMobility = []
let parksVision = []
let parksHearing = []
let parksAccessibilityAll =[]

//creates a usable array of accessibility data on other pages
export const useAllAccessibility = () => {
    let allAccessibility = []
    allAccessibility.push(parksGeneral, parksMobility, parksVision, parksHearing)
    parksAccessibilityAll = allAccessibility.flat()
    return parksAccessibilityAll
}


//fetches all the accessibility data from the NPS API and stores it it 4 variables by category
export const fetchAccessInfo = () => {

    allAccessibility.hearing.forEach(key => { 
        let URLkey = encodeURI(key);
        // console.log(URLkey);
        return fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=${URLkey}&api_key=${defaultExport.npsKey}`)
        .then(response => response.json()
        .then(
            parsedParks => {
                if (parsedParks.data[0]) {
                parksHearing.push(parsedParks.data[0][0])
                }
        }))     
    })

    allAccessibility.vision.forEach(key => { 
        let URLkey = encodeURI(key);
        // console.log(URLkey);
        return fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=${URLkey}&api_key=${defaultExport.npsKey}`)
        .then(response => response.json()
        .then(
            parsedParks => {
                parksVision.push(parsedParks.data[0][0])
        }))     
    })

    allAccessibility.mobility.forEach(key => { 
        let URLkey = encodeURI(key);
        // console.log(URLkey);
        return fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=${URLkey}&api_key=${defaultExport.npsKey}`)
        .then(response => response.json()
        .then(
            parsedParks => {
                parksMobility.push(parsedParks.data[0][0])
        }))     
    })

    allAccessibility.general.forEach(key => { 
        let URLkey = encodeURI(key);
        // console.log(URLkey);
        return fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=${URLkey}&api_key=${defaultExport.npsKey}`)
        .then(response => response.json()
        .then(
            parsedParks => {
                parksGeneral.push(parsedParks.data[0][0])
        }))     
    })
 
}

//an array of all the accessibility features in the NPS api
const allAccessibility = {
    "hearing": [
        "Assistive Listening System", 
        "Assistive Listening System - T-Coil Compatible", 
        "Audio Description", 
        "Audio Description - Live",
        "Captioned Media",
        "Open Captioning"
    ],
    "vision": [
        "Braille",
        "Large Print",
        "Low-Vision Access",
        "Tactile Exhibit",
    ],
    "mobility": [
        "Accessible Rooms",
        "Accessible Sites",
        "Automated Entrance",
        "Benches/Seating",
        "Elevator",
        "Restroom - Accessible",
        "Wheelchair Accessible",
        "Wheelchairs Available",
    ],
    "general": [
        "Animal-Safe Food Storage",
        "Bus/Shuttle Stop",
        "Electrical Outlet/Cell Phone Charging",
        "First Aid/Medical Care Available",
    ]
}