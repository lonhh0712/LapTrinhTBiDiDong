"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx06 = runEx06;
function runEx06() {
    class Book {
        constructor(title, author, year) {
            this.title = title;
            this.author = author;
            this.year = year;
        }
    }
    const b = new Book("Lập trình Java", "Hồ Việt", 2023);
    console.log("Book:", b);
}
