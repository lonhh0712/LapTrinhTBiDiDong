export function runEx03(): void {
  class Car {
    constructor(public brand: string, public model: string, public year: number) {}
    info(): string { return `${this.brand} ${this.model} (${this.year})`; }
  }
  const c = new Car("Toyota", "Vios", 2020);
  console.log("Car:", c.info());
}
