"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx03 = runEx03;
function runEx03() {
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        info() { return `${this.brand} ${this.model} (${this.year})`; }
    }
    const c = new Car("Toyota", "Vios", 2020);
    console.log("Car:", c.info());
}
