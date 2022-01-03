const express = require("express");

const app = express();
app.use(express.json());
// https://www.postman.com/
// 노션 교안을 참고해주세요.

app.get("/:id/:name", (req, res, next) => {
  console.log("get 요청이 들어왔습니다!");
  console.log("params", req.params);
  res.send("hello get!!");
});
app.get("/", (req, res, next) => {
  console.log("get 요청이 들어왔습니다!");
  console.log("query", req.query);
  res.send("hello get!!");
});

app.post("/", (req, res, next) => {
  console.log("post으로 요청이 들어왔습니다!");
  console.log(req.body);
  res.send("hello post!!");
});
app.listen(8080);
