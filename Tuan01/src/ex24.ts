export function runEx24(): void {
  abstract class Appliance { abstract turnOn(): void; }
  class Fan extends Appliance { turnOn(){ console.log("Fan on"); } }
  class AirConditioner extends Appliance { turnOn(){ console.log("AC on"); } }
  new Fan().turnOn(); new AirConditioner().turnOn();
}
