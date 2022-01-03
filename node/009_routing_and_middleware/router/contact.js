const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("/contact 페이지를 호출 했습니다.");
  res.send("<h1>contact page</h1>");
});
module.exports = router;
