import PublicChat from "./PublicChat.class";

import { REDIS_HOST, REDIS_PORT } from "../config/enviroment";

import Redis from "ioredis";

interface castIndexToString {
  [index: string]: PublicChat;
  PublicChat: PublicChat;
}

const server = new Redis(REDIS_PORT, REDIS_HOST);

function createChatServer(chatContext: string) {
  let chat: castIndexToString = {
    PublicChat: new PublicChat(server),
  };

  return chat[chatContext];
}

export default createChatServer;
