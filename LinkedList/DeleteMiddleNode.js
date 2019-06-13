class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
};


const printLinkedList = (head) => {
	let node = head; 

	console.log('beginning of linked list');
	while(node !== null) {
		console.log(node.value);
		node = node.next;
	};
	console.log('end of linked list.');
};

const deleteNode = (head, del) => {

	let node = head;

	while(node !== null) {

		if(node.next && node.next.value === del){
			node.next = node.next.next;
			console.log(`Found ${del}!`);
			printLinkedList(a);
			return true;
		}
		node = node.next;
	}
	
	return false;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

deleteNode(a, 'a');
