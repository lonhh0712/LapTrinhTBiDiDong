"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx15 = runEx15;
function runEx15() {
    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    }
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    class Library {
        constructor() {
            this.books = [];
            this.users = [];
        }
        addBook(b) { this.books.push(b); }
        addUser(u) { this.users.push(u); }
        listBooks() { console.log("Books:", this.books); }
    }
    const lib = new Library();
    lib.addBook(new Book("TS Cơ bản", "Trần Ban"));
    lib.addUser(new User("Hồ Việt"));
    lib.listBooks();
}
