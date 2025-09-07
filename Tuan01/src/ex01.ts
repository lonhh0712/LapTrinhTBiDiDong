export function runEx01(): void {
  class Person {
    constructor(public name: string, public age: number) {}
    displayInfo(): void {
      console.log(`Tôi tên là: ${this.name} , ${this.age} tuổi`);
    }
  }
  const me = new Person("Hồ Việt", 20);
  me.displayInfo();
}
