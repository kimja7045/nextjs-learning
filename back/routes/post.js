const express = require("express");

const router = express.Router();


router.post("/", (req, res) => {
  res.json("작성완료");
});

module.exports = router;
