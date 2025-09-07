"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx07 = runEx07;
function runEx07() {
    class User {
        constructor(_name) {
            this._name = _name;
        }
        get name() { return this._name; }
        set name(v) { this._name = v.trim(); }
    }
    const u = new User("Hồ Việt");
    console.log("User name:", u.name);
    u.name = "  HV ";
    console.log("User name sau khi đặt:", u.name);
}
