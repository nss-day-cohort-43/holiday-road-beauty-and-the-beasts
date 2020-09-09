let parks = [];

export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=4CCbkNphNpJ3QSNIMKkkLeLl2DrSerPMI1iTBQl1")
        .then(response => response.json())
        .then(
            parsedParks => {
                console.table(parsedParks)
                parks = parsedParks
            }
        )
}