const http = require("http");
http.createServer((req, res) => {
  console.log(req, url, req.method);
});
http.listen(3065);
