"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx17 = runEx17;
function runEx17() {
    class Logger {
        constructor() { }
        static get instance() { var _a; return (_a = this._instance) !== null && _a !== void 0 ? _a : (this._instance = new Logger()); }
        log(msg) { console.log(`[LOG] ${msg}`); }
    }
    Logger._instance = null;
    Logger.instance.log("Xin chào");
}
