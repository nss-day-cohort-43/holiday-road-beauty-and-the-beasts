import {useWeather} from "./WeatherProvider.js"

export const weatherList = () => {
    
    renderWeather()
}

const weatherTarget = document.querySelector(".preview-park")

const renderWeather = () => {
    weatherTarget.innerHTML += `
        <div class="day1"></div>
        <div class="day2"></div>
        <div class="day3"></div>
        <div class="day4"></div>
        <div class="day5"></div>
    `
}

//I need to parse through everything in useWeather() to get useful data
//and conversions.
//[laughs in chemical engineering background]

//parse through 8 objects at a time
//(there are 8 for each day)
//find the highest temp_max
//and lowest temp_min
//then find which weather.description occurs most often
//return a high, a low, and description

//weather.main will help with corresponding icons to weather

const usefulWeather = () => {
    const hugeWeatherArray = useWeather()
    for(let i = 1; i <= 8; i++){

    }
    for(let i = 9; i <= 16; i++){
        
    }
    for(let i = 17; i <= 24; i++){
        
    }
    for(let i = 25; i <= 32; i++){
        
    }
    for(let i = 33; i <= 40; i++){
        
    }
}