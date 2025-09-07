export function runEx08(): void {
  class Product { constructor(public name: string, public price: number) {} }
  const products = [ new Product("Laptop", 50), new Product("Man hinh", 200), new Product("Chuot", 150) ];
  const filtered = products.filter(p => p.price > 100);
  console.log("San pham co gia > 100:", filtered.map(p=>`${p.name}:${p.price}`).join(", "));
}
