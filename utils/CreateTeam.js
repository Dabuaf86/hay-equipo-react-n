const CreateTeam = array => {
	let result = [];
	if (array.length % 2 === 0) {
		while (result.length < array.length / 2) {
			const random = array[Math.floor(Math.random() * array.length)];
			if (!result.includes(random)) result.push(random);
		}
		return result;
	}
	return;
};

export default CreateTeam;
