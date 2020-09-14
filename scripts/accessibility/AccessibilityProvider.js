import { useParks } from "../parks/ParkProvider.js";
import defaultExport from '../Settings.js';

let parksGeneral = []
let parksMobility = []
let parksVision = []
let parksHearing = []

let parksAccessibilityAll =[]

let accesibleParks
let accessibleRoomParksArray
let accessibleSitesParksArray
let accessibleRestroomsParksArray
let accessibleParkParksArray
// useParks() 

const eventHub = document.querySelector("main")

export const useAllAccessibility = () => {
    let allAccessibility = []
    allAccessibility.push(parksGeneral, parksMobility, parksVision, parksHearing)
    parksAccessibilityAll = allAccessibility.flat()
}

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

    allAccessibility.vision.forEach(key => { 
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



    // fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=Assistive&api_key=${defaultExport.npsKey}`)
    //             .then(response => response.json()
    //             .then(
    //             parsedParks => {
    //                 parksAccessi = parsedParks

    //                 console.log(parksAccessi)
    //             }))


 








// export const fetchAccessInfo = () => {
//         fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=accessi&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
//             .then(response => response.json()
//             .then(
//             parsedParks => {
//                 parksAccessi = parsedParks
//             }))
//         .then( fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=animal&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
//             .then(response => response.json()
//             .then(
//                 parsedParks => {
//                     parksAnimal = parsedParks
//                 })))
//         .then(fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=assistive&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
//             .then(response => response.json()
//             .then(
//                 parsedParks => {
//                     parksAssistive = parsedParks
//             })))
//         .then(fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=audio&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
//             .then(response => response.json()
//             .then(
//             parsedParks => {
//                 parksAudio = parsedParks
//             })))
//         .then(fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=automated&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
//             .then(response => response.json()
//             .then(
//                 parsedParks => {
//                     parksAutomated = parsedParks
//             })))
//         .then (fetch(`https://developer.nps.gov/api/v1/amenities/parksplaces/?q=benches&api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
//             .then(response => response.json()
//             .then(
//                 parsedParks => {
//                     parksBenches = parsedParks
//             })))
//             debugger
// }

        






        
        
        // .then(ParkSelect)
    

