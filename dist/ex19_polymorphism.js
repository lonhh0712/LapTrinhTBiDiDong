"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx19 = runEx19;
function runEx19() {
    class Animal {
        speak() { console.log("..."); }
    }
    class Dog extends Animal {
        speak() { console.log("Woof"); }
    }
    class Cat extends Animal {
        speak() { console.log("Meow"); }
    }
    const animals = [new Dog(), new Cat()];
    animals.forEach(a => a.speak());
}
