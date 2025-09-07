export function runEx14(): void {
  class Employee { constructor(public name: string){} work(){ console.log(`${this.name} works`);} }
  class Manager extends Employee { manage(){ console.log(`${this.name} manages`);} }
  class Developer extends Employee { code(){ console.log(`${this.name} codes`);} }
  new Manager("Anh").manage(); new Developer("Bình").code();
}
