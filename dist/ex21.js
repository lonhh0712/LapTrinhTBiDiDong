"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx21 = runEx21;
function runEx21() {
    class Repository {
        constructor() {
            this.items = [];
        }
        add(item) { this.items.push(item); }
        getAll() { return [...this.items]; }
    }
    const repo = new Repository();
    repo.add("one");
    repo.add("two");
    console.log(repo.getAll());
}
