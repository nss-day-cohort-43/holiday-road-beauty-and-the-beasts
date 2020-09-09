<<<<<<< HEAD
import {AttractionSelect} from "./attractions/AttractionSelector.js"
import { meaninglessImport } from "./attractions/AttractionPreview.js"
AttractionSelect()
=======
import {ParkSelect} from "./parks/ParkList.js"
import {getParks} from "./parks/ParkProvider.js"


//everything dealing with park data MUST be after getParks() bc it takes FOREVER
getParks()
.then(()=> {
    ParkSelect()
    //add anything relating to a park HERE or else it won't run
})
>>>>>>> d18f19f71930fe8075a99ff2bf29504f8f33c375
