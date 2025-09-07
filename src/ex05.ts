export function runEx05(): void {
  class BankAccount {
    constructor(public balance: number = 0) {}
    deposit(amount: number): void { this.balance += amount; }
    withdraw(amount: number): boolean {
      if (amount > this.balance) return false;
      this.balance -= amount; return true;
    }
  }
  const acc = new BankAccount(100);
  acc.deposit(50);
  console.log("So du sau khi nap:", acc.balance);
  console.log("Rut 120 ?", acc.withdraw(120), "so du:", acc.balance);
}
