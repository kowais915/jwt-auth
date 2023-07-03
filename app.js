const express = require("express");
const mongoose = require("mongoose");




const app = express();

app.use(express.json());

app.listen(3001, (req, res)=>{
  console.log("listening on 3001");
})

app.get("/", (req, res)=>{
  res.status(200).json({mssg: "Hello, world!"});
})