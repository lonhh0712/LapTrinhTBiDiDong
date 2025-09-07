export function runEx22(): void {
  class Stack<T>{
    private data: T[] = [];
    push(item:T){ this.data.push(item); }
    pop(): T | undefined { return this.data.pop(); }
    peek(): T | undefined { return this.data[this.data.length-1]; }
    isEmpty(): boolean { return this.data.length === 0; }
  }
  const st = new Stack<number>(); st.push(1); st.push(2); console.log(st.peek()); console.log(st.pop()); console.log(st.isEmpty());
}
