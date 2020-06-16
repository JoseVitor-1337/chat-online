"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createChatServer_1 = __importDefault(require("../redis/createChatServer"));
var client = createChatServer_1.default("PublicChat");
function publicChatAPI(socket) {
    socket.on("is_connected", function (emitter) {
        var channel = emitter.channel, user = emitter.user;
        socket.broadcast.emit("user_is_online", user.name);
        var promises = client.getMessages(channel);
        promises.then(function (messages) {
            var sequelizedMessages = client.sequelizedMessages(messages);
            socket.emit(channel + "_all_messages", sequelizedMessages);
        });
    });
    socket.on("is_reconnected", function (channel) {
        var promises = client.getMessages(channel);
        promises.then(function (messages) {
            var sequelizedMessages = client.sequelizedMessages(messages);
            socket.emit(channel + "_all_messages", sequelizedMessages);
        });
    });
    socket.on("send_message", function (message) {
        var channel = message.channel, messageInfo = message.messageInfo;
        client.sentMessage(channel, messageInfo);
        socket.broadcast.emit(channel + "_new_message", messageInfo);
    });
    socket.on("is_disconnected", function (name) {
        socket.broadcast.emit("user_is_offline", name);
        socket.disconnect();
    });
}
exports.default = publicChatAPI;
