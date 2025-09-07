"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx04 = runEx04;
function runEx04() {
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        area() { return this.width * this.height; }
        perimeter() { return 2 * (this.width + this.height); }
    }
    const r = new Rectangle(5, 10);
    console.log("Dien tich hinh chu nhat:", r.area(), "chu vi:", r.perimeter());
}
