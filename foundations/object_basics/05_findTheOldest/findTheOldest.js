const findTheOldest = function(people) {
	people.sort((a, b) => {
		const yearOfBirthA = a.yearOfBirth;	
		const yearOfBirthB = b.yearOfBirth;	 
		let yearOfDeathA = a.yearOfDeath;
		let yearOfDeathB = b.yearOfDeath;
			
		if (!yearOfDeathA) {
				yearOfDeathA = new Date().getFullYear();
		}

		if (!yearOfDeathB) {
				yearOfDeathB = new Date().getFullYear();
		}

		const yearsOldA = yearOfDeathA - yearOfBirthA;
		const yearsOldB = yearOfDeathB - yearOfBirthB;
		
		return yearsOldB - yearsOldA;
	});

	return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
