// This will be where the code for our drop down lives.

// We need these functions for our render function at the bottom
import { getEatery, useEatery } from './EateryProvider.js';

// This is setting our eventHub for the custom event from the dropdown menu.
// We are also setting the target for our render function, we're placing the dropdown at
// the <div> Class selectEatery
const eventHub = document.querySelector('main');
const dropDownTarget = document.querySelector('.eatery');

// This is the Event listener for the drop down bar, it will send out a custom event.
// we're using the custom event to grab a payload. So we can use the businessName
// so we can get the right info for the preview section
eventHub.addEventListener('change', (event) => {
	if (event.target.id === 'eaterySelector') {
		const chosenEateryEvent = new CustomEvent('eateryChosenEvent', {
			detail: {
				chosenEateryBusinessName: event.target.value,
			},
		});
		// This will dispatch the custom event to
		eventHub.dispatchEvent(chosenEateryEvent);
	}
});

// This takes an array of Eatery objects in the params. Then it uses map to create
// html for the dropdown menu that is then used by our Render function below.
const eateryDropDownHtmlBuilder = (EateryCollection) => {
	dropDownTarget.innerHTML = `
    <select class="dropdown" id="eaterySelector">
      <option value="0">Choose an Eatery!</option>
      ${EateryCollection.map((eateryObj) => {
				const BizName = eateryObj.businessName;
				return `<option value="${BizName}">${BizName}</option>`;
			})}
    </select>  
  `;
};

// this function is called in main.js - this function calls the getEatery function which hits the eatery
// api and returns an array. Within the .then we are using the useEatery function to populate
// the EateriesArray -- this array is a shallow copy of the array returned by getEatery --
// once we have the EateriesArray we finally call the html builder to map through the EateriesArray and
// creates the HTML that is placed on the DOM.
export const eateryDropdownRender = () => {
	getEatery().then((_) => {
		const EateriesArray = useEatery();
		eateryDropDownHtmlBuilder(EateriesArray);
	});
};
