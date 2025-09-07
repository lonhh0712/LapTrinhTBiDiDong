"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx02 = runEx02;
function runEx02() {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        displayInfo() {
            console.log(`Person: ${this.name}, ${this.age}`);
        }
    }
    class Student extends Person {
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
        }
        displayAll() {
            console.log(`Student: ${this.name}, ${this.age}, grade: ${this.grade}`);
        }
    }
    const s = new Student("Hồ Việt", 20, "12A2");
    s.displayAll();
}
