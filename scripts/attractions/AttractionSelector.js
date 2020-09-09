import { getAttractions, useAttractions } from "./AttractionProvider.js"
//picks the DOM target for the dropdown menu
const selectorTarget = document.querySelector(".attraction")

//selects an eventHub to hold custom events
const eventHub = document.querySelector("main")

//creates the HTML for a dropdown menu and iterated the array passed in to create the options
const render = attractionCollection => {
    selectorTarget.innerHTML += `
        <select class="dropdown" id="attractionSelect">
            <option value="0">Choose an attraction!</option>
            ${
                attractionCollection.map(attractionObj => {
                    return `<option value=${attractionObj.id}>${attractionObj.name}</option>`
                })
            }                      
    `
}

/*  creates the dropdown menu by using the supplied functions 
        -fetches the API data
        -copies it to a new array
        -plugs that array into the render function
*/
export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            render(attractions)
        })
    }

/*  listens for changes to the attraction dropdown menu and 
    creates a custom event that passed the id of the chosen attraction to the eventHub
*/
    eventHub.addEventListener("change", event => {
        if (event.target.id === "attractionSelect") {
            const customEvent = new CustomEvent ("attractionChosen", {
                detail: {
                    attractionId: event.target.value
                }
            })
            eventHub.dispatchEvent(customEvent)
        }
    
    })