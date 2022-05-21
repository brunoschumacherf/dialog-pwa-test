"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = __importDefault(require("./users"));
function find(name) {
    var checkName = new RegExp("[a-zA-Z]+", "i");
    if (!name)
        return users_1.default;
    if (name && !checkName.test(name))
        return [];
    if (name)
        return users_1.default.filter(function (user) {
            return (user.name && user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
        });
}
exports.default = { find: find };
