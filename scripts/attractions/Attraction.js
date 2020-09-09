export const AttractionPreviewHTML = (attraction) => {
    return `
    <div>${attraction.name}</div>
    <div${attraction.city}, ${attraction.state}></div>
    <div>${attraction.description}</div> 
    ${amenetiesLogic(attraction)}
    `
}

const amenetiesLogic = (attraction) => {
    let amenetiesHTML = ``
    console.log(attraction)
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
}