import { AttractionPreviewHTML } from "./Attraction.js"
import { useAttractions } from "./AttractionProvider.js"

//selects an eventHub to hold custom events
const eventHub = document.querySelector("main")

//selecs the target for the preview card
const previewTarget = document.querySelector(".itenerary-preview")

//
const AttractionPreview = attraction => {
    AttractionPreviewHTML(attraction)
}

//
eventHub.addEventListener("attractionChosen", event => {
    console.log("attractionChosen")
    if (event.detail.attractionId !== '0') {
        const attractionId = event.detail.attractionId
        const selectedAttraction = useAttractions().filter(attraction => {
            if (attraction.id === parseInt(attractionId)) {
                console.log("attraction.id", attraction.id)
                console.log("attractionId", attractionId)
                return true
            }
        })
        AttractionPreview(selectedAttraction)
    }
})

//an export so that my "attractionChosen" eventListener will work
export const meaninglessImport = () => {
    console.log("hope this works")
} 