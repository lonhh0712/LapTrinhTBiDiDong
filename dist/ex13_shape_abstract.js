"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx13 = runEx13;
function runEx13() {
    class Shape {
    }
    class Square extends Shape {
        constructor(side) {
            super();
            this.side = side;
        }
        area() { return this.side * this.side; }
    }
    class Circle extends Shape {
        constructor(r) {
            super();
            this.r = r;
        }
        area() { return Math.PI * this.r * this.r; }
    }
    console.log("Square area:", new Square(4).area());
    console.log("Circle area:", new Circle(3).area().toFixed(2));
}
