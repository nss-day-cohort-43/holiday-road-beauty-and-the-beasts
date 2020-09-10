//all parks will be added to this empty array
let parks = [];

//this will return a copy of the park data array
export const useParks = () => {
    return parks.data.slice()
}

//this gets HUGE park object from API... be patient.
export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1")
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks
            }
        )
}

//tells the user that the parks are, in fact, loading. although quite slowly.
export const loadingParks = () => {
    const contentTarget = document.querySelector(".park")
    contentTarget.innerHTML = `Loading all Parks...`
}