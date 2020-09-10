//this is a container for holding the attractions from the API 
let attractions =[]

//creates a copy of the array of attractions that other modules can use without changing the fetched data
export const useAttractions = () => {
    return attractions.slice();
}

/*fetches the array of attraction objects from the API, 
then converts it to a Javascript object and saves it to the attractions array */
export const getAttractions = () =>  {
    return fetch ("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        attractions = parsedResponse;
    })


}

