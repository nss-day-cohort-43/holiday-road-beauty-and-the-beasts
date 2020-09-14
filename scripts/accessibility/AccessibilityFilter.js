import { useParks } from "../parks/ParkProvider.js";
import { useAllAccessibility } from "./AccessibilityProvider.js";

const eventHub = document.querySelector("main")


export const addAccessibileParkIcons = () => {
    
    let allAccessibleParks = useAllAccessibility()
    let parks = useParks()

}

eventHub.addEventListener('stateChosen', (event) => {
    let allAccessibleParks = useAllAccessibility()
    console.log(allAccessibleParks)
    let parkDropdown = document.querySelector(".park")
    let parkOptions = parkDropdown.querySelectorAll("option")
    parkOptions.forEach(element => {
        console.log(element)
        
    })
})


    

                // console.table(parks.data)
                // accesibleParks = parks.data.forEach(array => {
                //     array[0]
                // })
                // console.log(accesibleParks)



                // parks.data.map(park => {
                //     if (park.categories[0] === "Accessibility"){ 
                //         let parkDropdown = document.querySelector(".park")
                //         // debugger
                //         let parkOptions = parkDropdown.querySelectorAll("option")
                //         // console.log("parkOptions",parkOptions )
                //         parkOptions.forEach(option => {
                //             if (option.value === park.id) {
                //                 console.log("match", park.name)
                //                 option.innerHTML += "♿"
                //             }
                //         } )
                //     }
                // })
            