//creates the HTML for a attraction preview card
export const AttractionPreviewHTML = (attraction) => {
	return `
    <div class="attraction-name"><b>${attraction.name}</b></div>
    <div class="attraction-location">${attraction.city}, ${attraction.state}</div>
    <button type="button" id="attractionDetails">Details</button>
    `;
};

//a function which will create additional details for the preview card
export const AttractionDetailsHTML = (attraction) => {
	return `
    <div>${attraction.description}</div> 
    ${amenetiesLogic(attraction)}
    `;
};
// checks the attraction object to see if the ameneties are listed as true or false
// and creates HTML to reflect that

const amenetiesLogic = (attraction) => {
	let amenitiesHTML = ``;
	if (attraction.ameneties.souvenirs === true) {
		amenitiesHTML += `<div>✔️ Giftshop</div>`;
	} else {
		amenitiesHTML += `<div>❌ Giftshop</div>`;
	}
	if (attraction.ameneties.restrooms === true) {
		amenitiesHTML += `<div>✔️Restrooms</div>`;
	} else {
		amenitiesHTML += `<div>❌ Restrooms</div>`;
	}
	return amenitiesHTML;
};
