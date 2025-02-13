const express = require("express");
const router = require("./routes"); 

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/", router);

module.exports = app;
