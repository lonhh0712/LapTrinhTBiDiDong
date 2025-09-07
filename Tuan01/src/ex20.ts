export function runEx20(): void {
  interface Vehicle { drive(): void; }
  class VCar implements Vehicle { drive(){ console.log("Ô tô đang lái"); } }
  class Bike implements Vehicle { drive(){ console.log("Xe máy đang chạy"); } }
  new VCar().drive(); new Bike().drive();
}
