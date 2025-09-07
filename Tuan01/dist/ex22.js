"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx22 = runEx22;
function runEx22() {
    class Stack {
        constructor() {
            this.data = [];
        }
        push(item) { this.data.push(item); }
        pop() { return this.data.pop(); }
        peek() { return this.data[this.data.length - 1]; }
        isEmpty() { return this.data.length === 0; }
    }
    const st = new Stack();
    st.push(1);
    st.push(2);
    console.log(st.peek());
    console.log(st.pop());
    console.log(st.isEmpty());
}
