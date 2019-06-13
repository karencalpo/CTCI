class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	};
};

const minimalHeightTree = (arr) => {
	if(arr.length === 0) {
		return null;
	}

	let middle = Math.floor((arr.length)/2);
	console.log("middle", middle);
	//console.log("start", start);
	//console.log("end", end);
	let node = new Node(arr[middle]);
	node.left = minimalHeightTree(arr.slice(0, middle));
	node.right = minimalHeightTree(arr.slice(middle+1, arr.length));
	//console.log("node.left", minimalHeightTree(arr, start, middle-1));
	//console.log("node.right", minimalHeightTree(arr, middle+1, end));
	return node;
};

console.log(minimalHeightTree([1,2,3,4,5,6]));

// const minimalHeightTree = (arr, start, end) => {
// 	if(end < start) {
// 		return null;
// 	}

// 	let middle = Math.floor((start + end)/2);
// 	console.log("middle", middle);
// 	//console.log("start", start);
// 	//console.log("end", end);
// 	let node = new Node(arr[middle]);
// 	node.left = minimalHeightTree(arr, start, middle-1);
// 	node.right = minimalHeightTree(arr, middle+1, end);
// 	//console.log("node.left", minimalHeightTree(arr, start, middle-1));
// 	//console.log("node.right", minimalHeightTree(arr, middle+1, end));
// 	return node;
// };

// console.log(minimalHeightTree([1,2,3,4,5,6], 0, [1,2,3,4,5,6].length-1));




