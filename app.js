const express = require("express");
const http= require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const router = require("./server/router.js")

app.use('/deque-task/content/', express.static(path.join(__dirname, './dist/deque-task')))
app.use('/deque', router);

server.listen(8080, ()=>console.log(8080));