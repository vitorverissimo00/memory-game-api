const express = require("express");
const router = require("./routes");
const connectDB = require("./config/database");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/", router);

// Connect to MongoDB
connectDB();

module.exports = app;
