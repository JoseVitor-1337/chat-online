"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function mustBeAuthenticated(token) {
    try {
        var id = Object(jsonwebtoken_1.default.verify(token, "jwtsecret")).id;
        return id;
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = mustBeAuthenticated;
