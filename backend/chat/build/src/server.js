"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var enviroment_1 = require("./config/enviroment");
var chat_online_1 = __importDefault(require("./services/chat-online"));
var server = new http_1.default.Server(app_1.default);
var socketio = socket_io_1.default(server);
socketio.on("connection", chat_online_1.default);
app_1.default.use(cors_1.default());
server.listen(enviroment_1.port, function () {
    console.log("Server is running on port http://localhost:" + enviroment_1.port);
});
