const express = require("express");
const memoryRoutes = require("./memoryRoutes");
const leaderBoardRoutes = require("./leaderBoardRoutes");

const router = express.Router();

router.use("/memory", memoryRoutes);
router.use("/leader-board", leaderBoardRoutes);

module.exports = router;
