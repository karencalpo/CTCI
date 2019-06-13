class LinkedList {
	constructor(value){
		this.value = value;
		this.next = null;
	};
};

const checkDups = (head, node) => {
	let currNode = head;
	while (currNode !== node) {
		if(currNode.value === node.value) {
			return true;
		}
		currNode = currNode.next;
	}

	return false;
};

const printLinkedList = (head) => {
	let node = head;
	console.log('start of linked list');
	while(node !== null) {
		console.log(node.value);
		node = node.next;
	}
	console.log('end of linked list');
};

const removeDups = (head) => {
	let node = head;
	while(node !== null) {
		if(node.next !== null && checkDups(head, node.next)) {
			node.next = node.next.next;
		} else {
			node = node.next;
		}
	}

	return head;
};

const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('b');
const d = new LinkedList('d');

a.next = b;
b.next = c;
c.next = d;

removeDups(a);
printLinkedList(a);



