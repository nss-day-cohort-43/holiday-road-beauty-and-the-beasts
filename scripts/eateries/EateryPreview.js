// This is a retooling of Mori's code in park preview - which I (Patrick) refactored to work
// with the eatery section.

import { useEatery } from './EateryProvider.js';

//listener doesn't work without a connection to main -
export const eateryPreviewListener = () => {};

//defines eventHub for listener
const eventHub = document.querySelector('main');
//defines where eatery info will be sent on page
const eateryPreviewTarget = document.querySelector('.preview-eatery');

// This will hold the chosen eatery
let chosenEateryObject = {};

//listens for a change from eatery dropdown
eventHub.addEventListener('eateryChosenEvent', (event) => {
	if ('chosenEateryBusinessName' in event.detail) {
		//array of all the eateries
		const allEateries = useEatery();
		//this holds the eatery Biz name of the Business chosen in the dropdown
		const EateryBizName = event.detail.chosenEateryBusinessName;
		//filters all eateries for JUST the chosen eatery
		const matchingEatery = allEateries.filter((EateryObj) => {
			if (EateryObj.businessName === EateryBizName) {
				chosenEateryObject = EateryObj;
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
                    <div class="eatery-detail-container"></div>
                    `;
						})}
        </div>
    
    `;
};

// This is an event listener, that will make the details button work for rendering the selected details to the dom.
eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id === 'eateryDetails') {
		renderEateryDetails(chosenEateryObject);
	}
});

// This is the render function that we'll use for creating the HTML used in our detail card.
const renderEateryDetails = (eateryObj) => {
	const eateryDetailsTarget = document.querySelector(
		'.eatery-detail-container'
	);
	let createdHTML = `<h5>${eateryObj.businessName}</h5>
  <p>${eateryObj.city}, ${eateryObj.state}</p>
  <p>${eateryObj.description}</p>
  <p>ameneties</p>`;

	return (eateryDetailsTarget.innerHTML = createdHTML);
};

// This might be another method IDK the benadryl is kicking in really hard. Holy fuck.
