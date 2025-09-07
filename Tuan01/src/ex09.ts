export function runEx09(): void {
  interface Animal { name: string; sound(): string; }
  class Dog implements Animal {
    constructor(public name: string){}
    sound(): string { return "Gâu gâu"; }
  }
  const d: Animal = new Dog("Milu");
  console.log("Tiếng kêu:", d.name, d.sound());
}
