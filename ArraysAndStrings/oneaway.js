const oneAway = (str1, str2) => {
	let i, j;
	let obj = {};
	count = 0;

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

	for(key in obj) {
		if(obj[key] === 1) {
			count++;
		} else if(obj[key] > 2) {
			return false;
		}

		if(count > 2){
			return false;
		} 
	}

	return true;
}

console.log(oneAway("pale", "pales"));