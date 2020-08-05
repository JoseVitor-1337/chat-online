import { Redis } from "ioredis";

interface messageInfo {
  text: string;
  emitter: {
    name: string;
    picture?: string;
  };
}

export default class PublicChat {
  public server: Redis;

  constructor(server: Redis) {
    this.server = server;
  }

  public sentMessage(channel: string, messageInfo: messageInfo) {
    this.server.lpush(channel, JSON.stringify(messageInfo));
  }

  public getMessages(channel: string) {
    return this.server.lrange(channel, 0, -1);
  }

  public sequelizedMessages(messages: string[]) {
    let sequelizedMessages = messages.map((messageInfo) =>
      JSON.parse(messageInfo)
    );

    sequelizedMessages = this.turnArrayUpsideDown(sequelizedMessages);

    return sequelizedMessages;
  }

  private turnArrayUpsideDown(array: string[]) {
    return array.map((arrayItem, index) => {
      let arraySize = array.length - 1;
      let lastToBegginIndex = arraySize - index;
      return array[lastToBegginIndex];
    });
  }
}
