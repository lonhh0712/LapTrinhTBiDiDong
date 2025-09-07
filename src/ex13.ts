export function runEx13(): void {
  abstract class Shape { abstract area(): number; }
  class Square extends Shape { constructor(public side: number){ super(); } area(){ return this.side*this.side; } }
  class Circle extends Shape { constructor(public r: number){ super(); } area(){ return Math.PI*this.r*this.r; } }
  console.log("Diẹn tích hình vuông:", new Square(4).area());
  console.log("Diện tích tam giác:", new Circle(3).area().toFixed(2));
}
