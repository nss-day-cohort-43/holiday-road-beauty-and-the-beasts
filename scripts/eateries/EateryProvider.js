let eateryArray = [];

export const getEatery = () => {
	return fetch('http://holidayroad.nss.team/eateries')
		.then((Response) => Response.json())
		.then((parsedEateries) => {
			console.table(parsedEateries);
			eateryArray = parsedEateries;
		});
};

export const useEatery = () => {
	return eateryArray.slice();
};
