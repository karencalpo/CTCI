//Doubly Linked Lists

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
};

class LinkedList {

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(value) {
		let node = new Node(value); 
		if(this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
			node.next = null
		}

		this.length++;
		
	};

	printLinkedList() {
		let node = this.head;
		while(node !== null) {
			console.log(node.value)
			node = node.next;
		};
	};

};

const sumListReverseOrder = (list1, list2) => {
	let head = { next: null };
	let tail = head;
	let carry = 0;
	let node1 = list1.head;
	let node2 = list2.head;
	let sum;
	//console.log("node1", node1);

	while(node1 && node2) {
		sum = node1.value + node2.value + carry;
		if(sum >= 10) {
			carry = 1;
			sum = sum - 10;
		} else {
			carry = 0;
		}

		tail = tail.next = new Node(sum);
		console.log("tail_first_loop", tail);
		node1 = node1.next;
		node2 = node2.next;
	}

	node1 = node1 || node2;
	while(node1) {
		sum = node1.value + carry;
		if(sum >= 10) {
			carry = 1;
			sum = sum - 10;
		} else {
			carry = 0;
		}
		tail = tail.next = new Node(sum);
		node1 = node1.next;
	}

	if(carry > 0) {
		tail.next = new Node(carry);
	}

	return head.next;
};

const list1 = new LinkedList();
list1.append(2);
list1.append(9);
console.log(JSON.stringify(list1));

const list2 = new LinkedList();
list2.append(4);
list2.append(9);
list2.append(9);
list2.append(9);
list2.append(9);
list2.append(9);
console.log(JSON.stringify(list2));
console.log(JSON.stringify(sumListReverseOrder(list1, list2)));