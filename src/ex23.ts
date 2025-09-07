export function runEx23(): void {
  interface Payment { pay(amount: number): void; }
  class CashPayment implements Payment { pay(amount:number){ console.log(`Pay cash: ${amount}`);} }
  class CardPayment implements Payment { pay(amount:number){ console.log(`Pay card: ${amount}`);} }
  new CashPayment().pay(100); new CardPayment().pay(200);
}
