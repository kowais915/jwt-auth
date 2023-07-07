const express = require('express');

const auth = require('../middleware/auth');

const route = express.Router();
route.use(auth);


route.get('/', (req, res)=>{
    res.status(200).json({msg: "You are on the dashboard page."})

})

route.get('/account', (req, res)=>{
    res.status(200).json({msg: "Here is the information about your account."})
})

module.exports = route;