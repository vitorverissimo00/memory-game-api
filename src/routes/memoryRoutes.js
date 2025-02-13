const express = require("express");
const router = express.Router();
const controller = require("../controllers/memoryController");

router.get("/cards", controller.getCards);
router.post("/", controller.post);

module.exports = router;
