"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx17 = runEx17;
function runEx17() {
    function simulateTaskk(id, delayMs) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Task ${id} completed after ${delayMs}ms`);
            }, delayMs);
        });
    }
    function runTasksSequentially() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            const taskPromises = [
                simulateTaskk(1, 100),
                simulateTaskk(2, 150),
                simulateTaskk(3, 500)
            ];
            try {
                for (var _d = true, taskPromises_1 = __asyncValues(taskPromises), taskPromises_1_1; taskPromises_1_1 = yield taskPromises_1.next(), _a = taskPromises_1_1.done, !_a; _d = true) {
                    _c = taskPromises_1_1.value;
                    _d = false;
                    const result = _c;
                    console.log(result);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = taskPromises_1.return)) yield _b.call(taskPromises_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    runTasksSequentially();
}
