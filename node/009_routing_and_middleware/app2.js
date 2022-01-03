const express = require("express");
const indexRouter = require("./router"); // 뒤에 index.js 생략 가능
const blogRouter = require("./router/blog.js");

const app = express();

app.use("/", indexRouter);
app.use("/blog", blogRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log("애러발생!");
  console.log(err);
});

app.listen(8080);
