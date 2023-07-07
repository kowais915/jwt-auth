const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();

route.get('/', (req, res)=>{

    res.status(200).json({
        msg: "here are all the products"
    });

})


route.get('/:id', (req, res)=>{
    const {id } = req.params;
    res.status(200).json({msg: `Here is the product with ${id}`});

})

module.exports = route;