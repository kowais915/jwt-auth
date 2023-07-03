
const {
   User
} = require('../models/UserModel');

const signUp= async (req ,res )=>{
    const {email, password} = req.body;
   
    try{
        console.log(email);
        const user = await User.signup(email, password);
        res.status(200).json({email, user});

    }catch(err){
        res.status(400).json({mssg: err.message});
    }
}


const signIn = async (req, res)=>{
    res.status(200).json({
        msg: "Signing up"
    })
}




module.exports = {
    signIn,
    signUp

}