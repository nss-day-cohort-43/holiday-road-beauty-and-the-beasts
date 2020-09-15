import { useEatery } from "../eateries/EateryProvider.js";
import { useAllAccessibility } from "./AccessibilityProvider.js";

const eventHub = document.querySelector("main")

let allAccessibleParks
let accessibilityCheckbox
let parkDropdown
let parkOptions

let eaterySelect
let eateryOption

//this is an event listener which adds accessibility emojis to any park on the dropdown list with accessibility features, triggered by choosing a state
//it also checks to see if the accessibility filter checkbox is checked and if it is, it pulls all the non-accessible parks from the list
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
//filters out eatries and parks with no accessibility data adds a text warning about attractions
//if you uncheck the accessibility filter checkbox it adds the non-accessible parks back in, 
//if you check it and have already chosen a state this filters the list
eventHub.addEventListener('click', (event) => {
    if (event.target === accessibilityCheckbox) {
        const selectorTarget = document.querySelector(".attraction")
        if (accessibilityCheckbox.checked === true) {
            //if the park dropdown has rendered
            if (parkOptions) {
                //hide any parks that don't have an accessibility icon
                parkOptions.forEach(element => {
                    if (!element.textContent.includes("♿")) {
                        element.style.display = "none"
                    }})}
            //hide any eatery that don;t have an accessibility icon
            eateryOption.forEach(element => {
                if (!element.textContent.includes("♿")) {
                    element.style.display = "none"
            }})
            //adds a text warning about attractions
            if (!selectorTarget.textContent.includes("No Accessibility Data")){
            selectorTarget.innerHTML += `<div id="attraction-info">No Accessibility Data Available for these Attractions</div>`
            }
        } else if  (accessibilityCheckbox.checked === false) {
            if (parkOptions) {
                parkOptions.forEach(element => {
                    element.style.display = ""
                })
            }
            eateryOption.forEach(element => {
                console.log(element)
                element.style.display = ""
            })
        }
    }
})


//listener for clicks on eatery 
export const eateryAccessIcons = () =>{
        const allEateries = useEatery()
        accessibilityCheckbox = document.querySelector("#accessibilityDisplay")
        eaterySelect= document.getElementById("eaterySelector")
        eateryOption = eaterySelect.querySelectorAll("option")
        eateryOption.forEach(element => { 
            allEateries.forEach(eatery => {
                if (eatery.businessName === element.value) {
                    if (eatery.ameneties.wheelchairAccessible === true && !element.textContent.includes("♿")){
                        element.innerHTML += "♿"}
                }
            })
        })
    }