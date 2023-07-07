const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;
const userRouter = require("./routes/users") 
const productsRouter = require("./routes/products");
const dashbaordRouter = require("./routes/dashboard");
const cors = require('cors');
require("dotenv").config();




const app = express();
app.use(cors());


app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("Successfully connected to the database.")
    console.log(PORT);
    app.listen(PORT, ()=>{
      console.log("listening on 3000");
    })
  })
  .catch((err)=>{
    console.log("Error connecting to Mongo", err);
  })



app.get("/", (req, res)=>{
  res.status(200).json({mssg: "Hello, world!"});
})


app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/dashboard", dashbaordRouter);