const express = require("express");
const router = express.Router();
const controller = require("../controllers/cardController");

router.get("/", controller.getCards);

module.exports = router;
