const express = require("express");
const { handleGetJST, handlePostJST } = require("../controllers/JST");


const JSTRoute = express.Router();


JSTRoute.get( '/find', handleGetJST)
        .post('/add', handlePostJST);


module.exports = {
    JSTRoute,
}