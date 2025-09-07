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
exports.runEx19 = runEx19;
function runEx19() {
    function fetchUserr(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        id,
                        name: `User ${id}`
                    });
                }, 100);
            });
        });
    }
    function fetchUsers(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromises = ids.map(id => fetchUserr(id));
            const users = yield Promise.all(userPromises);
            return users;
        });
    }
    fetchUsers([1, 2, 3]).then(users => console.log(" Users fetched:", users));
}
