"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx11 = runEx11;
function runEx11() {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        bark() { console.log(`${this.name} barks!`); }
    }
    class Cat extends Animal {
        meow() { console.log(`${this.name} meows!`); }
    }
    new Dog("Cún").bark();
    new Cat("Miu").meow();
}
