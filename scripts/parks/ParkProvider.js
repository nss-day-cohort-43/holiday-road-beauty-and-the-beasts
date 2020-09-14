import { ParkSelect } from './ParkList.js';
import defaultExport from '../Settings.js';
import { parkInfoCopy } from './ParkPreview.js';

//all parks will be added to this empty array
let parks = [];

//defines eventHub
const eventHub = document.querySelector('main');

//this will return a copy of the park data array
export const useParks = () => {
	return parks.data.slice();
};

//export so main.js recognizes this file
export const parkListener = () => {};

//event listener for state chosen that fetches relevant data
eventHub.addEventListener('stateChosen', (event) => {
	if ('stateWanted' in event.detail) {
		const stateToFind = event.detail.stateWanted;
		return fetch(
			`https://developer.nps.gov/api/v1/parks?stateCode=${stateToFind}&api_key=${defaultExport.npsKey}`
		)
			.then((response) => response.json())
			.then((parsedParks) => {
				parks = parsedParks;
			})
			.then(ParkSelect);
	}
});

//stores accessibility data
let parkAccessibility;

//defines where accessibility HTML will be rendered
const parkAccessTarget = document.querySelector('.park-detail-container');

//listens for detail button clicked to fetch and render accessibility details
eventHub.addEventListener('detailsClicked', (event) => {
	const parkChosen = parkInfoCopy();
	const officialParkCode = parkChosen[0].parkCode;
	return fetch(
		`https://developer.nps.gov/api/v1/amenities/parksplaces?parkCode=${officialParkCode}&q=accessi&api_key=${defaultExport.npsKey}`
	).then((response) =>
		response.json().then((parsedPark) => {
			parkAccessibility = parsedPark;
			renderParkAccess();
		})
	);
});

//defines park accessibility details
//code will be refactored to add specific place name details
const renderParkAccess = () => {
	parkAccessTarget.innerHTML += `<div class="accessibility-detail"></div>`;
	const accessDetailTarget = document.querySelector('.accessibility-detail');
	for (const object of parkAccessibility.data) {
		for (const object2 of object) {
			if (object2.name === 'Restroom - Accessible') {
				accessDetailTarget.innerHTML += `
                    <div class="access-type">Places with Accessible Restrooms</div>
                `;
				for (const park of object2.parks) {
					for (const place of park.places) {
						accessDetailTarget.innerHTML += `
                        <a href="${place.url}" target="_blank" class="place-site">${place.title}</a><br>
                    `;
					}
				}
			}
			if (object2.name === 'Wheelchair Accessible') {
				accessDetailTarget.innerHTML += `
                    <div class="access-type">Places with Wheelchair Access</div>
                `;
				for (const park of object2.parks) {
					for (const place of park.places) {
						accessDetailTarget.innerHTML += `
                        <a href="${place.url}" target="_blank" class="place-site">${place.title}</a><br>
                    `;
					}
				}
			}
			if (object2.name === 'Accessible Rooms') {
				accessDetailTarget.innerHTML += `
                    <div class="access-type">Places with Accessible Rooms</div>
                `;
				for (const park of object2.parks) {
					for (const place of park.places) {
						accessDetailTarget.innerHTML += `
                        <a href="${place.url}" target="_blank" class="place-site">${place.title}</a><br>
                    `;
					}
				}
			}
			if (object2.name === 'Accessible Sites') {
				accessDetailTarget.innerHTML += `
                    <div class="access-type">Places with Accessible Sites</div>
                `;
				for (const park of object2.parks) {
					for (const place of park.places) {
						accessDetailTarget.innerHTML += `
                        <a href="${place.url}" target="_blank" class="place-site">${place.title}</a><br>
                    `;
					}
				}
			}
		}
	}
	if (accessDetailTarget.innerHTML === '') {
		accessDetailTarget.innerHTML += `<div>No Accessibility Info On File.</div>`;
	}
	accessDetailTarget.innerHTML += `<div>Please Call Ahead for More Accessibility Info.</div>`;
};

//will store signal info
let parkSignal;

//listens for detail button click to fetch and render cell info
eventHub.addEventListener('detailsClicked', (event) => {
	const parkChosen = parkInfoCopy();
	const officialParkCode = parkChosen[0].parkCode;
	return fetch(
		`https://developer.nps.gov/api/v1/amenities/parksplaces?parkCode=${officialParkCode}&q=cellular&api_key=${defaultExport.npsKey}`
	).then((response) =>
		response.json().then((parsedPark) => {
			parkSignal = parsedPark;
			renderParkSignal();
		})
	);
});

//parses through signal info data to render what places have cell service
const renderParkSignal = () => {
	parkAccessTarget.innerHTML += `<div class="cell-detail"></div>`;
	const cellDetailTarget = document.querySelector('.cell-detail');
	for (const object of parkSignal.data) {
		for (const object2 of object) {
			cellDetailTarget.innerHTML += `
                <div class="access-type">Cell Service Available:</div>
            `;
			for (const park of object2.parks) {
				for (const place of park.places) {
					cellDetailTarget.innerHTML += `
                        <div>${place.title}</div>
                    `;
				}
			}
		}
	}
	//displays no info on file if api returns empty
	if (cellDetailTarget.innerHTML === '') {
		cellDetailTarget.innerHTML += `<div>No Cell Service Info On File.</div>`;
	}
	cellDetailTarget.innerHTML += `<div>Please Call Ahead for More Cell Service Info.</div>`;
};
