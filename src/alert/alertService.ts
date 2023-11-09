import express from "express";
import socket from "../socket"
import {Server} from "socket.io";
import {list} from "../server";

export class AlertService {
  io:Server = socket.get()
  public async event() {

    this.io.emit("event")
    this.io.to(["1", "22"]).emit('message',"너만 알고 있어라")
    return {
      hi: 'hi',
    };
  }

  public async event2() {

    this.io.emit("event2")
    return {
      bye: 'bye',
    };
  }
}
