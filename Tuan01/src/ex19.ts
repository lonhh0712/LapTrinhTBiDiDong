export function runEx19(): void {
  class Animal { speak(): void { console.log("..."); } }
  class Dog extends Animal { speak(){ console.log("Gâu gâu"); } }
  class Cat extends Animal { speak(){ console.log("Meo meo"); } }
  const animals: Animal[] = [new Dog(), new Cat()];
  animals.forEach(a => a.speak());
}
