//creates the HTML for a attraction preview card
export const AttractionPreviewHTML = (attraction) => {
    return `
    <div class="attraction-name">${attraction.name}</div>
    <div class="attraction-location">${attraction.city}, ${attraction.state}</div>
    <button type="button" id="attractionDetails">Details</button>
    `
}

//a function which will create additional details for the preview card
export const AttractionDetailsHTML = (attraction) => {
    return `
    <div>${attraction.description}</div> 
    ${amenetiesLogic(attraction)}
    `
}
// checks the attraction object to see if the ameneties are listed as true or false 
// and creates HTML to reflect that

const amenetiesLogic = (attraction) => {
        let amenetiesHTML = ``
        if (attraction.ameneties.souvenirs === true) {
        amenetiesHTML += `<div>✔️ Giftshop</div>`
    } else {
        amenetiesHTML +=`<div>❌ Giftshop</div>`
    }
    if (attraction.ameneties.restrooms === true) {
        amenetiesHTML += `<div>✔️Restrooms</div>`
    } else {
        amenetiesHTML += `<div>❌ Restrooms</div>`
    }
 return amenetiesHTML
}
