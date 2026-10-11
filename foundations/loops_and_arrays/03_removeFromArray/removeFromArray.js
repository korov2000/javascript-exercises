const removeFromArray = function(array, ...filters) {
	let filteredArray = array;

	for (filter of filters) {
		filteredArray = filteredArray.filter( (element) => filter !== element);
	}

	return filteredArray;
};

// ovu moju funkciju se može itekako popraviti da izgleda ljepše
// evo objašnjenja kako to izgleda u mojoj glavi: 
// - za početak filter metoda isto loop-a kroz array i zato nam ne treba 
//   for(filter of filters)
// - a druga stvar je da je filters zapravo array i metoda includes loop-a kroz
//   taj array i vraća true or false na temelju čega filter metoda filtrira
const removeFromArray2 = function(array, ...filters) {
	return array.filter( element => !filters.includes(element) );
}


// Do not edit below this line
module.exports = removeFromArray;
