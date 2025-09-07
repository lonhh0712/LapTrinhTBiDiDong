"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx29 = runEx29;
function runEx29() {
    class MoveCar {
        move() { console.log("Ô tô đang di chuyển"); }
    }
    class Robot {
        move() { console.log("Robot đang đi"); }
    }
    new MoveCar().move();
    new Robot().move();
}
