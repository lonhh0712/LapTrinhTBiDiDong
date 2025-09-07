export function runEx11(): void {
  class Animal { constructor(public name: string){} }
  class Dog extends Animal { bark(){ console.log(`${this.name} barks!`);} }
  class Cat extends Animal { meow(){ console.log(`${this.name} meows!`);} }
  new Dog("Cún").bark();
  new Cat("Miu").meow();
}
