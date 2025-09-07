export function runEx12(): void {
  interface Flyable { fly(): void; }
  interface Swimmable { swim(): void; }
  class Bird implements Flyable { fly(){ console.log("chim đang bay"); } }
  class Fish implements Swimmable { swim(){ console.log("Cá đang bơi"); } }
  new Bird().fly(); new Fish().swim();
}
