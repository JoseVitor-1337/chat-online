import { Socket } from "socket.io";
import createChatServer from "../redis/createChatServer";

const client = createChatServer("PublicChat");

interface IEmitter {
  user: {
    name: string
  }
  channel: string
}

interface IMessage {
  messageInfo: {
    text: string
    emitter: {
      name: string
    }
  }
  channel: string
}


export default function publicChatAPI(socket: Socket) {

  socket.on("is_connected", function (emitter: IEmitter) {
    const { channel, user } = emitter

    socket.broadcast.emit("user_is_online", user.name);

    const promises = client.getMessages(channel);

    promises.then((messages: string[]) => {
      let sequelizedMessages = client.sequelizedMessages(messages);

      socket.emit(`${channel}_all_messages`, sequelizedMessages);
    });
  });

  socket.on("is_reconnected", function (channel: string) {
    const promises = client.getMessages(channel);

    promises.then((messages: string[]) => {
      let sequelizedMessages = client.sequelizedMessages(messages);

      socket.emit(`${channel}_all_messages`, sequelizedMessages);
    });
  });

  socket.on("send_message", function (message: IMessage) {
    const { channel, messageInfo } = message

    client.sentMessage(channel, messageInfo);

    socket.broadcast.emit(`${channel}_new_message`, messageInfo);
  });

  socket.on("is_disconnected", function (name: string) {
    socket.broadcast.emit("user_is_offline", name);

    socket.disconnect();
  });
}
