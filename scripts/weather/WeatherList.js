import {useWeather} from "./WeatherProvider.js"

export const weatherList = () => {
    
}

const weatherTarget = document.querySelector(".preview-park")

//edit this funtion to use weather from other functions
const renderWeather = () => {
    weatherTarget.innerHTML += `
        <div class="day1"></div>
        <div class="day2"></div>
        <div class="day3"></div>
        <div class="day4"></div>
        <div class="day5"></div>
    `
}

const tempHighLow = () => {
    const hugeWeatherArray = useWeather()
    let minArrayKelvin = []
    let maxArrayKelvin = []
    let order = 0
    for(let day = 0; day < 5; day++){
        let min = hugeWeatherArray.list[order].main.temp_min
        let max = hugeWeatherArray.list[order].main.temp_max
        for(let i = 0; i < 8; i++){
            if (hugeWeatherArray.list[order].main.temp_min <= min) {
                min = hugeWeatherArray.list[order].main.temp_min
            }
            if (hugeWeatherArray.list[order].main.temp_max >= max) {
                max = hugeWeatherArray.list[order].main.temp_min
            }
            order++
        }
        const minF = Math.round((min - 273.15)*(9/5) + 32)
        const maxF = Math.round((max - 273.15)*(9/5) + 32)
        minArrayKelvin.push(minF)
        maxArrayKelvin.push(maxF)
    }
    const dailyHiLo = {
        hi: maxArrayKelvin,
        lo: minArrayKelvin
    }
    return dailyHiLo
}

//edit this function to return weather.main or weather.description
//find which occurs most often in each 8
//weather.main can help with icons
const physicalWeather = () => {
    const hugeWeatherArray = useWeather()
    let minArrayKelvin = []
    let maxArrayKelvin = []
    let order = 0
    for(let day = 0; day < 5; day++){
        let min = hugeWeatherArray.list[order].main.temp_min
        let max = hugeWeatherArray.list[order].main.temp_max
        for(let i = 0; i < 8; i++){
            if (hugeWeatherArray.list[order].main.temp_min <= min) {
                min = hugeWeatherArray.list[order].main.temp_min
            }
            if (hugeWeatherArray.list[order].main.temp_max >= max) {
                max = hugeWeatherArray.list[order].main.temp_min
            }
            order++
        }
        const minF = Math.round((min - 273.15)*(9/5) + 32)
        const maxF = Math.round((max - 273.15)*(9/5) + 32)
        minArrayKelvin.push(minF)
        maxArrayKelvin.push(maxF)
    }
    const dailyHiLo = {
        hi: maxArrayKelvin,
        lo: minArrayKelvin
    }
    return dailyHiLo
}