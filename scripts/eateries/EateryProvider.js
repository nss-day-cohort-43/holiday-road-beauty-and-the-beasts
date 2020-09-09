// This is the array that will hold the array returned by getEatery below
let eateryArray = [];

// This is the function that will fetch our data from the Eateries api.
// We will probably be using it in other parts of the code. Which is why it
// is being exported
export const getEatery = () => {
	return fetch('http://holidayroad.nss.team/eateries')
		.then((Response) => Response.json())
		.then((parsedEateries) => {
			eateryArray = parsedEateries;
		});
};
/*
  This is the function that will return a copy of the array populated by the getEatery() function
  We're using this function so that we don't have to interact with the original data and can create a copy anywhere we might need one.
*/
export const useEatery = () => {
	return eateryArray.slice();
};
