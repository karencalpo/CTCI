const minStack = (num) => {
  const stack = [];
  let min = 0;
};


class Stack {
  constructor() {
    this.min = null;
    this.prev_min = null;
    this.stack = [];
    this.pop = false;
  }

  pushStack(num) {
    this.stack.push(num);
    this.pop = false;
    return this.minStack(num);
  };

  popStack() {
    let number = this.stack.pop();
    if(this.stack.length > 0) {
      this.pop = true;
      return this.minStack(number);
    } else {
      this.min = null;
      this.prev_min = null;
      return "Stack is empty.";
    }
  };

  minStack(num) {

    if(this.stack.length === 1) {
      this.min = this.stack[0];
      this.prev_min = this.stack[0];
      return this.min;
    } else if(num < this.min) {
      this.prev_min = this.min;
      this.min = num;
      return this.min;
    } else if(this.pop && num === this.min && this.stack.length !== 0) {
      this.min = Math.min.apply(null, this.stack);
      this.prev_min = num;
      return this.min;
    } else {
      return this.min;
    }

  }
};

const stack = new Stack();
stack.pushStack(5);
stack.pushStack(6);
stack.pushStack(3);
stack.pushStack(7);
stack.pushStack(-1);
stack.pushStack(-3);
stack.pushStack(-10);
stack.pushStack(3);
stack.pushStack(-30);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);
console.log(stack.popStack());
console.log(stack);


