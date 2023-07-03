const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();


route.get('/', (req, res)=>{
  res.status(200).json({msg: "Welcome to the users endpoint!"});

})

module.exports = route;