const http = require("http");
const url = require("url");

const server = http.createServer(async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  const query = url.parse(req.url, true).query;
  const message = query.msg || "سلام";

  try {

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: message
      })
    });

    const data = await response.json();

    if (data.output) {
      res.end(data.output[0].content[0].text);
    } else {
      res.end("ما فماش جواب من AI");
    }

  } catch (error) {

    res.end("صار خطأ في AI");

  }

});

server.listen(3000, () => {
  console.log("Server started");
});
