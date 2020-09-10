import { useParks } from './ParkProvider.js'
const parkTarget = document.querySelector(".park")

//state abbreviations array
const stateArray = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];



//create drop down to chose state
export const stateSelect = () => {

}





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
                    return `<option value="${parkObj.id}">${parkObj.name}</option>`
                })

            }
        </select>
    `
}

const eventHub = document.querySelector("main")

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


