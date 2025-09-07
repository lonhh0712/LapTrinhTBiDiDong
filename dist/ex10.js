"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx10 = runEx10;
function runEx10() {
    class Account {
        constructor(username, password, id) {
            this.username = username;
            this.password = password;
            this.id = id;
        }
        checkPassword(pw) { return pw === this.password; }
    }
    const a = new Account("viet", "123", 1);
    console.log("Account id:", a.id, "pw :", a.checkPassword("123"));
}
