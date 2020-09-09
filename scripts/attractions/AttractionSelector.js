import { getAttractions, useAttractions } from "./AttractionProvider.js"
const selectorTarget = document.querySelector(".dropdown-container")
const eventHub = document.querySelector("main")

const render = attractionCollection => {
    selectorTarget.innerHTML += `
        <select class="dropdown" id="attractionSelect">
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

eventHub.addEventListener("change", event => {
    console.log("change event")
    if (event.target.id === "attractionSelect") {
        console.log("change event if triggered")
        const customEvent = new CustomEvent ("attractionChosen", {
            detail: {
                attractionId: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }

})