const express = require("express");
const { handleGetJST } = require("../controllers/JST");


const JSTRoute = express.Router();


JSTRoute.get(handleGetJST)
        .post(handlePostJST);


module.exports = {
    JSTRoute,
}