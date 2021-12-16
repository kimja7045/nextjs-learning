const express = require("express");

const router = express.Router();
router.get("/posts", (req, res) => {
  res.json([{ id: 1, name: "luke" }]);
});

router.post("/post", (req, res) => {
  res.json("작성완료");
});

module.exports = router;
