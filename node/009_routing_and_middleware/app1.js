const express = require("express");
const indexRouter = require("./router"); // router/index.js
const aRouter = require("./router/a.js");
const bRouter = require("./router/b.js");
const cRouter = require("./router/c.js");
const aboutRouter = require("./router/about.js");
const contactRouter = require("./router/contact.js");
const blogRouter = require("./router/blog.js");

const app = express();

app.use("/", indexRouter);
app.use("/a", aRouter);
app.use("/b", bRouter);
app.use("/c", cRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/blog", blogRouter);

// app.use("/about", (req, res, next) => {
//   res.send("hello about!");
// });
// app.use("/contact", (req, res, next) => {
//   res.send("hello contact!");
// });
// app.use("/blog", (req, res, next) => {
//   res.send("hello blog!");
// });

app.use((req, res, next) => {
  res.status(404).send("못찾음!");
});

app.use((err, req, res, next) => {
  console.log("에러발생 에러발생");
  console.log(err);
});
app.listen(8080);
