const express = require("express");
require("dotenv").config();
//Routes
const userRouter = require("./users/userRouter");

const server = express();



server.use(express.json());

server.use("/api", userRouter);

module.exports = server;
