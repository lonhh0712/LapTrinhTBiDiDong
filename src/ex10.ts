export function runEx10(): void {
  class Account {
    public username: string;
    private password: string;
    readonly id: number;
    constructor(username: string, password: string, id: number){
      this.username = username; this.password = password; this.id = id;
    }
    checkPassword(pw: string): boolean { return pw === this.password; }
  }
  const a = new Account("viet", "123", 1);
  console.log("Account id:", a.id, "pw :", a.checkPassword("123"));
}
