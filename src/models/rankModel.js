"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rankSchema = new Schema({
  name: {
    type: String,
    required: [true, "The field name is required"],
    index: true,
  },
  score: {
    type: Number,
    required: [true, "The field score is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rank", rankSchema);
