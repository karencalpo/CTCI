
const permutation = (str1, str2) => {
	let obj = {};
	let i, j;

	for(i = 0; i < str1.length; i++){
		if(!obj[str1[i]]){
			obj[str1[i]] = 1;
		} else {
			obj[str1[i]]++;
		}
	}

	for(j = 0; j < str2.length; j++){
		if(!obj[str2[j]]){
			obj[str2[j]] = 1;
		} else {
			obj[str2[j]]++;
		}
	}

	console.log(obj);

	for(key in obj) {
		if(obj[key] % 2 !== 0){
			return "Strings are not permutations of each other."
		}
	}

	return "Strings are permutations of each other."
}

console.log(permutation("abcdfdsfdsfdsfdsfsd", "abc"));