import app from "./app";
import io from "socket.io";
import http from "http";
import cors from "cors";
import { port } from "./config/enviroment";

import PublicChatAPI from "./services/chat-online";

const server = new http.Server(app);
const socketio = io(server);

socketio.on("connection", PublicChatAPI);

app.use(cors());

server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
