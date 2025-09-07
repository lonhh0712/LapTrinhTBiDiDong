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
exports.runEx15 = runEx15;
function runEx15() {
    function delayS(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function task1() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delayS(100);
            return "Task 1 completed";
        });
    }
    function task2() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delayS(100);
            return "Task 2 completed";
        });
    }
    function task3() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delayS(100);
            return "Task 3 completed";
        });
    }
    function runSequentialTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const result1 = yield task1();
            console.log(result1);
            const result2 = yield task2();
            console.log(result2);
            const result3 = yield task3();
            console.log(result3);
        });
    }
    runSequentialTasks();
}
