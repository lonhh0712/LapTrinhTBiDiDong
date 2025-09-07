"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx12 = runEx12;
function runEx12() {
    class Bird {
        fly() { console.log("Bird flying"); }
    }
    class Fish {
        swim() { console.log("Fish swimming"); }
    }
    new Bird().fly();
    new Fish().swim();
}
