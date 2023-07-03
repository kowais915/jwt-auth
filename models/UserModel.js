const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const validator = require('validator');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        type: String
    }
})


userSchema.statics.signup = async function(email, password){
    // validating

    if(!email || !password)
    {
        throw Error("Please enter both email and password");
    }

    // checking if the email is valid
    if(!validator.isEmail(email))
    {
        throw Error("Please enter a valid email");
    }

    //checking if the password is strong
    if(!validator.isStrongPassword(password)){
        throw Error("Not a strong password");
    }

    const exist = await this.findOne({email});

    if(exist)
    {
        throw new Error('Email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = this.create({email, password: hash});

    return user;


}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}