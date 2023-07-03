const mongoose = require('mongoose');
const express = require('express');


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

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}