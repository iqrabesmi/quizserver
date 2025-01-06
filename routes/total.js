const express = require("express");
const { handleTotalGet } = require("../controllers/total");

const TotalRoute = express.Router();

TotalRoute.get("/find", handleTotalGet);

module.exports = {
    TotalRoute,
};
