"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx05 = runEx05;
function runEx05() {
    class BankAccount {
        constructor(balance = 0) {
            this.balance = balance;
        }
        deposit(amount) { this.balance += amount; }
        withdraw(amount) {
            if (amount > this.balance)
                return false;
            this.balance -= amount;
            return true;
        }
    }
    const acc = new BankAccount(100);
    acc.deposit(50);
    console.log("So du sau khi nap:", acc.balance);
    console.log("Rut 120 ?", acc.withdraw(120), "so du:", acc.balance);
}
