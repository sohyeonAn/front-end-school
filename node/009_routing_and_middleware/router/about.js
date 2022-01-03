const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("/about 페이지를 호출 했습니다.");
  res.send("<h1>about page</h1>");
});

module.exports = router;
