const express = require("express");
const router = express.Router();
const controller = require("../controllers/leaderBoardController");

router.get("/board", controller.getBoards);
router.post("/ranks", controller.postRanks);

module.exports = router;
