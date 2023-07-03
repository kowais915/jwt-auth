const express = require("express");
const mongoose = require("mongoose");
const PORT = 3001 || process.env.PORT;
const userRouter = require("./routes/users") 
require("dotenv").config();




const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("Successfully connected to the database.")
    app.listen(PORT, ()=>{
      console.log("listening on 3001");
    })
  })
  .catch((err)=>{
    console.log("Error connecting to Mongo", err);
  })



app.get("/", (req, res)=>{
  res.status(200).json({mssg: "Hello, world!"});
})


app.use("/users", userRouter);