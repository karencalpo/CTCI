const imageRotate = (a) => {
	let i;
	let j;
	let n = a.length-1;

	for(i = 0; i < n/2; i++){
		let final = n - i;
		for(j=i; j < final; j++){
			console.log(a);
			let temp = a[i][j];
			a[i][j] = a[n-j][i];
			a[n-j][i] = a[n-i][n-j];
			a[n-i][n-j] = a[j][n-i];
			a[j][n-i] = temp;
		}
		
	}

	return a;

}

console.log(imageRotate([['1','2','3'],
                        ['4','5','6'],
                        ['7','8','9']]));