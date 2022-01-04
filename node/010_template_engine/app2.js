const nunjucks = require("nunjucks");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "html");
// ejs는 app.set('view engine', 'ejs');

nunjucks.configure("template", {
  autoescape: true,
  express: app,
  watch: true,
});

app.get("/", (req, res) => {
  res.render("test2.html", {
    예금: [
      {
        은행명: "신한",
        계좌번호: 1,
        금액: 100,
      },
      {
        은행명: "우리",
        계좌번호: 2,
        금액: 200,
      },
      {
        은행명: "농협",
        계좌번호: 3,
        금액: 300,
      },
    ],
    기술: ["python", "javascript", "HTML", "CSS"],
    습득연도: [
      [2000, 2021],
      [2005, 2021],
    ],
  });
});

app.listen(8080);
