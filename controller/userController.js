const jwt = require('jsonwebtoken')
const express = require('express');
require("dotenv").config();

const {
   User
} = require('../models/UserModel');

// function for creating a token




const createToken = (_id)=>{
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '2d'}); 
}


const signUp= async (req ,res )=>{
    const {email, password} = req.body;
<<<<<<< HEAD
   
    console.log("email", email);
    console.log("password", password);
    try{
       
=======

    try{

>>>>>>> f21cb3e3a6771054f5c2f360df54f827e46d0348
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json(email, token);

    }catch(err){
        res.status(400).json({error: err.message});
    }

    // const {email, password} = req.body;
   
    // try{
    //     console.log(email);
       
    //     const user = await User.signup(email, password);
    //      // creating a new token
    //      const token = createToken(user._id);
    //     res.status(200).json({email, token});

    // }catch(err){
    //     res.status(400).json({mssg: err.message});
    // }
}


// sign in function implementation

const signIn = async (req, res)=>{
    const {email, password} = req.body;

    try {
         const user = await User.login(email, password);
         const token = createToken(user._id);

         res.status(200).json({email, token});

    }catch(err){
        res.status(400).json({mssg: err.message});
    }
}




module.exports = {
    signIn,
    signUp

}