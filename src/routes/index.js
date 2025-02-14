const express = require("express");
const cardRoutes = require("./cardRoutes");
const leaderBoardRoutes = require("./leaderBoardRoutes");

const router = express.Router();

router.use("/cards", cardRoutes);
router.use("/board", leaderBoardRoutes);

module.exports = router;
