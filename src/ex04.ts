export function runEx04(): void {
  class Rectangle {
    constructor(public width: number, public height: number) {}
    area(): number { return this.width * this.height; }
    perimeter(): number { return 2 * (this.width + this.height); }
  }
  const r = new Rectangle(5, 10);
  console.log("Dien tich hinh chu nhat:", r.area(), "chu vi:", r.perimeter());
}
