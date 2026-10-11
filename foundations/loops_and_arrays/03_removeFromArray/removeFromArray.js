const removeFromArray = function(array, ...filters) {
	let filteredArray = array;

	for (filter of filters) {
		filteredArray = filteredArray.filter( (element) => filter !== element);
	}

	return filteredArray;
};


// Do not edit below this line
module.exports = removeFromArray;
