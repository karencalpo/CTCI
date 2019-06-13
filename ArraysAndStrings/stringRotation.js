const rotateStr = (str1, str2) => {

	let str1str1 = str1 + str1;
	let newStr = "";
	let firstLetter = str2[0];

	if((str1.length !== str2.length) || (str1.length === 0 || str2.length === 0)) {
		return false;
	}

	for(let i = 0; i < str2.length; i++) {
		if(str1str1[str1str1.indexOf(firstLetter)]) {
			newStr = newStr + str2[i];
		}
	}

	return newStr === str2 ? true : false;
}

console.log(rotateStr("waterbottle", "tlewaterbot"));