const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("Hello node write");
  res.write("Hello node write");
  res.end("Hello node");
});
server.listen(3065, () => {
  console.log("서버 실행 중");
});
