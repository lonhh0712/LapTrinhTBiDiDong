"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx01 = runEx01;
function runEx01() {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        displayInfo() {
            console.log(`Tôi tên là: ${this.name} , ${this.age} tuổi`);
        }
    }
    const me = new Person("Hồ Việt", 20);
    me.displayInfo();
}
