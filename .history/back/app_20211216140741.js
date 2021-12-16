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
const postRouter = require("./routes/post");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/posts", (req, res) => {
  res.json([{ id: 1, name: "luke" }]);
});

app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});
