const findUnique = (str) => {
	let i;
	let uni = {};

	for(i = 0; i < str.length; i++) {
		if(!uni[str[i]]){
			uni[str[i]] = 1;
		} else {
			return "There are no unique characters."
		}
	}

	return "There are unique characters.";

}

console.log(findUnique("abcdee"));