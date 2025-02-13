const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Get Success",
    request: "GET",
  });
});

router.post("/", (req, res) => {
  res.status(201).send({
    message: "Post Success",
    user: req.body,
  });
});

module.exports = router;
