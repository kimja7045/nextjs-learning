// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   res.write("<h1>Hello node write</h1>");
//   res.write("Hello node write");
//   res.end("Hello node");
// });
// server.listen(3065, () => {
//   console.log("서버 실행 중");
// });
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});
app.listen(3065, () => {
  console.log("서버 실행 중");
});
