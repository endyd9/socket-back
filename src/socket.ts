import {Server} from "socket.io";
import {Server as Socket} from "socket.io"
import * as http from "http";

let io: Socket


const ws = {
    init: (server:http.Server) => {
        io = new Server(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
        })
        return io
    },
    get: () => {
        if (!io) {
            throw new Error("socket is not initialized");
        }
        return io;
    }
};

export default ws