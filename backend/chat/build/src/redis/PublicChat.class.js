"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublicChat = /** @class */ (function () {
    function PublicChat(server) {
        this.server = server;
    }
    PublicChat.prototype.sentMessage = function (channel, messageInfo) {
        this.server.lpush(channel, JSON.stringify(messageInfo));
    };
    PublicChat.prototype.getMessages = function (channel) {
        return this.server.lrange(channel, 0, -1);
    };
    PublicChat.prototype.sequelizedMessages = function (messages) {
        var sequelizedMessages = messages.map(function (messageInfo) {
            return JSON.parse(messageInfo);
        });
        sequelizedMessages = this.turnArrayUpsideDown(sequelizedMessages);
        return sequelizedMessages;
    };
    PublicChat.prototype.turnArrayUpsideDown = function (array) {
        return array.map(function (arrayItem, index) {
            var arraySize = array.length - 1;
            var lastToBegginIndex = arraySize - index;
            return array[lastToBegginIndex];
        });
    };
    return PublicChat;
}());
exports.default = PublicChat;
