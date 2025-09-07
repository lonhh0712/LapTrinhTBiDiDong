"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx26 = runEx26;
function runEx26() {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    class Order {
        constructor(items = []) {
            this.items = items;
        }
        total() { return this.items.reduce((s, p) => s + p.price, 0); }
    }
    const order = new Order([new Product("A", 10), new Product("B", 20)]);
    console.log("Tổng tiền:", order.total());
}
