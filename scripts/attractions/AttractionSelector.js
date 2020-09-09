import { getAttractions, useAttractions } from "./AttractionProvider.js"
const selectorTarget = document.querySelector(".dropdown-container")

const render = attractionCollection => {
    selectorTarget.innerHTML += `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select an attraction...</option>
            ${
                attractionCollection.map(attractionObj => {
                    return `<option value=${attractionObj.id}>${attractionObj.name}</option>`
                })
            }                      
    `
}


export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            render(attractions)
        })
}