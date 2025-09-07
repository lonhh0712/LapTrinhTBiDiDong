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
    const products = [new Product("Laptop", 50), new Product("Man hinh", 200), new Product("Chuot", 150)];
    const filtered = products.filter(p => p.price > 100);
    console.log("San pham co gia > 100:", filtered.map(p => `${p.name}:${p.price}`).join(", "));
}
