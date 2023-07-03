const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const {

  signIn,
  signUp
} = require('../controller/userController.js');


route.get('/', (req, res)=>{
  res.status(200).json({msg: "Welcome to the users endpoint!"});

})



// an endpoint for signup

route.post('/signup', signUp);






// an enpoint for login
route.post('/login', signIn)


module.exports = route;