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
    console.log("Balance after deposit:", acc.balance);
    console.log("Withdraw 120 ok?", acc.withdraw(120), "balance:", acc.balance);
}
