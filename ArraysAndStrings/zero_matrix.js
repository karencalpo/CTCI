const zeroMatrix = (a) => {
	let i;
	let j;
	let n = a.length;
	let m = a[0].length;

	for(i = 0; i < n; i++){
		let final = n - i;
		for(j=0; j < m; j++){
			if(a[i][j] === '0'){
				addZero(i,j,a);
			}
		}
	}

	return a;

}

const addZero = (i, j, a) => {
	for(let b = 0, c = 0; b < a.length, c < a[0].length; b++, c++){
		a[i][b] = 0;
		a[c][j] = 0;
	}
}

console.log(zeroMatrix([['1','2','3'],
                        ['4','0','6'],
                        ['7','8','1']]));