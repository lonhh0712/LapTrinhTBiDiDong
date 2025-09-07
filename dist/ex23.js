"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx23 = runEx23;
function runEx23() {
    class CashPayment {
        pay(amount) { console.log(`Pay cash: ${amount}`); }
    }
    class CardPayment {
        pay(amount) { console.log(`Pay card: ${amount}`); }
    }
    new CashPayment().pay(100);
    new CardPayment().pay(200);
}
