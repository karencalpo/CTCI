class Node {
	constructor(value) {
		this.value = value;
		this.previous = null
		this.next = null;
	};
};

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;	
	};

	append(value) {
		let node = new Node(value)
		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.previous = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	};

	prepend(value) {
		let node = new Node(value);

		if(this.length === 0) {
			this.head = node;
			this.tail = node;
			
		} else {
			node.next = this.head;
			this.head = node;
		} 

		this.length++;
	}

	remove(value) {
		let current = this.head;
		while(current) {
			if(current.value === value) {
				if(current === this.head && current === this.tail) {
					this.head = null;
					this.tail = null;
				} else if(current == this.head) {
					this.head = this.head.next;
					this.head.previous = null;
				} else if(current === this.tail) {
					this.tail = this.tail.previous;
					this.tail.next = null;
				} else {
					current.previous.next = current.next;
					current.next.previous = current.previous;
				}
				this.length--;
			}
			current = current.next;
		}
		
	}

	insertAfter(value, toNodeValue) {
		let current = this.head;
		while(current) {
			if(current.value === toNodeValue) {
				let node = new Node(value);
				if(current === this.tail) {
					this.append(value);
				} else {
					current.next.previous = node;
					node.previous = current;
					node.next = current.next;
					current.next = node;
					this.length++;
				}
			}
			current = current.next;
		}
		
	}

	insertBefore(value, toNodeValue) {
		let current = this.head;
		while(current) {
			console.log("current.value", current.value);
			console.log("toNodeValue", toNodeValue);
			if(current.value === toNodeValue) {
				
				let node = new Node(value);
				if(current === this.head) {
					this.prepend(value);
				} else {
					current.previous.next = node;
					node.next = current;
					node.previous = current.previous;
					current.previous = node;
					this.length++;
				}
			}
			current = current.next;
		}
	}

	traverse() {
		let current = this.head;
		let string = '';

		while(current){
			string += current.value + ' ';
			current = current.next;
		}
		return string.trim();
	}

	traverseReverse() {
		let current = this.tail;
		let string = '';
		while(current){
			string += current.value + ' ';
			current = current.previous;
		}
		return string.trim();
	}

	length() {
		return this.length;
	}

	print() {
		let string = '';
		let current = this.head;
		while(current) {
			string += current.value + ' ';
			current = current.next;
		}
		return string.trim();
	}

};

//export { Node, DoublyLinkedList };

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print(); // => ''
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.append(4);
console.log(doublyLinkedList.print()); // => 1 2 3 4
console.log('length is 4:', doublyLinkedList.length); // => 4
doublyLinkedList.remove(3); // remove value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(9); // remove non existing value
doublyLinkedList.print(); // => 1 2 4
doublyLinkedList.remove(1); // remove head
doublyLinkedList.print(); // => 2 4
doublyLinkedList.remove(4); // remove tail
console.log(doublyLinkedList.print()); // => 2
console.log('length is 1:', doublyLinkedList.length); // => 1
doublyLinkedList.remove(2); // remove tail, the list should be empty
console.log(doublyLinkedList.print()); // => ''
console.log('length is 0:', doublyLinkedList.length); // => 0
doublyLinkedList.append(2);
doublyLinkedList.append(6);
console.log(doublyLinkedList.print()); // => 2 6
doublyLinkedList.insertAfter(3, 2);
console.log(doublyLinkedList.print()); // => 2 3 6
doublyLinkedList.traverseReverse();
doublyLinkedList.insertAfter(4, 3);
console.log(doublyLinkedList.print()); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
console.log(doublyLinkedList.print()); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 4);
doublyLinkedList.insertAfter(7, 6); // insertAfter the tail
console.log(doublyLinkedList.print()); // => 2 3 4 5 6 7
doublyLinkedList.insertBefore(60, 2); // insertAfter the tail
console.log(doublyLinkedList.print()); // => 2 3 4 5 6 7
doublyLinkedList.append(8); // add node with normal method
console.log(doublyLinkedList.print()); // => 2 3 4 5 6 7 8
console.log('length is 7:', doublyLinkedList.length); // => 7
doublyLinkedList.traverse();
console.log(doublyLinkedList.print()); // => 12 13 14 15 16 17 18
doublyLinkedList.traverse(function(node) { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.length); // => 7
doublyLinkedList.traverseReverse(); // => 18 17 16 15 14 13 12
console.log(doublyLinkedList.print()); // => 12 13 14 15 16 17 18
doublyLinkedList.prepend(100);
console.log(doublyLinkedList.print());

