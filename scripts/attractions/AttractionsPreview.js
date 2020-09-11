import { AttractionPreviewHTML } from "./Attraction.js"
import { useAttractions } from "./AttractionProvider.js"
import { AttractionDetailsHTML } from "./Attraction.js"

//selects an eventHub to hold custom events
const eventHub = document.querySelector("main")

//selects the target for the preview card
const previewTarget = document.querySelector(".preview-attraction")

//creates an empty variable to store the currently selected attraction object 
let selectedAttraction
//pulls the function to create the HTML for the atraction card an places it in the DOM
const AttractionPreview = attraction => {
    const attractionHTML  = AttractionPreviewHTML(attraction)
    //change to += if we decide to add capability for more than attraction
    previewTarget.innerHTML = attractionHTML
}
/*
    listens for the custom event when an attraction is chosen, 
    and calls the AttractionPreview function to create the preivew card in the DOM 
*/
eventHub.addEventListener("attractionChosen", event => {
    if (event.detail.attractionId !== '0') {
        const attractionId = event.detail.attractionId
        selectedAttraction = useAttractions().find(attraction => {
            if (attraction.name === attractionId) {
                return true
            }
        })
        AttractionPreview(selectedAttraction)
    }
})

export const getSelectedAttraction =()=> {
    let copiedObject = Object.assign({}, selectedAttraction);
    return copiedObject
}

//listener for clicks on the details buton, adds more details to the preview card, 
//then changes the button to a hide button which hides the aforementioned details 
eventHub.addEventListener("click", event => {
    if (event.target.id === "attractionDetails" && event.target.textContent === "Details") {
        previewTarget.innerHTML += AttractionDetailsHTML(selectedAttraction)
        document.getElementById("attractionDetails").textContent = "Hide Details"
    } else if (event.target.id === "attractionDetails" && event.target.textContent === "Hide Details") {
        AttractionPreview(selectedAttraction)
    }
})


//an export to link this page to the main.js so that my "attractionChosen" eventListener will work
export const attractionsPreviewListener = () => {
} 

