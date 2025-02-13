"use strict";

const sendResponse = require("../utils/responseHandler");

exports.post = (req, res) => {
  res.status(201).send({
    message: "Post Success",
    user: req.body,
  });
};

exports.getCards = (req, res) => {
  const mockedData = [
    { id: 1, content: "emoji", contentId: "1" },
    { id: 2, content: "emoji", contentId: "1" },
    { id: 3, content: "emoji", contentId: "2" },
    { id: 4, content: "emoji", contentId: "2" },
    { id: 5, content: "emoji", contentId: "3" },
    { id: 6, content: "emoji", contentId: "3" },
    { id: 7, content: "emoji", contentId: "4" },
    { id: 8, content: "emoji", contentId: "4" },
  ];

  sendResponse(res, 200, "Get Success", mockedData);
};
