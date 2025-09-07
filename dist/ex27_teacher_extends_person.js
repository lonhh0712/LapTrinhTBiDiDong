"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx27 = runEx27;
function runEx27() {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Teacher extends Person {
        constructor(name, age, subject) {
            super(name, age);
            this.subject = subject;
        }
        introduce() { console.log(`I am ${this.name}, teach ${this.subject}.`); }
    }
    new Teacher("Lan", 30, "Math").introduce();
}
