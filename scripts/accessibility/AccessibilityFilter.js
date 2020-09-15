import { useAllAccessibility } from "./AccessibilityProvider.js";

const eventHub = document.querySelector("main")

//currently list function just serves to connect the module to main
export const addAccessibileParkIcons = () => {
}
let allAccessibleParks
let accessibilityCheckbox
let parkDropdown
let parkOptions
//this is an event listener which adds accessibility emojis to any park on the dropdown list with accessibility features
eventHub.addEventListener('click', (event) => {
    if (event.target.id === "parkSelect") {
        parkDropdown = document.querySelector("#parkSelect") 
        parkOptions = parkDropdown.querySelectorAll('option')
        allAccessibleParks = useAllAccessibility()
        let categories = allAccessibleParks.flat(2)
        accessibilityCheckbox = document.querySelector("#accessibilityDisplay")
        parkOptions.forEach(element => {
            categories.forEach(category => {
                category.parks.forEach(park => {
                    if (element.value === park.fullName && !element.textContent.includes("♿"))
                    {element.innerHTML += "♿"}
                })
            })        
        })
        if (accessibilityCheckbox.checked === true) {
            parkOptions.forEach(element => {
                if (!element.textContent.includes("♿")) {
                    element.style.display = "none"
                }})
            }
        } 
})

eventHub.addEventListener('click', (event) => {
    if (event.target === accessibilityCheckbox) {
        if (accessibilityCheckbox.checked == true) {
            parkOptions.forEach(element => {
                if (!element.textContent.includes("♿")) {
                    element.style.display = "none"
                }})
        } else if  (accessibilityCheckbox.checked == false) {

            parkOptions.forEach(element => {
                element.style.display = ""
            })
        }
    }
})
