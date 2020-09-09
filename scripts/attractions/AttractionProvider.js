//this is a container for holding the attractions from the API 
let attractions =[]

//creates a copy of the array of attractions that other modules can use
export const useAttractions = () => {
    return attractions.slice();
}

export const getAttractions = () =>  {
    return fetch ("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        attractions = parsedResponse;
    })


}