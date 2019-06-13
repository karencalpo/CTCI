class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
};


class NodeList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	appendTail(value) {
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

	printLinkedList() {
		let node = this.head;
		while(node !== null) {
			console.log(node.value)
			node = node.next;
		};
	}

	partition(x) {
		let node = this.head, smallerHead, smallerTail, largerHead, largerTail;
		smallerHead, smallerTail, largerHead, largerTail = null;

		while(node) {
			let next = node.next;
			node.next = null;

			if(node.value >= x) {
				if(!largerTail) {
					largerHead = largerTail = node;
				} else {
					largerTail = largerTail.next = node;
				}
			
			} else if(node.value < x) {

				if(!smallerHead) {
					smallerHead = smallerTail = node;
				} else {
					smallerTail = smallerTail.next = node;
				}

			}

			node = next;
			
		}

		if(smallerTail) {
			smallerTail.next = largerHead;
		}
		return smallerHead || largerHead;
	};
}


const list = new NodeList();
list.appendTail(5);
list.appendTail(8);
list.appendTail(3);
list.appendTail(2);
list.appendTail(7);
list.appendTail(1);
list.appendTail(4);
list.appendTail(9);
list.appendTail(15);
list.appendTail(30);
list.partition(7);
list.printLinkedList();
