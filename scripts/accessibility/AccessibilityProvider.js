import { useParks } from "../parks/ParkProvider.js";

let parks 
// useParks() 

const eventHub = document.querySelector("main")

eventHub.addEventListener("stateChosen", event => { 
        const stateToFind = event.detail.stateWanted
        return fetch(`https://developer.nps.gov/api/v1/amenities?api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1`)
        .then(response => response.json()
        .then(
            parsedParks => {
                parks = parsedParks
                console.log("state chosen amenities fetch", parks)
                parks.data.map(park => {
                    if (park.categories[0] === "Accessibility"){ 
                        let parkDropdown = document.querySelector(".park")
                        // debugger
                        let parkOptions = parkDropdown.querySelectorAll("option")
                        // console.log("parkOptions",parkOptions )
                        parkOptions.forEach(option => {
                            if (option.value === park.id) {
                                console.log("match", park.name)
                                option.innerHTML += "♿"
                            }
                        } )
                    }
                })
            }
        
        )
        // .then(ParkSelect)
    )
})


    export const listener = () => {}