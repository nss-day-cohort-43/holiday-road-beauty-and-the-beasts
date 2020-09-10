import { AttractionPreviewHTML } from "./Attraction.js"
import { useAttractions } from "./AttractionProvider.js"
import { AttractionDetailsHTML } from "./Attraction.js"

//selects an eventHub to hold custom events
const eventHub = document.querySelector("main")

//selects the target for the preview card
const previewTarget = document.querySelector(".preview-attraction")

let selectedAttraction
//pulls the function to create the HTML for the atraction card an places it in the DOM
const AttractionPreview = attraction => {
    const html  = AttractionPreviewHTML(attraction)
    //change to += if we decide to add capability for more than attraction
    previewTarget.innerHTML = html
}

/*
    listens for the custom event when an attraction is chosen, 
    and calls the AttractionPreview function to create the preivew card in the DOM 
*/
eventHub.addEventListener("attractionChosen", event => {
    if (event.detail.attractionId !== '0') {
        const attractionId = parseInt(event.detail.attractionId)
        selectedAttraction = useAttractions().find(attraction => {
            if (attraction.id === attractionId) {
                return true
            }
        })
        AttractionPreview(selectedAttraction)
    }
})

eventHub.addEventListener("click", event => {
    console.log(event.target.id)
    console.log(event.target.textContent)

    if (event.target.id === "attractionDetails" && event.target.textContent === "Details") {
        console.log("clicked")
        previewTarget.innerHTML += AttractionDetailsHTML(selectedAttraction)
        document.getElementById("attractionDetails").textContent = "Hide"
    } else if (event.target.id === "attractionDetails" && event.target.textContent === "Hide") {
        console.log("clicked")
        previewTarget.innerHTML = AttractionPreview(selectedAttraction)
        // document.getElementById("attractionDetails").textContent = "Details"
    }
})


//an purposeless export so that my "attractionChosen" eventListener will work
export const attractionsPreviewListener = () => {
    console.log("this connectes AttractinsPreview.js to the main.js")
} 

