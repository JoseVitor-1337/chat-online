import PublicChat from "./PublicChat.class";

import Redis from "ioredis";

class teste {

}

interface castIndexToString {
  [index: string]: PublicChat
  PublicChat: PublicChat
}

const server = new Redis();

function createChatServer(chatContext: string) {
  
  let chat: castIndexToString = {
      PublicChat: new PublicChat(server),

  }

  return chat[chatContext];
}

export default createChatServer;
