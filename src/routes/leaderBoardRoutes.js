const express = require("express");
const router = express.Router();
const controller = require("../controllers/leaderBoardController");

router.get("/", controller.getBoard);
router.post("/save-rank", controller.postRanks);

module.exports = router;
