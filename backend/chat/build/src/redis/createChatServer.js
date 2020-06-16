"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PublicChat_class_1 = __importDefault(require("./PublicChat.class"));
var ioredis_1 = __importDefault(require("ioredis"));
var teste = /** @class */ (function () {
    function teste() {
    }
    return teste;
}());
var server = new ioredis_1.default();
function createChatServer(chatContext) {
    var chat = {
        PublicChat: new PublicChat_class_1.default(server),
    };
    return chat[chatContext];
}
exports.default = createChatServer;
