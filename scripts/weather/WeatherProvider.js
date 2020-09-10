import {parkInfoCopy} from "../parks/ParkPreview.js"
//defines eventhub
const eventHub = document.querySelector("main")

//empty array to hold weather data
let forecast = []
let park

//recieves custom event when a park is chosen
export const getWeather = () => {
    
        park = parkInfoCopy()
        console.log(park)
        const location = park.map(parkObj =>{
            return{
            city: parkObj.addresses[0].city,
            state: parkObj.addresses[0].stateCode }
        })
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location[0].city},${location[0].state},us&appid=c6b9d78a1a4c55ccfe31052909088cd4`)
        .then(response => response.json())
        .then(
            parsedForecast => {
                forecast = parsedForecast
                console.log(forecast)
            }
        )
        //insert function to display weather in .then
        // .then()
}

export const weatherListener = () => {}