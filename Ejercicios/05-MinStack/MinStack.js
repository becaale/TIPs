class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.min = null;
  }
}

class MinStack {
  constructor() {
    this.head = null;

    this.push = (value) => {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.head.next) this.head.min = value;
      else this.head.min = value < this.head.next.min ? value : this.head.next.min;
    };

    this.pop = () => {
      if (!this.head) return "Stack vacío";
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    };

    this.peek = () => (this.head ? this.head.value : "Stack vacío");

    this.min = () => {
      // if (!this.head) return "Stack vacío";
      // let current = this.head;
      // let min = current.value;

      // while (current.next) {
      //   current = current.next;
      //   if (current.value < min) min = current.value;
      // }
      // return min;
      return this.head.min;
    };
  }
}

// push(value) : añadir el elemento, value, al stack.
// pop() : sacar un elemento del stack.
// min() : obtener el elemento con el valor mínimo.
// peek(): obtener el elemento que está el en top del Stack

module.exports = {
  Node,
  MinStack,
};

const miNodo = new Node(5);
console.log(miNodo);

const miStack = new MinStack();
miStack.push(5);
miStack.push(10);
miStack.push(7);
miStack.push(1);
console.log(miStack);

console.log(miStack.pop());
// console.log(miStack.pop());
// console.log(miStack.pop());

console.log(miStack.min());

// const arr = [1, 2, 3];
// Array.isArray(); // método de la CLASE ARRAY
// arr.push(5); // método dinámico => pertenece a la INSTANCIA
