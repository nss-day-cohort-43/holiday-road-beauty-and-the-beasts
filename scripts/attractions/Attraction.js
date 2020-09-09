//creates the HTML for a attraction preview card
export const AttractionPreviewHTML = (attraction) => {
    return `
    <div>${attraction.name}</div>
    <div>${attraction.city}, ${attraction.state}</div>
    <button type="button" class="attraction detailsBtn">Details</button>
    `
}