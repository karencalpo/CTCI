const palindrome = (str) => {
	let i,j;

	for(i = 0, j = str.length-1; i < str.length/2; i++, j--){
		if(str[i] !== str[j]){
			return "Not a palindrome."
		}
	}

	return "A palindrome";
}

console.log(palindrome("missim"));