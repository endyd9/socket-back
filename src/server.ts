import {app} from "./app";
import {createServer} from "http";
import type {Socket} from "socket.io"
import socket from "./socket";
import * as jwt from "jsonwebtoken"
import {JwtPayload} from "jsonwebtoken";

interface UserData extends JwtPayload{
    data: string,
    userId: string,
    iat: number,
    exp: number
}



const port = process.env.PORT || 4000;

// app.listen(port, () =>
//     console.log(`Example app listening at http://localhost:${port}`)
// );

const server = createServer(app)

const io = socket.init(server)


const tokenVerify = (token:string) => {
    if (token === "") return
    try {
        return jwt.verify(token, "veryverystrongsecret")
    } catch (e) {
        console.log(e)
    }
}

export const list: string[] = []

io.on('connection', (socket: Socket) => {
    const {token} = socket.handshake.auth
    let userData: any

    if (token !== undefined) {
        userData = tokenVerify(token)
    }
    if(userData === undefined) return
    //@ts-ignore
    const {userId} = userData
    list.push(userId)
    console.log(userId)
    socket.join(`${userId}`)
})

server.listen(4000, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})