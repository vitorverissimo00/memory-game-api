"use strict";

const HttpStatus = require("../utils/httpStatus");
const sendResponse = require("../utils/responseHandler");

exports.postRanks = (req, res) => {
  const userData = req.body;
  sendResponse(res, HttpStatus.CREATED, "Post Success", userData);
};

exports.getBoards = (req, res) => {
  const boards = [
    { id: 1, name: "John Wick", score: "54216" },
    { id: 2, name: "Dexter Morgan", score: "35245" },
  ];

  sendResponse(res, HttpStatus.OK, "Get Success", boards);
};
