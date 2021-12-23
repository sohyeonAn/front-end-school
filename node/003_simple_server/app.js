const http = require('http');
const fs = require('fs');
const app = http.createServer(function (req, res) {
  let url = req.url;
  console.log(`req : ${req}`);
  console.log(`req-url : ${res.url}`);
  if (url == '/') {
    // root 페이지로 들어옴
    url = '/index.html';
  } else if (req.url == '/test1') {
    url = '/test1.html';
  } else if (req.url == '/test2') {
    url = '/test2.html';
  } else if (req.url == '/favicon.ico') {
    return res.writeHead(404);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }

  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + url));
});

app.listen(5500);