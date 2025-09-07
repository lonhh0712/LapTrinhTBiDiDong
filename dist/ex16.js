"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx16 = runEx16;
function runEx16() {
    class Box {
        constructor(value) {
            this.value = value;
        }
        get() { return this.value; }
        set(v) { this.value = v; }
    }
    const b = new Box(123);
    b.set(456);
    console.log("Giá trị hộp:", b.get());
}
