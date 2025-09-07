"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx28 = runEx28;
function runEx28() {
    class Animal {
        makeSound() { return "..."; }
        speak() { console.log(this.makeSound()); }
    }
    class Dog extends Animal {
        makeSound() { return "Gâu gâu "; }
    }
    class Cat extends Animal {
        makeSound() { return "Meo meo"; }
    }
    new Dog().speak();
    new Cat().speak();
}
