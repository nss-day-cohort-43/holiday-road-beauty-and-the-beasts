import {parkInfoCopy} from "./ParkPreview.js"
import defaultExport from "../Settings.js"
//allows main.js to recognize this module
export const accessListener = () => {}

//defines where html will render and event listener
const accessSelectTarget = document.querySelector(".park-detail-container")
const eventHub = document.querySelector("main")

//all types of accessibility services
const allAccessibility = [
    {title:"hearing",
     types: ["Assistive Listening System", 
        "Assistive Listening System - T-Coil Compatible", 
        "Audio Description", 
        "Audio Description - Live",
        "Captioned Media",
        "Open Captioning"]
    },
    {title: "vision",
     types: ["Braille",
        "Large Print",
        "Low-Vision Access",
        "Tactile Exhibit",]
    },
    {title: "mobility", 
     types: ["Accessible Rooms",
        "Accessible Sites",
        "Automated Entrance",
        "Benches/Seating",
        "Elevator",
        "Restroom - Accessible",
        "Wheelchair Accessible",
        "Wheelchairs Available",]
    },
    {title: "general",
     types: ["Animal-Safe Food Storage",
        "Bus/Shuttle Stop",
        "Electrical Outlet/Cell Phone Charging",
        "First Aid/Medical Care Available",
        "Information - Ranger/Staff Member Present"]
    }
]

//listens for detail button click to render access options
eventHub.addEventListener('detailsClicked', (event) => {
	renderAccessOption()
});

//defines html for access options
const renderAccessOption = () => {
    accessSelectTarget.innerHTML += `
        <div id="access-select">
            <div>View Accessibility Options:</div>
            <input type="checkbox" value="general"> 
            <label for="general">General</label>
            <input type="checkbox" value="hearing"> 
            <label for="hearing">Hearing</label>
            <input type="checkbox" value="vision"> 
            <label for="vision">Vision</label>
            <input type="checkbox" value="mobility"> 
            <label for="mobility">Mobility</label>
        </div>
        <div class="access-details"></div>
    `
}

//listens for a change in option boxes
eventHub.addEventListener("change", (event) => {
    if(event.target.type === "checkbox"){
        const accessValue = event.target.value
        const accessChosenEvent = new CustomEvent("accessChosen", {
            detail: {
                accessWanted: accessValue
            }
        })
        eventHub.dispatchEvent(accessChosenEvent)
    }
})

//will hold park accessibility of relevant park
let parkAccessibility


//fetches accessibility info for relevant park
eventHub.addEventListener("accessChosen", (event) => {
    const type = event.detail.accessWanted
    const _selector = document.querySelector(`input[value=${type}]`)
    if(_selector.checked){
    const parkChosen = parkInfoCopy()
    const officialParkCode = parkChosen[0].parkCode;
	return fetch(
		`https://developer.nps.gov/api/v1/amenities/parksplaces?parkCode=${officialParkCode}&api_key=${defaultExport.npsKey}`
	).then((response) =>
		response.json().then((parsedPark) => {
            parkAccessibility = parsedPark;
            renderAccessDetails(type)
		})
    )}
    else{
        // debugger
        const eraseContent = document.querySelector(`#${type}`)
        eraseContent.innerHTML = ""
    }
})

//defines html for each access type
const renderAccessDetails = (type) => {
    const accessDetailsTarget = document.querySelector(".access-details")
    if(accessDetailsTarget.innerHTML === ""){
    accessDetailsTarget.innerHTML = `<div class="details-card" id="${type}"></div>`}
    else{accessDetailsTarget.innerHTML += `<div class="details-card" id="${type}"></div>`}
    //iterates through categories of all accessibility types
    for(const obj of allAccessibility){
        //verifies type chosen to use
        if(obj.title === type){
            const parkToSearch = parkAccessibility.data
            //iterates through list of access types within selected category
            for(const specific of obj.types){
                //iterates through all of relevant park info
                for(const realAccess of parkToSearch){
                    //grabs only relevant array containing specific access type
                    if(realAccess[0].name === specific){
                        const specificDetailsTarget = document.querySelector(".details-card")
                        specificDetailsTarget.innerHTML += `
                            <div class="access-type">${realAccess[0].name}</div>
                        `;
                        //iterates through the park array
				        for (const park of realAccess[0].parks) {
                            //iterates through all places within park and defines HTML with link
                            for (const place of park.places) {
                                specificDetailsTarget.innerHTML += `
                                <a href="${place.url}" target="_blank" class="place-site">${place.title}</a><br>
                                `;
                            }
				        }
                    }
                }
            }
        }
    }
}