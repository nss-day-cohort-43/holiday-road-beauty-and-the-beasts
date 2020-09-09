//creates the HTML for a attraction preview card
export const AttractionPreviewHTML = (attraction) => {
    return `
    <div>${attraction.name}</div>
    <div>${attraction.city}, ${attraction.state}</div>
    <button type="button" class="attraction detailsBtn">Details</button>
    `
}

export const AttractionDetailsHTML = (attraction) => {

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