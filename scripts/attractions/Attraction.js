//creates the HTML for a attraction preview card
export const AttractionPreviewHTML = (attraction) => {
    return `
    <div class="attraction-name">${attraction.name}</div>
    <div class="attraction-location">${attraction.city}, ${attraction.state}</div>
    <button type="button" class="attractionDetails">Details</button>
    `
}