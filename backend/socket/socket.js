const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
// Create Serve express
const app = express();
// pass server express to http server to use it in socket
const server = http.createServer(app);
// create server sockt and pass to it http server
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
  },
});
const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};
const userSocketMap = {}; //{userId:socketId}
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;
  // io.emit() is used to send event to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  // socket.on()is used to listed to the events. can be used both in client and server side
  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
module.exports = { app, io, server, getReceiverSocketId };
