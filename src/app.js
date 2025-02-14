const express = require("express");
const router = require("./routes");
const connectDB = require("./config/database");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());

app.use(cors());

// Routes
app.use("/", router);

// Connect to MongoDB
connectDB();

module.exports = app;
