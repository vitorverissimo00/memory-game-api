const express = require("express");
const memoryRoutes = require("./memoryRoutes");

const router = express.Router();

router.use("/memory", memoryRoutes);

module.exports = router;
