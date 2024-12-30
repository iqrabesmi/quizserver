const express = require("express");
const { handlePostUser, handleGetUser } = require('../controllers/user.js');

const userRouter = express.Router();


userRouter.get( '/find' , handleGetUser)
          .post( '/add' , handlePostUser );


module.exports = {
    userRouter,
}