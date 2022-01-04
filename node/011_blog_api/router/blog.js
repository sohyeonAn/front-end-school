const nunjucks = require("nunjucks");
const express = require("express");

const router = express.Router();

let blogs = require("../database/dataBlog");

// /blog: 블로그 글 리스트 전부
// /blog?section=:section: 해당 섹션만
router.get("/", (req, res, next) => {
  console.log(req.query);
  const section = req.query.section;
  const data = section ? blogs.filter((b) => b.section === section) : blogs;
  res.status(200).json(data);
});

// /blog/:id: 블로그 상세 글
router.get("/:id", (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;
  const blog = blogs.find((b) => b.id == id);

  if (blog) {
    blog.viewCount += 1;
    res.status(200).json(blog);
  } else {
    res
      .status(404)
      .json({ warning: `${id}로 접근하는 것은 비정상적인 접근입니다.` });
  }
});

router.post("/", (req, res, next) => {
  const id = blogs.length + 1;
  const title = req.body.title;
  const content = req.body.content;
  const section = req.body.section;
  const viewCount = 0;
  const pubDate = new Date().toString();
  const modDate = new Date().toString();

  let blog = { id, title, content, section, pubDate, modDate, viewCount };
  blogs.push(blog);
  res.status(200).json(blogs);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const blog = blogs.find((b) => b.id == id);
  console.log("blog", blog);
  if (blog) {
    // 각각의 값이 비어있을 수도 있음.
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.section = req.body.section;
    blog.modDate = new Date().toString();
    res.status(200).json(blogs);
  } else {
    res.status(404);
  }
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  blogs = blogs.filter((b) => b.id != id);
  res.status(200).json(blogs);
});

module.exports = router;
