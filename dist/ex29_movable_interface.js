"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx29 = runEx29;
function runEx29() {
    class MoveCar {
        move() { console.log("Car moving"); }
    }
    class Robot {
        move() { console.log("Robot moving"); }
    }
    new MoveCar().move();
    new Robot().move();
}
