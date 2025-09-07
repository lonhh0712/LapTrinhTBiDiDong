"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx20 = runEx20;
function runEx20() {
    class VCar {
        drive() { console.log("Ô tô đang lái"); }
    }
    class Bike {
        drive() { console.log("Xe máy đang chạy"); }
    }
    new VCar().drive();
    new Bike().drive();
}
