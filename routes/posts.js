const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Archive posts");
});

router.get("/new", (req, res) => {
  res.send("New post maker");
});

module.exports = router;
