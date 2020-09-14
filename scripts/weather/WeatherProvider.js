import {parkInfoCopy} from "../parks/ParkPreview.js"
import defaultExport from "../Settings.js"


//empty array to hold weather data
let forecast = []
let park

//recieves custom event when a park is chosen
export const getWeather = () => {
        park = parkInfoCopy()
        //creates a useable object for URL
        const location = park.map(parkObj =>{
            return{
            city: parkObj.addresses[0].city,
            state: parkObj.addresses[0].stateCode }
        })
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location[0].city},${location[0].state},us&appid=${defaultExport.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedForecast => {
                forecast = parsedForecast
            }
        )
}

//lets weather be used on other modules
export const useWeather = () => {
    return forecast
}

//allows main to recognize this module
export const weatherListener = () => {}