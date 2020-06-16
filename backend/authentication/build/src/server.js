"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var database_1 = __importDefault(require("./database"));
var enviroment_1 = __importDefault(require("./configs/enviroment"));
var port = enviroment_1.default.port, database_url = enviroment_1.default.database_url;
database_1.default(database_url);
app_1.default.listen(port, function () {
    console.log("Server is running on port http://localhost:" + port);
});
