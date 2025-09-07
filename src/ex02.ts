export function runEx02(): void {
  class Person {
    constructor(public name: string, public age: number) {}
    displayInfo(): void {
      console.log(`Person: ${this.name}, ${this.age}`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
      super(name, age);
    }
    displayAll(): void {
      console.log(`Student: ${this.name}, ${this.age}, grade: ${this.grade}`);
    }
  }
  const s = new Student("Hồ Việt", 20, "12A2");
  s.displayAll();
}
