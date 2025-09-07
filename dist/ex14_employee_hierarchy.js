"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx14 = runEx14;
function runEx14() {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        work() { console.log(`${this.name} works`); }
    }
    class Manager extends Employee {
        manage() { console.log(`${this.name} manages`); }
    }
    class Developer extends Employee {
        code() { console.log(`${this.name} codes`); }
    }
    new Manager("Anh").manage();
    new Developer("Bình").code();
}
