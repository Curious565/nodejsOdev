const http = require("http");
const PORT = 5000;
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
    case "/index":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>index sayfasina hosgeldiniz</h2>");
      break;
    case "/hakkimda":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>hakkimda sayfasina hosgeldiniz</h2>");
      break;
    case "/iletisim":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>iletisim sayfasina hosgeldiniz</h2>");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 NOT FOUND");
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda baslatildi`);
});
