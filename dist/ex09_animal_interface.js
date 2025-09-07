"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx09 = runEx09;
function runEx09() {
    class Dog {
        constructor(name) {
            this.name = name;
        }
        sound() { return "Woof"; }
    }
    const d = new Dog("Milu");
    console.log("Animal sound:", d.name, d.sound());
}
