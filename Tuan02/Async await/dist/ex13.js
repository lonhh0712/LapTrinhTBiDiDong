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
exports.runEx13 = runEx13;
function runEx13() {
    function simulateTasks(ms) {
        return new Promise((resovle, reject) => {
            setTimeout(() => {
                if (ms > 1500) {
                    resovle(`Task completed after ${ms} ms`);
                }
                else {
                    reject(new Error("task fail"));
                }
            }, ms);
        });
    }
    function runTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield simulateTasks(500);
                console.log(result);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    runTasks();
}
