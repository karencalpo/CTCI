class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
};

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	};

	append(value) {
		let node = new Node(value);
		let current_node = this.head;

		if(!current_node) {
			this.head = node;
			this.length++;
			return node;
		}

		while(current_node.next) {
			current_node = current_node.next;
		}

		current_node.next = node;
		this.length++;
		return node;
	};
};

const isPalindrome = (list) => {
	let stack = [];
	let count = 0;
	let middle = Math.floor(list.length/2);
	let node = list.head;

	if(list.length <= 1){
		return false;
	}

	while(node !== null) {
		if(count < middle){
			stack.push(node.value);
			count++;
		} else {
			if((count === middle) && (list.length % 2)) {
				node = node.next;
			}

			if(node.value !== stack.pop()) {
				return false;
			}
			count++;
		}

		node = node.next;
	}

	return true;
	
}

const list = new LinkedList();
list.append("m"); 
list.append("a");
list.append("d");
list.append("d");
list.append("d");
list.append("a");
list.append("m");
console.log(JSON.stringify(list));
console.log(isPalindrome(list));
