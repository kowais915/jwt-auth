
const {
   User
} = require('../models/UserModel');

const signIn = async (req ,res )=>{
    const {email, password} = req.body;
   
    try{
        const newUser = await User.create({email, password});
        res.status(200).json({newUser});

    }catch(err){
        res.status(400).json({mssg: err.message});
    }
}


const signUp = async (req, res)=>{
    res.status(200).json({
        msg: "Signing up"
    })
}

module.exports = {
    signIn,
    signUp

}