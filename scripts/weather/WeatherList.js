import {useWeather} from "./WeatherProvider.js"

//this renders all weather information
export const weatherList = () => {
    renderWeather()
}

//defines where weather info will go on HTML
//reads as null
const weatherTarget = document.querySelector(".weather-container")

//defines the HTML for the relevant weather data
const renderWeather = () => {
    const weather = weatherEmoji()
    const temp = tempHighLow()
    const dates = weatherDates()
    let allWeather = ""
    const weatherInfo = () => {
    for(let i= 0; i < 5; i++){
        allWeather += `
            <div class="day${i}">${dates[i]} ${weather[i]} Hi: ${temp.hi[i]}°F Lo: ${temp.lo[i]}°F</div>
        `
    }}
    weatherInfo()
    weatherTarget.innerHTML = allWeather
}

//gets the high and low temperature each day
const tempHighLow = () => {
    const hugeWeatherArray = useWeather()
    let minArrayKelvin = []
    let maxArrayKelvin = []
    let order = 0
    //iterates through 5 days
    for(let day = 0; day < 5; day++){
        let min = hugeWeatherArray.list[order].main.temp_min
        let max = hugeWeatherArray.list[order].main.temp_max
        //iterates through each 3 hrs 
        for(let i = 0; i < 8; i++){
            //determines smallest low temp
            if (hugeWeatherArray.list[order].main.temp_min <= min) {
                min = hugeWeatherArray.list[order].main.temp_min
            }
            //determines largest high temp
            if (hugeWeatherArray.list[order].main.temp_max >= max) {
                max = hugeWeatherArray.list[order].main.temp_min
            }
            order++
        }
        //converts to fahrenheit
        const minF = Math.round((min - 273.15)*(9/5) + 32)
        const maxF = Math.round((max - 273.15)*(9/5) + 32)
        //adds to arrays of highs and lows
        minArrayKelvin.push(minF)
        maxArrayKelvin.push(maxF)
    }
    //creates a useable object
    const dailyHiLo = {
        hi: maxArrayKelvin,
        lo: minArrayKelvin
    }
    return dailyHiLo
}

//gets the weather description of each day
const physicalWeather = () => {
    const hugeWeatherArray = useWeather()
    let order = 0
    let weeklyWeather = []
    //iterates through all 5 days
    for(let day = 0; day < 5; day++){
        let dailyWeather = []
        //iterates through 3 hour cycles of 24 hrs
        for(let i = 0; i < 8; i++){
            dailyWeather.push(hugeWeatherArray.list[order].weather[0].main)
            order++
        }
        //finds most common weather that day and adds it to useable array
        const mostWeather = mode(dailyWeather)
        weeklyWeather.push(mostWeather)
    }
    console.log(weeklyWeather)
    return weeklyWeather
}

//this function is used in the previous one
//it is used to find the most common weather throughout the 24 hr cycle
const mode = (array) =>
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    //iterates through array to find most occurring string
    for(var i = 0; i < array.length; i++)
    {
        //defines the element to be counted
        var el = array[i];
        //replaces most occurring string, maxEl, if count is exceeded by different string
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    //returns element with highest count
    return maxEl;
}

//grabs the relevant dates to the corresponding weather from the api
const weatherDates = () => {
    const hugeWeatherArray = useWeather()
    let days = []
    for(let i=0; i<40; i=i+8){
        const date = hugeWeatherArray.list[i].dt_txt.substr(5,5)
        days.push(date)
    }
    return days
}

const weatherEmoji = () => {
    const weatherArray = physicalWeather()
    let weatherEmoji = []
    for(const weather of weatherArray) {
        if(weather === "Clear"){
            weatherEmoji.push("🌞")
        }
        if(weather === "Rain"){
            weatherEmoji.push("☔")
        }
        if(weather === "Clouds") {
            weatherEmoji.push("⛅")
        }
    }
    return weatherEmoji
}