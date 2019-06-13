
class MyQueue {
	constructor() {
		this.stackNewest = [];
		this.stackOldest = [];
	}

	size() {
		return this.stackNewest.length() + this.stackOldest.length();
	}

	add(el) {
		this.stackNewest.push(el);
	}

	shiftStacks(){
		if(this.stackOldest.length === 0) {
			while(this.stackNewest.length > 0) {
				this.stackOldest.push(this.stackNewest.pop());
			}
		}
	}

	peek() {
		this.shiftStacks();
		return this.stackOldest[this.stackOldest.length-1];
	}

	remove() {
		this.shiftStacks();
		return this.stackOldest.pop();
	}
};


let queue = new MyQueue();
queue.add(21);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.add(6);
console.log(queue.peek());
console.log(queue.remove());
