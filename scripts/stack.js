class Stack {
  constructor() {
    this.stack = [];
    this.index = -1;
  }

  push(x) {
    this.index += 1;
    this.stack[this.index] = x;
  }

  pop() {
    this.index -= 1;
  }

  top() {
    return this.stack[this.index];
  }

  isEmpty() {
    if (this.index === -1) return true;
    else return false;
  }
}
