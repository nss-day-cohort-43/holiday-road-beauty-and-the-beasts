import {AttractionSelect} from "./attractions/AttractionSelector.js"
import { meaninglessImport } from "./attractions/AttractionsPreview.js"
AttractionSelect()

import {ParkSelect} from "./parks/ParkList.js"
import {getParks} from "./parks/ParkProvider.js"


//everything dealing with park data MUST be after getParks() bc it takes FOREVER
getParks()
.then(()=> {
    ParkSelect()
    //add anything relating to a park HERE or else it won't run
})
