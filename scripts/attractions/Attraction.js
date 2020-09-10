//creates the HTML for a attraction preview card
export const AttractionPreviewHTML = (attraction) => {
    return `
    <div class="attraction-name">${attraction.name}</div>
    <divvclass="attraction-location">${attraction.city}, ${attraction.state}</div>
    <button type="button" id="attractionDetails" class="show">Details</button>
    `
}

export const AttractionDetailsHTML = (attraction) => {
    return `
    <div>${attraction.description}</div> 
    ${amenetiesLogic(attraction)}
    `
}
// checks the attraction object to see if the ameneties are listed as true or false 
// and creates HTML to reflect that

const amenetiesLogic = (attraction) => {
        console.log(attraction)
        let amenetiesHTML = ``
        if (attraction.ameneties.souvenirs === true) {
        amenetiesHTML += `<div>✔️ Giftshop</div>`
    } else {
        `<div>❌ Giftshop</div>`
    }
    if (attraction.ameneties.restrooms === true) {
        amenetiesHTML += `<div>✔️Restrooms</div>`
    } else {
        `<div>❌ Restrooms</div>`
    }
 return amenetiesHTML
}
