import { useParks } from "../parks/ParkProvider.js";
import { useAllAccessibility } from "./AccessibilityProvider.js";

const eventHub = document.querySelector("main")


export const addAccessibileParkIcons = () => {
    
    let allAccessibleParks = useAllAccessibility()
    let parks = useParks()

}

eventHub.addEventListener('click', (event) => {
    if (event.target.id === "parkSelect") {
    
    let allAccessibleParks = useAllAccessibility()
    console.log(allAccessibleParks)
    let parkDiv = document.querySelector(".park")
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

        // console.log(element)
        
    })
}
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
            