export function runEx27(): void {
  class Person { constructor(public name: string, public age: number){} }
  class Teacher extends Person {
    constructor(name:string, age:number, public subject: string){ super(name,age); }
    introduce(){ console.log(`Tôi là ${this.name}, giáo viên môn ${this.subject}.`); }
  }
  new Teacher("Lan", 30, "Toán").introduce();
}
