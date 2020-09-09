

const eventHub = document.querySelector("main")
const parkPreviewTarget = document.querySelector(".preview-park")

eventHub.addEventListener("parkChosenEvent", event => {
    if("parkIdChosen" in event.detail){

    }
})


const renderParkPreview = (parkChosen) => {
    parkPreviewTarget.innerHTML = `
        <div class="park-card">
            ${

            }
        </div>
    
    `
}