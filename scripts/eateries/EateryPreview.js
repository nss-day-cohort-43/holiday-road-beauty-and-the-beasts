// This is a retooling of Mori's code in park preview - which I (Patrick) refactored to work
// with the eatery section.

import { useEatery } from './EateryProvider.js';

//listener doesn't work without a connection to main - this is a bug we believe. But we're working around it.
export const mainListenerForEatery = () => {};

//defines eventHub for listener
const eventHub = document.querySelector('main');
//defines where park info will be sent on page
const eateryPreviewTarget = document.querySelector('.preview-eatery');

//listens for a change from park dropdown
eventHub.addEventListener('eateryChosenEvent', (event) => {
	if ('chosenEateryBusinessName' in event.detail) {
		//array of all the eateries
		const allEateries = useEatery();
		//this holds the eatery Biz name of the Business chosen in the dropdown
		const EateryBizName = event.detail.chosenEateryBusinessName;
		//filters all parks for JUST the chosen park
		const matchingEatery = allEateries.filter((EateryObj) => {
			if (EateryObj.businessName === EateryBizName) {
				return true;
			} else {
				return false;
			}
		});
		//renders HTML for the matching Eatery - function is below
		renderEateryPreview(matchingEatery);
	}
});

//creates HTML for the selected eatery
const renderEateryPreview = (eateryChosen) => {
	eateryPreviewTarget.innerHTML = `
        <div class="eatery-card">
            ${eateryChosen.map((eateryObj) => {
							return `<div class="eatery-name">${eateryObj.businessName}</div>
                    <div class="location">${eateryObj.city}, ${eateryObj.state}</div>
                    <button id="eateryDetails">Details</button>
                    `;
						})}
        </div>
    
    `;
};
