const palindromes = function (string) {
	string = string.toLowerCase();

	// remove punctuation and returns array
	const stringArray = string.match(/[a-z0-9]/g);

	const cleanString = stringArray.join("");
	const reversedString = stringArray.toReversed().join(""); 

	return cleanString  === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
