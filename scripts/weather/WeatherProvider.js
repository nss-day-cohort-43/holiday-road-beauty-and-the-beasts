import {parkInfoCopy} from "../parks/ParkPreview.js"
//defines eventhub
const eventHub = document.querySelector("main")

//empty array to hold weather data
let forecast = []
let park

//recieves custom event when a park is chosen
eventHub.addEventListener("parkChosen", event => {
    if("parkIdChosen" in event.detail){
        park = parkInfoCopy()
        console.log(park)




        // return fetch(`api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=c6b9d78a1a4c55ccfe31052909088cd4`)
        // .then(response => response.json())
        // .then(
        //     parsedForecast => {
        //         forecast = parsedForecast
        //     }
        // )
        // //insert function to display weather in .then
        // .then()
    }
})

export const weatherListener = () => {}