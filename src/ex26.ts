export function runEx26(): void {
  class Product { constructor(public name: string, public price: number){} }
  class Order {
    constructor(public items: Product[] = []){}
    total(): number { return this.items.reduce((s,p)=>s+p.price,0); }
  }
  const order = new Order([ new Product("A", 10), new Product("B", 20) ]);
  console.log("Tổng tiền:", order.total());
}
