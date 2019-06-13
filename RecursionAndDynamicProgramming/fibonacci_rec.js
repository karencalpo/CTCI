// let memo = {};

// const fib = (n) => {
// 	return fibonacci(n, n + 1);
// }

// const fibonacci = (n, memo) => {
// 	if(n === 0 || n === 1) {
// 		return n;
// 	}

// 	if(memo[n] === 0) {
// 		memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// 	}

// 	return memo[n];
// }

// console.log(fibonacci(3, memo));

const fib = (n) => {
	let memo = [];
	let value;

	if(n<0) {
		return memo;
	}

	if(n === 0 || n === 1) {
		value = n;
	} else {
		value = fib(n-1) + fib(n-2);
	}

	if(!memo[n]) {
		memo[n] = value;
	}

	//console.log(value);

	return value;
}

const fibSeq = (n) => {
	const memo = [];

	for(let i = 0; i <= n; i++) {
		memo.push(fib(i));
	}

	return memo;

};

console.log(fibSeq(10));