import { AttractionPreviewHTML } from "./Attraction.js"
import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector("main")
const previewTarget = document.querySelector(".itenerary-preview")

const AttractionPreview = attraction => {
    AttractionPreviewHTML(attraction)
}

eventHub.addEventListener("attractionChosen", event => {
    console.log("attractionChosen")
    if (event.detail.attractionId !== '0') {
        const attractionId = event.detail.attractionId
        const selectedAttraction = useAttractions().filter(attraction => {
            console.log("attraction.id", attraction.id)
            console.log("attractionId", attractionId)
            if (attraction.id === attractionId) {
                return true
            }
        })
        AttractionPreview(selectedAttraction)
    }
})

export const meaninglessImport = () => {
    console.log("hope this works")
} 