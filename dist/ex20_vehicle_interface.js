"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx20 = runEx20;
function runEx20() {
    class VCar {
        drive() { console.log("Car driving"); }
    }
    class Bike {
        drive() { console.log("Bike riding"); }
    }
    new VCar().drive();
    new Bike().drive();
}
