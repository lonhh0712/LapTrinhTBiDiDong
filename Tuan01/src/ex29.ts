export function runEx29(): void {
  interface Movable { move(): void; }
  class MoveCar implements Movable { move(){ console.log("Ô tô đang di chuyển"); } }
  class Robot implements Movable { move(){ console.log("Robot đang đi"); } }
  new MoveCar().move(); new Robot().move();
}
