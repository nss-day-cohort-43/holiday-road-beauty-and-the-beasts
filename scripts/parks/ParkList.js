import { useParks, getParks } from './ParkProvider.js'
const parkTarget = document.querySelector(".park")


//initial render of parks dropdown
export const ParkSelect = () => {
    getParks().then(()=> {
            const parks = useParks()
            render(parks)  
        })
}

//inner HTML of dropdown
const render = (parkCollection) => {
    parkTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Choose a Park!</option>
            ${
                parkCollection.map(parkObj => {
                    return `<option value="${parkObj.data.id}">${parkObj.data.name}</option>`
                })

            }
        </select>
    `
}