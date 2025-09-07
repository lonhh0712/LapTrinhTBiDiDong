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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEx16 = runEx16;
function runEx16() {
    function delayA(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function task4() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delayA(100);
            return "Task 1 completed";
        });
    }
    function task5() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delayA(100);
            return "Task 2 completed";
        });
    }
    function task6() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delayA(100);
            return "Task 3 completed";
        });
    }
    function runParallelTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield Promise.all([task4(), task5(), task6()]);
            results.forEach(result => console.log(result));
        });
    }
    runParallelTasks();
}
