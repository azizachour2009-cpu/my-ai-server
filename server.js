const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");

  const query = url.parse(req.url, true).query;

  let message = query.msg || "ما كتبت حتى شيء";

  res.write("إنت قلت: " + message);
  res.end();

});

server.listen(3000, () => {
  console.log("Server started");
});
