const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  console.log("get으로 루트페이지에 요청이 들어왔습니다!!!");
  res.send("<h1>Hello World!</h1><p>hello</p>");
});
app.get("/blog", (req, res, next) => {
  console.log("get으로 /blog에 요청이 들어왔습니다!!!");
  res.send("<h1>Hello blog!</h1><p>hello</p>");
});
app.get("/about", (req, res, next) => {
  console.log("get으로 /about에 요청이 들어왔습니다!!!");
  res.send("<h1>Hello about!</h1><p>hello</p>");
});
app.get("/product", (req, res, next) => {
  console.log("get으로 /product에 요청이 들어왔습니다!!!");
  res.send("<h1>Hello product!</h1><p>hello</p>");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
