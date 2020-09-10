
const eventHub = document.querySelector("main")

// an event listener to tell us when all 3 options have been chosen, 
// if they have it generates a 'save itinerary' button
// button will disappear if you return a dropdown to zerp\o
eventHub.addEventListener ("change", event => {
    
    const selectedPark = document.querySelector("#parkSelect")
    const selectedEatery = document.querySelector("#eaterySelector")
    const selectedAttraction = document.querySelector("#attractionSelect")
    const saveBtnContainer = document.getElementById("saveBtnContainer")

    console.log(selectedAttraction.value) 
    if (selectedPark.value !== "0" &&
     selectedEatery.value !== "0" && 
     selectedAttraction.value !== "0") {
        saveBtnContainer.innerHTML = `<button type="button" id="saveBtn">Save Itinerary</button>`
    } else {
        saveBtnContainer.innerHTML = ""
    }
} )

//this will be a function to post the itinerary but for now it just links this moduel to main, so the listener will work
export const saveItinerary = () => {}