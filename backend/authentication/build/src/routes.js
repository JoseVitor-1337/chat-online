"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = __importDefault(require("./controllers/User"));
var Authentication_1 = __importDefault(require("./controllers/Authentication"));
var routes = express_1.Router();
routes.post("/user", User_1.default.create);
routes.get("/user", User_1.default.show);
routes.post("/authentication", Authentication_1.default.create);
exports.default = routes;
