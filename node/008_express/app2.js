const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  console.log("get으로 / 에 요청이 들어왔습니다.");
  console.log(`req.baseUrl: ${req.baseUrl}`);
  console.log(`req.body: ${req.body}`);
  console.log(`req.cookies: ${req.cookies}`);
  console.log(`req.ip: ${req.ip}`);
  console.log(`req.method: ${req.method}`);
  console.log(`req.path: ${req.path}`);
  console.log(`req.query: ${req.query}`);
  console.log(req.params);

  console.table(req.query);
  console.log(req.headers);
  res.send("hello world!!");
});

app.listen(8080);
