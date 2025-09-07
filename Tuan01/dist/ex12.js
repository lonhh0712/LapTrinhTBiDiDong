"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx12 = runEx12;
function runEx12() {
    class Bird {
        fly() { console.log("chim đang bay"); }
    }
    class Fish {
        swim() { console.log("Cá đang bơi"); }
    }
    new Bird().fly();
    new Fish().swim();
}
