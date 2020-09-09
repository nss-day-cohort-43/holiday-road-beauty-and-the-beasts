import { getAttractions, useAttractions } from "./AttractionProvider.js"
//picks the DOM target for the dropdown menu
const selectorTarget = document.querySelector(".attraction")

//creates the HTML for a dropdown menu and iterated the array passed in to create the options
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

/*creates the dropdown menu by using the supplied functions 
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
