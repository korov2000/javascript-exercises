const sumAll = function(number1, number2) {
	if ( number1 >= 0 && number2 >= 0 && 
			Number.isInteger(number1) && Number.isInteger(number2) ) {
		let lowerNumber = 0;
		let higherNumber = 0;

		if ( number1 > number2 ) {
			lowerNumber = number2;
			higherNumber = number1;
		} else {
			lowerNumber = number1;
			higherNumber = number2;
		}
		
		// ovo sam mogao i na jednostavniji način riješiti:
		// let sum = 0;
		// for (let i = min; i <= max; i++) {
			// sum += i;
		// }
		// return sum;

		const numberArray = [];

		for (let i = lowerNumber; i <= higherNumber; i++) {
			numberArray.push(i);
		}

		return numberArray.reduce( (sum, number) => sum + number );
	} else {
		return "ERROR";
	}
};

// Do not edit below this line
module.exports = sumAll;
