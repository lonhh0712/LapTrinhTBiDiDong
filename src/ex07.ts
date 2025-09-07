export function runEx07(): void {
  class User {
    constructor(private _name: string) {}
    get name(): string { return this._name; }
    set name(v: string) { this._name = v.trim(); }
  }
  const u = new User("Hồ Việt");
  console.log("User name:", u.name);
  u.name = "  HV ";
  console.log("User name sau khi đặt:", u.name);
}
