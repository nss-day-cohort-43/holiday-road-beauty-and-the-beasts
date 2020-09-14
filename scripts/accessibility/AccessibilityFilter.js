import { useParks } from "../parks/ParkProvider.js";
import { useAllAccessibility } from "./AccessibilityProvider.js";

const eventHub = document.querySelector("main")

//currently list function just serves to connect the module to main
export const addAccessibileParkIcons = () => {
    let allAccessibleParks = useAllAccessibility()
    let parks = useParks()
}

//this is an event listener which adds accessibility emojis to any park on the dropdown list with accessibility features
eventHub.addEventListener('click', (event) => {
    if (event.target.id === "parkSelect") {
        let allAccessibleParks = useAllAccessibility()
        let parkDropdown = document.querySelector("#parkSelect") 
        let parkOptions = parkDropdown.querySelectorAll('option')
        let categories = allAccessibleParks.flat(2)
        // console.log(bigString)
        parkOptions.forEach(element => {
            categories.forEach(category => {
                category.parks.forEach(park => {
                    if (element.value === park.fullName)
                    {element.innerHTML += "♿"}
                })
            })        
        })
    }
})