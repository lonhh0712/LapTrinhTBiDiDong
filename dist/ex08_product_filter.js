"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx08 = runEx08;
function runEx08() {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    const products = [new Product("A", 50), new Product("B", 200), new Product("C", 150)];
    const filtered = products.filter(p => p.price > 100);
    console.log("Products > 100:", filtered.map(p => `${p.name}:${p.price}`).join(", "));
}
