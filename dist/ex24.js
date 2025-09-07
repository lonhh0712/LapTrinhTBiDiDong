"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx24 = runEx24;
function runEx24() {
    class Appliance {
    }
    class Fan extends Appliance {
        turnOn() { console.log("Fan on"); }
    }
    class AirConditioner extends Appliance {
        turnOn() { console.log("AC on"); }
    }
    new Fan().turnOn();
    new AirConditioner().turnOn();
}
