const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  res.write("AI Server is working!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server started");
});
