"use strict";

const sendResponse = require("../utils/responseHandler");
const HttpStatus = require("../utils/httpStatus");
const cardService = require("../services/cardService");

/**
 * List all cards of the matching game
 * @param {*} req
 * @param {*} res
 */
exports.getCards = (req, res) => {
  try {
    const pairs = parseInt(req.query.pairs) || 6;
    const cards = cardService.generateRandomCards(pairs);
    sendResponse(res, HttpStatus.OK, "Cards generated successfully", cards);
  } catch (error) {
    sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};
