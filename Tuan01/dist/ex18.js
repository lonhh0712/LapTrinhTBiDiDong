"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx18 = runEx18;
function runEx18() {
    class MathUtil {
        static add(a, b) { return a + b; }
        static subtract(a, b) { return a - b; }
        static multiply(a, b) { return a * b; }
        static divide(a, b) { return a / b; }
    }
    console.log("MathUtil:", MathUtil.add(2, 3), MathUtil.subtract(5, 1), MathUtil.multiply(3, 4), MathUtil.divide(10, 2));
}
