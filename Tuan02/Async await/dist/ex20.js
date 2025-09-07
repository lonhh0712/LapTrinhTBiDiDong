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
exports.runEx20 = runEx20;
function runEx20() {
    function fetchUserf(id) {
        const delay = Math.random() * 300;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id, name: `User ${id}` });
            }, delay);
        });
    }
    function timeout(ms) {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error(` Request timed out after ${ms}ms`));
            }, ms);
        });
    }
    function fetchUserWithTimeout(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, timeoutMs = 200) {
            return yield Promise.race([
                fetchUserf(id),
                timeout(timeoutMs)
            ]);
        });
    }
    fetchUserWithTimeout(1)
        .then(user => console.log("User fetched:", user))
        .catch(error => console.error("Error:", error.message));
}
