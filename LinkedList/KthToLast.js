class LinkedList {

	constructor(value){
		this.value = value;
		this.next = null;
	}

};

const printLinkedList = (head) => {
	//let node = head;
	console.log('start of linked list');
	while(head !== null) {
		console.log(head.value);
		head = head.next;
	}
	console.log('end of linked list');
};

const printKthToLast = (head, k) => {
	if(head === null) {
		return 0;
	}

	const index = printKthToLast(head.next, k) + 1;


	if(index === k) {
		console.log(`${k}th to last node is ${head.value}`);
	}
};

const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
const d = new LinkedList('d');

a.next = b;
b.next = c;
c.next = d;

printLinkedList(a);

printKthToLast(a, 1);