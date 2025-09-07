export function runEx16(): void {
  class Box<T> { constructor(public value: T){} get(){ return this.value; } set(v:T){ this.value = v; } }
  const b = new Box<number>(123); b.set(456); console.log("Giá trị hộp:", b.get());
}
