const oneAway = (str1) => {
	let i;
	let obj = {};
	let str2 = "";

	for(i = 0; i < str1.length; i++){
		if(!obj[str1[i]]){
			obj[str1[i]] = 1;
		} else {
			obj[str1[i]]++;
		}
	}

	for(key in obj) {
		str2 = str2 + key + obj[key];
	}

	return str2.length < str1.length ? str2 : str1;
}

console.log(oneAway("zxczxvvbfghaaaaaaaaaaaaaaa"));