export function runEx28(): void {
  class Animal {
    protected makeSound(): string { return "..."; }
    speak(){ console.log(this.makeSound()); }
  }
  class Dog extends Animal { protected makeSound(): string { return "Gâu gâu "; } }
  class Cat extends Animal { protected makeSound(): string { return "Meo meo"; } }
  new Dog().speak(); new Cat().speak();
}
