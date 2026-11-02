const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce( (sum, number) => sum + number, 0 );
};

const multiply = function(numbers) {
	return numbers.reduce( (multiply, number) => multiply * number, 1 );
};

const power = function(base, exponent) {
  let result = 1;
  for ( let i = 1; i <= exponent; i++ ) {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for ( let i = number; i >= 1; i-- ) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
