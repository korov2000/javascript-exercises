const fibonacci = function(number) {
	if ( number < 0 || !Number.isInteger(number) ) {
		return "OOPS";
	} else if ( number === 0 ) {
		return 0;
	} else if ( number === 1 || number === 2) {
		return 1;
	} else {
		// fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ect.
		let fibonacciArray = [ 1, 1 ];

		for ( let i = 0; i < number - 2; i++ ) {
			let nextFibonacciNumber = fibonacciArray[i] + fibonacciArray[i + 1];
			fibonacciArray.push(nextFibonacciNumber);		
		}

		return fibonacciArray[fibonacciArray.length - 1];
	}
};

// Do not edit below this line
module.exports = fibonacci;
