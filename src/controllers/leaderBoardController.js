"use strict";

const HttpStatus = require("../utils/httpStatus");
const sendResponse = require("../utils/responseHandler");
const Rank = require("../models/rankModel");

/**
 * Save rank
 * @param {*} req Request
 * @param {*} res Response
 */
exports.postRanks = async (req, res) => {
  let rank = new Rank(req.body);

  try {
    await rank.save();
    sendResponse(res, HttpStatus.CREATED, "Success!", rank);
  } catch (err) {
    sendResponse(res, HttpStatus.BAD_REQUEST, err.message, null);
  }
};

/**
 * Get the last 10 ranks
 * @param {*} req Request
 * @param {*} res Response
 */
exports.getBoard = (req, res) => {
  Rank.find()
    .sort({ score: -1 })
    .limit(10)
    .then((ranks) => {
      sendResponse(res, HttpStatus.OK, "Success!", ranks);
    })
    .catch((err) => {
      sendResponse(res, HttpStatus.BAD_REQUEST, err.message, null);
    });
};
