import { useParks } from './ParkProvider.js'

//defines the eventHub
const eventHub = document.querySelector("main")


//state abbreviations array
const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

//targets where to put state dropdown
const stateTarget = document.querySelector(".state")

//create drop down to chose state
export const stateSelect = () => {
    stateTarget.innerHTML = `
        <select class="dropdown" id="stateSelect">
            <option value="0">Choose a State!</option>
        </select>`
    const selectTarget = document.querySelector("#stateSelect")
    let stateSelectHTML = ""
    for (const place of states) {
        stateSelectHTML += renderStates(place)
    }
    selectTarget.innerHTML += `
        ${stateSelectHTML}
    `
}

//state option HTML
const renderStates = (stateObj) => {
    return `<option value="${stateObj}">${stateObj}</option>`
}

//adds an event listener for when state is chosen
eventHub.addEventListener("change", event => {
    if(event.target.id ==="stateSelect"){
        const stateValue = event.target.value
        const stateChosenEvent = new CustomEvent("stateChosen", {
            detail: {
                stateWanted: stateValue
            }
        })
        eventHub.dispatchEvent(stateChosenEvent)
    }
})


//targets html location for park select
const parkTarget = document.querySelector(".park")

//initial render of parks dropdown
export const ParkSelect = () => {
        const parkList = useParks()
        render(parkList)  
}

//inner HTML of dropdown
const render = (parkCollection) => {
    parkTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Choose a Park!</option>
            ${
                parkCollection.map(parkObj => {
                    return `<option value="${parkObj.fullName}">${parkObj.fullName}</option>`
                })

            }
        </select>
    `
}

//defines custom event for when park is chosen
eventHub.addEventListener("change", event => {
    if (event.target.id === "parkSelect"){
        const parkId = event.target.value

        const parkChosenEvent = new CustomEvent("parkChosen", {
            detail: {
                parkIdChosen: parkId
            }
        })
        eventHub.dispatchEvent(parkChosenEvent)
    }
})


