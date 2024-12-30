const express = require("express");
const { handleGetExam, handlePostExam } = require("../controllers/exam");


const Dataroute = express.Router();

Dataroute.get(  '/find' , handleGetExam ) 
         .post( '/add' , handlePostExam );


module.exports = {
    Dataroute,
}